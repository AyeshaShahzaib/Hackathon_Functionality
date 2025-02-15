import { NextResponse } from 'next/server';
import data from '@/data/chef.json';

export const dynamic = 'force-static'; // Force static generation

export async function GET() {
  return NextResponse.json(data);
}
