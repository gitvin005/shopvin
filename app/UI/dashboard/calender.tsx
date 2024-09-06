'use client';

import { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar';

import { format, parse, startOfWeek, getDay } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';



// Localizer setup for date handling
const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

// Define an interface for appointment data
interface Appointment {
  id: number;
  name: string;
  date: string;
}

export default function AppointmentsCalendar() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Fetch appointments from the API
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch('/api/dashboardAppointment');
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }

    fetchAppointments();
  }, []);

  // Map appointments to events for react-big-calendar
  const events: Event[] = appointments.map((appointment) => ({
    id: appointment.id,
    name: `${appointment.name}`,
    start: new Date(appointment.date),
    end: new Date(appointment.date),
    allDay: true,
  }));

  return (
    <div style={{ height: 500, margin: '50px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        
      />
    </div>
  );
}
