import {NextResponse} from "next/server";

export async function GET() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(API_URL);
    const response = await fetch(`${API_URL}/api/v1/contacts/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      return NextResponse.json(
        {success: false, error: 'Ошибка при работе с API'},
        {status: response.status}
      );
    }
    const data = await response.json();
    return NextResponse.json( data );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
