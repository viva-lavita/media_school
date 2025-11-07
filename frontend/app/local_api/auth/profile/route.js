import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_BACKEND;

async function tryRefreshAndSetAccess() {
  const refreshToken = cookies().get("refresh")?.value;
  if (!refreshToken) return false;

  const refreshRes = await fetch(`${API_URL}/jwt/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if (!refreshRes.ok) return false;
  const refreshData = await refreshRes.json();

  const secureCookie = process.env.NODE_ENV === "production";
  cookies().set("access", refreshData.access, {
    httpOnly: true,
    secure: secureCookie,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 5,
  });

  return true;
}

export async function GET() {
  try {
    let accessToken = cookies().get("access")?.value;

    if (accessToken) {
      const verifyRes = await fetch(`${API_URL}/jwt/verify/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: accessToken }),
      });

      if (!verifyRes.ok) {
        accessToken = null;
      }
    }

    if (!accessToken) {
      const refreshed = await tryRefreshAndSetAccess();
      if (!refreshed) {
        return NextResponse.json({ authenticated: false }, { status: 401 });
      }
      accessToken = cookies().get("access")?.value;
    }

    const profileRes = await fetch(`${API_URL}/users/me/`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!profileRes.ok) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const profile = await profileRes.json();
    return NextResponse.json({ authenticated: true, profile });
  } catch (err) {
    console.error("profile error:", err);
    return NextResponse.json({ authenticated: false, error: "server_error" }, { status: 500 });
  }
}
