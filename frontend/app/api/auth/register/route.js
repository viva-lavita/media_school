import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const res = await fetch("http://217.114.11.243/api/v1/users/", {
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
