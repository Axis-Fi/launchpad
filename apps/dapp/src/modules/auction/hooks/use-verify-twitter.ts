import { useQuery } from "@tanstack/react-query";
import { ipfsServers, environment } from "@axis-finance/env";

const { url: ipfsUrl } =
  ipfsServers[environment.current] ?? ipfsServers.staging;

const fetchVerificationStatus = async () => {
  const response = await fetch(`${ipfsUrl}/auth/is-verified`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch verification status");
  }

  return response.json();
};

type UseVerifyTwitter =
  | {
      isVerified: false;
      user: undefined;
      isLoading: boolean;
      error: Error | null;
      redirectToVerify: () => void;
    }
  | {
      isVerified: true;
      user: { id: string; name: string };
      isLoading: false;
      error: Error | null;
      redirectToVerify: () => void;
    };

const useVerifyTwitter = (): UseVerifyTwitter => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["twitter-verification"],
    queryFn: fetchVerificationStatus,
  });

  const redirectToVerify = () => {
    window.location.href = `${ipfsUrl}/auth/verify-twitter-handle`;
  };

  return {
    isVerified: data?.success,
    user: data?.user,
    isLoading,
    error,
    redirectToVerify,
  };
};

export { useVerifyTwitter };
