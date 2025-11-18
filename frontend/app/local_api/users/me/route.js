import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {

  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('access')?.value;

    if (!accessToken) {
      return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    // Verify the token
    const verifyRes = await fetch(`${API_URL}/jwt/verify/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: accessToken }),
    });

    if (!verifyRes.ok) {
      return NextResponse.json({ error: "Token invalid" }, { status: 401 });
    }

    // If valid, fetch user data
    const res = await fetch(`${API_URL}/users/me/`, {
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

export async function PATCH(req) {
  try {
    const body = await req.json();
    const token = cookies().get("access")?.value;

    const res = await fetch(`${API_URL}/users/me/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(body),
    })

    const data = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify({ success: false, detail: data.detail || "Ошибка обновления" }), {
        status: res.status,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({success: true, data}), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  } catch (err) {
    return new Response(JSON.stringify({ success: false, message: "Ошибка сервера" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}