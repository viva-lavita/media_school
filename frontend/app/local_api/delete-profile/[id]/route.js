import { cookies } from "next/headers";

export async function DELETE(req, { params }) {
  const { id } = params;
  const API_URL = process.env.NEXT_PUBLIC_BACKEND;

  const cookieHeader = cookies().toString();
  const token = cookies().get("access")?.value;

  try {
    const backendRes = await fetch(`${API_URL}/users/${id}/`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "Cookie": cookieHeader,
      },
    });

    if (!backendRes.ok) {
      const errText = await backendRes.text();
      return new Response(JSON.stringify({ error: errText || "Ошибка удаления" }), {
        status: backendRes.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Аккаунт удалён" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Ошибка сервера" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
