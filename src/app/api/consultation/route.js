import { NextResponse } from 'next/server';
import connectToDatabase from '@/../mongodb/config/dbConfig';
import Consultation from '@/../mongodb/models/consultation.model';

async function checkDependencies() {
  try {
    await connectToDatabase();
    return { db: 'ok' };
  } catch (err) {
    throw new Error('Database connection failed');
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // Create new instance with form data
    const consultation = new Consultation(body);

    // Validate and save document
    await consultation.validate();
    const savedData = await consultation.save();

    return NextResponse.json({ message: 'Request submitted successfully' }, { status: 201 });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).reduce((acc, key) => {
        acc[key] = error.errors[key].message;
        return acc;
      }, {});
      return NextResponse.json({ errors }, { status: 400 });
    }
    return NextResponse.json({ message: error.message || 'Server error' }, { status: 500 });
  }
}
