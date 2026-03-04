import { NextResponse, NextRequest } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const clerkUser = await currentUser()
        if (!clerkUser?.id) {
            return NextResponse.json({ error: "Unauthorized" });
        }

        const { newPlan } = await request.json();

        if (!newPlan) {
            return NextResponse.json({ error: "New plan is required" }, { status: 400 });
        }

        const profile = await prisma.profile.findUnique({
            where: {
                userId: clerkUser.id,
            },
            select: {
                subscriptionTier: true,
                subscriptionActive: true,
            }
        });

        if (!profile) {
            return NextResponse.json({ error: "Profile not found" }, { status: 404 });
        }

        return NextResponse.json({ subscription: profile });

    } catch {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}