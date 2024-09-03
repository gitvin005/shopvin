'use client';

import { Button } from "./button";
import { monsterrat } from "../UI/fonts";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData{
    service: string;
    doctor: string;
    date: string;
    time: string;
    name: string;
    phone: string;
    email: string;
}


export default function AppointmentForm(){
    const [formData, setFormData ] = useState<FormData>({
        service: '',
        doctor: '',
        date: '',
        time: '',
        name: '',
        phone: '',
        email: '',
    });
    const [isSubmitting, setIsSubmitting] = useState<Boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage('');
        setErrorMessage('');
    
        try{
            const response = await fetch ('./api/appointmentformdata', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSuccessMessage('Your Appointment has been Booked');
            } else {
                throw new Error('Failed to Book Appointment')
            }
        } catch(error: any){
            setErrorMessage (error.message || 'Something Went Wrong');
        } finally {
            setIsSubmitting(false);
        }
    };
    return(
        <section className={`${monsterrat.className} py-10`}>
            <div className="container mx-auto">
                <h2 className="text-4xl text-center font-bold">Book Appointment</h2>
                <form onSubmit={handleSubmit}>
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    <div className="flex gap-10 mt-10">
                        <div className="flex-1">
                            <div className="flex flex-col gap-5">
                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Service"> Select Service</label>
                                    <select name="service" id="Service"
                                    value={formData.service}
                                    onChange={handleChange}
                                     className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                     required>
                                        <option value="Cleaning">Cleaning</option>
                                        <option value="Implants">Implants</option>
                                        <option value="Whitening">Whitening</option>
                                        <option value="Ortho">Ortho</option>
                                    </select>
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Doctor"> Select Doctor</label>
                                    <select name="doctor" id="Doctor"
                                    value={formData.doctor}
                                    onChange={handleChange}
                                     className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                     required>
                                        <option value="dr smith">Dr. Smith</option>
                                        <option value="dr sam">Dr. sam</option>
                                        <option value="dr dow">Dr. doe</option>
                                        <option value="dr johm">Dr. johm</option>
                                    </select>
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Date"> Select Date</label>
                                    <input type="date" name="date" id="Date"
                                    value={formData.date}
                                    onChange={handleChange} className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                    required/>
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Time"> Select Time</label>
                                    <input type="time" name="time" id="Time"
                                    value={formData.time}
                                    onChange={handleChange} className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" 
                                    required/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-5">
                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Name">Full Name</label>
                                    <input type="text" name="name" id="Name"
                                    value={formData.name}
                                    onChange={handleChange} className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" 
                                    required/>
                                </div>

                                <div className=" mt-2 flex flex-col gap-2">
                                    <label htmlFor="Phone">Pnone No</label>
                                    <input type="tel" name="phone" id="Phone"
                                    value={formData.phone}
                                    onChange={handleChange} className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" 
                                    required/>
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="email" id="Email"
                                    value={formData.email}
                                    onChange={handleChange} className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"/>
                                </div>

                                <div className=" mt-2 flex flex-col items-start gap-2">
                                    <Button type="submit"  className="text-center">
                                    {isSubmitting ? 'Sendig....' : 'Confirm Booking'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}