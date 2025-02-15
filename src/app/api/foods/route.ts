import { NextResponse } from 'next/server';
import data from '@/data/food.json';

export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json(data);
}
