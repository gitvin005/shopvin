import { NextRequest, NextResponse } from 'next/server';  
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Type definition for contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Named export for the POST method
export async function POST(req: NextRequest) {
  try {
    const { name, email, message }: ContactFormData = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Save data to the database
    await prisma.contact.create({
      data: { name, email, message },
    });

    

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  } finally {
    // Close Prisma Client connection
    await prisma.$disconnect();
  }
}
