"use client";

import { Spinner } from "@/components/spinner";
import { useUser } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { availablePlans } from "@/lib/plans";

async function fetchSubscriptionStatus() {
  const response = await fetch("/api/profile/subscription-status");
  return response.json();
}

export default function Profile() {
  const { isLoaded, isSignedIn, user } = useUser();
  const { data: subscription, isLoading, isError, error } = useQuery({
    queryKey: ["subscription"], 
    queryFn: fetchSubscriptionStatus,
    enabled: isLoaded && isSignedIn,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const currentPlan = availablePlans.find(
    (plan) => plan.interval === subscription.subscription.subscriptionTier
  );

  if (!isLoaded) {
    return (
      <div>
        {" "}
        <Spinner /> <span> Loading...</span>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div>
        {" "}
        <p> Please sign in to view your profile.</p>
      </div>
    );
  }
  return (
    <div>
      {" "}
      <Toaster position="top-center" />
      <div>
        <div>
          <div>
            {user.imageUrl && (
              <Image src={user.imageUrl} 
              alt="User Avatar"
              width={100}
              height={100} 
              />
            )}
            <h1> {user.firstName} {user.lastName} </h1>
            <p> {user.primaryEmailAddress?.emailAddress} </p>
          </div>
          <div>
            <h2> Subscription Details </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
