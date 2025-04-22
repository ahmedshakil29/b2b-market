import { NextResponse } from "next/server";
import data from "@/seedData/salesSummary.json";

export async function GET() {
  return NextResponse.json(data);
}
