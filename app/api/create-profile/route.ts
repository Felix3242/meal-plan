import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function POST() {
    const clerkUser = await currentUser()
    if (!clerkUser) {
        return NextResponse.json({ error: "User not found in Clerk" }, { status: 401 });
    }

    const email = clerkUser?.emailAddresses[0].emailAddress || ""
    

}