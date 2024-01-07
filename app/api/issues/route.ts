import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { schemaIssue } from "./schema";
import { error } from "console";

export async function GET(request: NextRequest) {
  const issues = await prisma.issue.findMany();
  return NextResponse.json({ data: issues }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //validate the body
  const validatedBody = schemaIssue.safeParse(body);
  // check it
  if (!validatedBody.success)
    return NextResponse.json(
      { error: validatedBody.error.errors },
      { status: 500 }
    );
  //is it exist in db
  const isItExist = !!(await prisma.issue.findUnique({
    where: {
      title: validatedBody.data.title,
    },
  }));
  //if it is exist?
  if (isItExist)
    return NextResponse.json(
      { error: "This user is already exist" },
      { status: 400 }
    );
  //write on DB
  await prisma.issue.create({
    data: {
      title: validatedBody.data.title,
      description: validatedBody.data.description,
    },
  });
  //respond to the POST
  return NextResponse.json({ data: validatedBody.data }, { status: 201 });
}
