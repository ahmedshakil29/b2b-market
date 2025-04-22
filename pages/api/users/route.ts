import { NextResponse } from "next/server";
import data from "@/seedData/users.json";

export async function GET() {
  return NextResponse.json(data);
}
