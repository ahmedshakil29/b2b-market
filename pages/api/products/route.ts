import { NextResponse } from "next/server";
import data from "@/seedData/products.json";

export async function GET() {
  return NextResponse.json(data);
}

// export async function GET() {
//   return NextResponse.json(data);
// }
