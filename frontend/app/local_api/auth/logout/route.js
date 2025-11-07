import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const secureCookie = process.env.NODE_ENV === "production";

  cookies().set("access", "", {
    httpOnly: true,
    secure: secureCookie,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  cookies().set("refresh", "", {
    httpOnly: true,
    secure: secureCookie,
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  return NextResponse.json({ success: true });
}
