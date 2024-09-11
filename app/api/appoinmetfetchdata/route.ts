import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const appointments = await prisma.appointment.findMany();
    return NextResponse.json(appointments);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to fetch appointments' });
  }
}

export async function POST(request: Request) {
  try {
    const { id, status } = await request.json();

    // Ensure 'status' is a valid field in the Appointment model
    const updatedAppointment = await prisma.appointment.update({
      where: { id },
      data: { status },  // Ensure 'status' is in the correct data structure
    });

    return NextResponse.json({ message: 'Status updated', appointment: updatedAppointment });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to update status' });
  }
}