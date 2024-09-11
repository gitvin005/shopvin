'use client';

import { Button } from "../../button";
import { useEffect, useState } from "react";

type Appointment = {
    id: number;
    name: string;
    phone: string;
    email: string;
    service: string;
    doctor: string;
    status: 'complete' | 'cancel' | 'pending'; // Adjust based on your possible statuses
  };

export default function AppointmentsTable(){
    const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch('/api/appoinmetfetchdata');
      if (response.ok) {
        const data: Appointment[] = await response.json();
        setAppointments(data);
      } else {
        // Handle errors here
        console.error('Failed to fetch appointments');
      }
    };
    fetchAppointments();
  }, []);

  const updateStatus = async (id: number, status: 'complete' | 'cancel') => {
    const response = await fetch('/api/appoinmetfetchdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, status }),
    });
    if (response.ok) {
      // Refresh the data after updating status
      const data: Appointment[] = await (await fetch('/api/appoinmetfetchdata')).json();
      setAppointments(data);
    } else {
      // Handle errors here
      console.error('Failed to update status');
    }
  };
      
    return(
        <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Name</th>
                    <th scope="col" className="px-4 py-5 font-medium ">Phone No</th>
                    <th scope="col" className="px-4 py-5 font-medium ">Email</th>
                    <th scope="col" className="px-4 py-5 font-medium ">Service</th>
                    <th scope="col" className="px-4 py-5 font-medium ">Doctor</th>
                    <th scope="col" className="px-4 py-5 font-medium ">Status</th>
                    <th scope="col" className="px-4 py-5 font-medium ">Action</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {appointments.map(appointment => (
                <tr key={appointment.id} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">{appointment.name}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">{appointment.phone}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">{appointment.email}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">{appointment.service}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">{appointment.doctor}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">{appointment.status}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-center items-center gap-4">
                                {appointment.status === 'pending' && (
                                    <>
                                        <Button onClick={() => updateStatus(appointment.id, 'complete')}>Complete</Button>
                                        <Button variant="secondary" onClick={() => updateStatus(appointment.id, 'cancel')}>Cancel</Button>
                                    </>
                                )}
                                {appointment.status === 'complete' && (
                                    <Button variant="secondary" disabled>Complete</Button>
                                )}
                                {appointment.status === 'cancel' && (
                                    <Button variant="secondary" disabled>Cancel</Button>
                                )}
                            </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}