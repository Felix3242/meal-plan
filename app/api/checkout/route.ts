import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    
    const {planType, userId, email} = await request.json()

    if(!planType || !userId || !email) {
        return NextResponse.json({ error: "Plan type, user ID, and email are required" }, { status: 400 })
    }

    const allowedPlanTypes = ["week", "month", "year"]

    if (!allowedPlanTypes.includes(planType)) {
        return NextResponse.json({ error: "Invalid plan type" }, { status: 400 })
    }

    

}