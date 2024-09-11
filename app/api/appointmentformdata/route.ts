import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AppointmentFormData{
    name: string;
    email: string;
    phone: string;
    service: string;
    doctor: string;
    date: string;
    time: string;
}

export async function POST(req: NextRequest){
    try{
        const {name, email, phone, service, doctor, date, time}: AppointmentFormData = await req.json();
        if (!name || !email || !phone || !service || !doctor || !date || !time) {
            return NextResponse.json({message: 'All Fields Are Required'}, {status:400});
        }

        await prisma.appointment.create({
            data: {name, email, phone, service, doctor, date, time},
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