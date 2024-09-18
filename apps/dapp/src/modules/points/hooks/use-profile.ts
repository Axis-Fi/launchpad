import { useEffect, useState } from "react";
import { z } from "zod";
import { useAccount } from "wagmi";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { Address } from "@repo/types";
import { usePoints } from "context/points-provider";
import { useReferrer } from "state/referral";
import { useNavigate } from "react-router-dom";

export const schema = z.object({
  username: z
    .string()
    .min(1, { message: "Username must be at least 1 characters" })
    .refine((value) => value.includes(" ") === false, {
      message: "Username must not contain any whitespace",
    }),
  referrer: z.string().optional(),
  avatar: z.instanceof(File).optional(),
});

export type ProfileForm = z.infer<typeof schema>;

export function useProfile() {
  const points = usePoints();
  const navigate = useNavigate();
  const { address: connectedAddress } = useAccount();

  const referrer = useReferrer();

  const register = useMutation({
    mutationFn: async (profile: ProfileForm) =>
      points.register(profile.username, referrer, profile.avatar),
    onSuccess: () => profileQuery.refetch(),
  });

  const updateProfile = useMutation({
    mutationFn: async (profile: ProfileForm) =>
      points.setUserProfile(profile.username, profile.avatar),
    onSuccess: () => profileQuery.refetch(),
  });

  const linkWallet = useMutation({
    mutationFn: async () => points.linkWallet(),
    onSuccess: () => profileQuery.refetch(),
  });

  const signIn = useMutation({
    mutationFn: async () => points.signIn(),
  });

  const signOut = () => {
    points.signOut();
    navigate("/points/sign-in");
  };

  const [username, setUsername] = useState<string | null>(null);

  const usernameQuery = useQuery({
    queryKey: ["usernameQuery", username],
    queryFn: () => points.isUsernameAvailable(username!),
    enabled: username != null,
  });

  const userRegisteredQuery = useQuery({
    queryKey: ["userRegisteredQuery"],
    queryFn: points.isUserRegistered,
  });

  const profileQuery = useQuery({
    queryKey: ["profileQuery"],
    queryFn: points.getUserProfile,
    enabled: points.isUserSignedIn(),
  });

  const [address, setAddress] = useState<Address | null>(null);

  const walletPointsQuery = useQuery({
    queryKey: ["walletPointsQuery", address],
    queryFn: () => points.getWalletPoints(address!),
    enabled: address != null,
  });

  const isConnectedWalletRegisteredQuery = useQuery({
    queryKey: ["isConnectedWalletRegistered", connectedAddress],
    queryFn: () => points.isWalletRegistered(connectedAddress!),
    enabled: connectedAddress != null,
  });

  // Automatically sign the user out if they connect a new wallet
  // which is linked to a different user profile
  useEffect(() => {
    async function signOut() {
      if (connectedAddress == null || profileQuery.data?.wallets == null) {
        return;
      }

      const userHasLinkedConnectedWallet = profileQuery.data.wallets.some(
        (wallet) =>
          wallet.address?.toLowerCase() === connectedAddress?.toLowerCase(),
      );

      const isConnectedWalletRegistered = isConnectedWalletRegisteredQuery.data;

      if (isConnectedWalletRegistered && !userHasLinkedConnectedWallet) {
        points.signOut();
      }
    }
    signOut();
  }, [
    connectedAddress,
    isConnectedWalletRegisteredQuery.data,
    points,
    profileQuery.data,
  ]);

  return {
    profile: profileQuery.data,
    isUserRegistered: userRegisteredQuery,
    isUserSignedIn: points.isUserSignedIn(),
    usernameCheck: {
      ...usernameQuery,
      fetch: setUsername,
    },
    walletPoints: {
      ...walletPointsQuery,
      fetch: setAddress,
    },
    register,
    updateProfile,
    signIn,
    signOut,
    linkWallet,
  };
}
