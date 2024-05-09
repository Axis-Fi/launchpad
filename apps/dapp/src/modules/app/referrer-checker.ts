import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSetReferrer } from "state/referral";
import { isAddress } from "viem";

/** Checks if exists and returns a URL param named referrer*/
export function ReferrerChecker() {
  // Get search params from the URL
  const [searchParams] = useSearchParams();
  const setReferral = useSetReferrer();

  // Get the referrer from the search params, if it exists
  const encodedReferrer = searchParams.get("ref") ?? "";

  // Decode the referrer address
  const referrer = atob(encodedReferrer);

  console.log(referrer);

  // Parse the referrer into an address, otherwise the referrer is the zero address
  // TODO support address lookup from ENS name in referral?
  const referrerAddress = isAddress(referrer) ? referrer : null;

  React.useEffect(() => {
    if (referrerAddress) setReferral(referrerAddress);
  }, [referrerAddress, setReferral]);

  return null;
}
