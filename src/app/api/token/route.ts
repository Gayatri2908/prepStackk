export const runtime = "nodejs";

import { StreamChat } from 'stream-chat';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { userId } = await req.json();

  if (!process.env.NEXT_PUBLIC_STREAM_API_KEY || !process.env.STREAM_SECRET_KEY) {
    console.error("Missing Stream environment variables");
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const serverClient = StreamChat.getInstance(
    process.env.NEXT_PUBLIC_STREAM_API_KEY,
    process.env.STREAM_SECRET_KEY
  );

  const token = serverClient.createToken(userId);

  return NextResponse.json({ token });
}
