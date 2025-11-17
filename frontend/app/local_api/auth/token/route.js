import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const accessToken = cookies().get("access")?.value;

    if (!accessToken) {
      return NextResponse.json({ error: "No access token" }, { status: 401 });
    }

    return NextResponse.json({ accessToken });
  } catch (err) {
    console.error("Error getting token:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
