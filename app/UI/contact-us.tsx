"use client";

import { Button } from "./button";
import { monsterrat } from "./fonts";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSect() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Define event type for input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Define event type for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send your message.');
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`${monsterrat.className} py-10`}>
      <h2 className="text-4xl font-bold text-center">Contact Us</h2>
      <div className="container mx-auto">
        <div className="flex gap-10 mt-10">
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
              {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
              <div className="flex flex-col mt-4">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  id="Name"
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="Email"
                  className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="Message">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id="Message"
                  className="h-1/4 block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                ></textarea>
              </div>
              <div>
                <Button type="submit" disabled={isSubmitting} className="mt-4">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1">
            <div className="mt-3">
              <h3 className="text-xl font-bold">Our Address</h3>
              <p className="mt-2">123 Smile Street, Happy Town, SM12345</p>
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-bold">Contact Details</h3>
              <div className="flex flex-col mt-2">
                <Link href="tel:1234567890">+123 456 7890</Link>
                <Link href="mailto:contact@smileclinic.com">contact@smileclinic.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
