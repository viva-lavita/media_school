import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('access')?.value;

    if (!accessToken) {
      return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    // Verify the token
    const verifyRes = await fetch(`${API_URL}/api/jwt/verify/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: accessToken }),
    });

    if (!verifyRes.ok) {
      return NextResponse.json({ error: "Token invalid" }, { status: 401 });
    }

    // If valid, fetch user data
    const res = await fetch(`${API_URL}/api/users/me/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error("Ошибка проверки авторизации:", err);
    return NextResponse.json(
      { error: "Ошибка сервера при проверке авторизации" },
      { status: 500 }
    );
  }
}
