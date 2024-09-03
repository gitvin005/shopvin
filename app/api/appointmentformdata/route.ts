import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface AppointmentFormData{
    service: string;
    doctor: string;
    date: string;
    time: string;
    name: string;
    phone: string;
    email: string;
}

export async function POST(req: NextRequest){
    try{
        const {service, doctor, date, time, name, phone, email}: AppointmentFormData = await req.json();
        if (!service || !doctor || !date || !time || !name || !phone || !email ) {
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