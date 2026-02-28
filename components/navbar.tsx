"use client";

import Image from "next/image"
import Link from "next/link"
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs";

export default function NavBar() {
    const { isLoaded, user } = useUser()

    if (!isLoaded) return <p> Loading... </p>;
    return (
        <nav> 
            {" "}
            <div>
                <Link href="/">
                    <Image src="/logo.png" width={60} height={60} alt="Logo" />
                </Link>
            </div>
            <div>
                {" "}
                <SignedIn>
                    <Link href="/mealplan"> Mealplan </Link>
                    {/* Profile Picture */}
                    {user?.imageUrl ? (
                    <Link href="/profile">
                        {" "}
                        <Image
                            src={user.imageUrl}
                            alt="Profile Picture"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />{" "}
                    </Link>
                    ) : (
                        <div></div>
                    )}
                    <SignOutButton>
                        <button> Sign Out </button>
                    </SignOutButton>
                </SignedIn>
                <SignedOut>
                </SignedOut>
            </div>
        </nav>
    );
}