import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const res = await fetch(`http://localhost:3002/product/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data);
}

export async function PUT(request, { params }) {
  const body = await request.json();
  const res = await fetch(`http://localhost:3002/product/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    redirect: "follow",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return NextResponse.json(data);
}

export async function DELETE(request, { params }) {
  const res = await fetch(`http://localhost:3002/product/${params.id}`, {
    method: "DELETE",
    redirect: "follow",
  });
  const data = await res.json();
  return NextResponse.json(data);
}
