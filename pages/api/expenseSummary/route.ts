import { NextResponse } from "next/server";
import data from "@/seedData/expenseSummary.json";

export async function GET() {
  return NextResponse.json(data);
}
