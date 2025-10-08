import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const refreshToken = cookies().get("refresh")?.value;

    if (!refreshToken) {
      return NextResponse.json({ error: "Нет refresh токена" }, { status: 401 });
    }

    // Запрос на обновление access токена
    const res = await fetch("http://217.114.11.243/api/v1/jwt/refresh/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: res.status });
    }

    const secureCookie = process.env.NODE_ENV === "production";

    // Обновляем токен
    cookies().set("access", data.access, {
      httpOnly: true,
      secure: secureCookie,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 5,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Ошибка обновления токена:", err);
    return NextResponse.json(
      { error: "Ошибка сервера при обновлении токена" },
      { status: 500 }
    );
  }
}
