import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch("http://217.114.11.243/api/v1/jwt/create/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: res.status });
    }

    // true в prod, для локала будет запись в cookie
    const secureCookie = process.env.NODE_ENV === "production";


    cookies().set("access", data.access, {
      httpOnly: true,
      secure: secureCookie,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 5,
    });


    cookies().set("refresh", data.refresh, {
      httpOnly: true,
      secure: secureCookie,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Ошибка авторизации:", err);
    return NextResponse.json(
      { error: "Ошибка сервера при авторизации" },
      { status: 500 }
    );
  }
}
