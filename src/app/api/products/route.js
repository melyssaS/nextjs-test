import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:3002/product");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const res = await fetch("http://localhost:3002/product", {
    method: "POST",
    body: JSON.stringify(body),
    redirect: "follow",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}
