import Image from "next/image";
import Header from "@/app/UI/sidenav";
import { Button } from "./UI/button";
import Link from "next/link";
import { Card } from "@nextui-org/react";
import { monsterrat } from "./UI/fonts";
import TestimonialSlider from "./UI/textimonialslider";
import ContactSect from "./UI/contact-us";
import Footer from "./UI/footer";

export default function Home() {
  return ( 
    <>
      <Header />
      <main> 
        <section className={`${monsterrat.className} w-full flex gap-10 item-center min-h-screen bg-fixed bg-no-repeat bg-cover bg-center`} style={{ backgroundImage: "url('/dentalcare.png')" }}>
          <div className="flex-1"></div>
          <div className="flex-1 flex flex-col  justify-center items-center ">
            <div className="w-full flex gap-2 flex-col  justify-center items-center bg-white rounded-2xl p-10">
              <h2 className="text-4xl font-bold">Welcome to SmileClinic</h2>
              <h4 className="text-base">Your Smile is our Priority</h4>
              <Link legacyBehavior href="/appointment">
                <Button>Book Appointment</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1"></div>
        </section>

        {/* services section  */}

        <section className={`${monsterrat.className} py-10`}>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center">Our Services</h2>
            <div className="flex mt-10 gap-5 flex-wrap">
              <div className="flex-1">
                <Card className="items-center justify-center p-5 border-2 gap-2">
                  <Image
                    src="/implant.png"
                    alt="Implant"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-lg font-bold">Dental Implants</h3>
                  <p className="text-center">
                  Replace missing teeth with durable and natural-looking dental implants.
                  </p>
                </Card>
              </div>
              <div className="flex-1">
                <Card className="items-center justify-center p-5 border-2 gap-2">
                  <Image
                    src="/teeth-white.png"
                    alt="Implant"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-lg font-bold">Teeth Whitening</h3>
                  <p className="text-center">
                  Brighten your smile with our professional teeth whitening services.
                  </p>
                </Card>
              </div>
              <div className="flex-1">
                <Card className="items-center justify-center p-5 border-2 gap-2">
                  <Image
                    src="/ortho.png"
                    alt="Implant"
                    width={150}
                    height={150}
                  />
                  <h3 className="text-lg font-bold">Orthodontics</h3>
                  <p className="text-center">
                  Achieve a perfect smile with our comprehensive orthodontic treatments.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* testimonial section  */}

        <div className="bg-red-50 py-10">
          <TestimonialSlider />
        </div>

        {/* Contact section  */}

        <ContactSect />

        <Footer />

      </main>
    </>
    
  );
}
