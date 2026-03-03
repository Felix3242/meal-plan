import { NextResponse } from "next/server";

export async function GET() {
    try {

    } catch (error: unknown) {
        return NextResponse.json({ error: "Internal Error" }, { status: 500 });
    }
}