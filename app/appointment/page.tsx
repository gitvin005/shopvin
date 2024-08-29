import  Header  from "@/app/UI/sidenav";
import { monsterrat } from "../UI/fonts";
import { Button } from "../UI/button";
import Footer from "../UI/footer";
export default function Page(){
    return(
        <>
        
        <Header />
        <section className={`${monsterrat.className} py-10`}>
            <div className="container mx-auto">
                <h2 className="text-4xl text-center font-bold">Book Appointment</h2>
                <form>
                    <div className="flex gap-10 mt-10">
                        <div className="flex-1">
                            <div className="flex flex-col gap-5">
                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Service"> Select Service</label>
                                    <select name="service" id="Service" className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500">
                                        <option value="Cleaning">Cleaning</option>
                                        <option value="Implants">Implants</option>
                                        <option value="Whitening">Whitening</option>
                                        <option value="Ortho">Ortho</option>
                                    </select>
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Doctor"> Select Doctor</label>
                                    <select name="doctor" id="Doctor" className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500">
                                        <option value="dr smith">Dr. Smith</option>
                                        <option value="dr sam">Dr. sam</option>
                                        <option value="dr dow">Dr. doe</option>
                                        <option value="dr johm">Dr. johm</option>
                                    </select>
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Date"> Select Date</label>
                                    <input type="date" name="date" id="Date" className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"/>
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Time"> Select Time</label>
                                    <input type="time" name="time" id="Time" className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" />
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-5">
                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Name">Full Name</label>
                                    <input type="text" name="name" id="Name" className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" />
                                </div>

                                <div className=" mt-2 flex flex-col gap-2">
                                    <label htmlFor="Phone">Pnone No</label>
                                    <input type="tel" name="phone" id="Phone" className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" />
                                </div>

                                <div className="mt-2 flex flex-col gap-2">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="email" id="Email" className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"/>
                                </div>

                                <div className=" mt-2 flex flex-col items-start gap-2">
                                    <Button type="submit" className="text-center">Confirm Booking</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

        <Footer />
        </>
    )
}