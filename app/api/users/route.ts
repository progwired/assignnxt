import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json({ data: users }, { status: 200 });
}
