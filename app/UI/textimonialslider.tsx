"use client";

import { useState } from "react";
import { monsterrat } from "./fonts";

const testimonials = [
    {
        name: "John Smith",
        feedback: "The best dental experience I've ever had! The staff is amazing and my teeth have never looked better.",
        image: "/c1.png",
    },
    {
        name: "Jane Doe",
        feedback: "SmileClinic transformed my smile! Highly recommend their services.",
        image: "/c2.png",
    },
    {
        name: "Mark Johnson",
        feedback: "Professional and friendly! I felt very comfortable throughout my treatment.",
        image: "/c3.png",
    },
]

export default function TestimonialSlider(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      };
    return(
        <section className="relative max-w-3xl mx-auto py-12">
      <div className={`${monsterrat.className} flex items-center justify-between`}>
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          &#10094; {/* Left arrow */}
        </button>
        <div className="flex-1 mx-4 p-6 bg-white shadow-lg rounded-lg text-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <p className="text-lg italic text-gray-600">{testimonials[currentIndex].feedback}</p>
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            {testimonials[currentIndex].name}
          </h3>
          
        </div>
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </section>
    )
}