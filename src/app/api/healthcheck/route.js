import { NextResponse } from 'next/server';
import connectToDatabase from '@/../mongodb/config/dbConfig';

async function checkDependencies() {
  try {
    await connectToDatabase();
    return { db: 'ok' };
  } catch (err) {
    throw new Error('Database connection failed');
  }
}

export async function GET() {
  try {
    const dependencies = await checkDependencies();
    return NextResponse.json(
      {
        status: 'ok',
        timestamp: new Date().toISOString(),
        dependencies,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        message: error.message || 'Health check failed',
      },
      { status: 500 },
    );
  }
}
