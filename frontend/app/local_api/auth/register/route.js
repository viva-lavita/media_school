import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const API_URL = process.env.NEXT_PUBLIC_BACKEND;
    const res = await fetch(`${API_URL}/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Ошибка регистрации:", err);
    return NextResponse.json(
      { success: false, message: "Ошибка на сервере регистрации" },
      { status: 500 }
    );
  }
}
