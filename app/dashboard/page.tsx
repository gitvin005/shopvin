
import Image from "next/image";
import DashHeader from "../UI/dashboard/sidenav";
import { monsterrat } from "../UI/fonts";
import { Button } from "../UI/button";



export default function Page(){
    return(
        <>
        <div className={`${monsterrat.className} flex min-h-screen`}>
            <div className="w-1/6 border border-r-gray-200">
                <DashHeader />
            </div>

            <section className=" w-5/6 p-5">
                <div>
                    <div className="flex gap-5 items-center justify-end">
                        <h3>Hello Dr.Smith</h3>
                        <Image src='/profile.png' alt="profile" width={60} height={60} />
                    </div>
                </div>

                <div className="flex gap-5 mt-10 pl-4">
                    <div className="w-4/5 border-y-2 border-r-2 border-gray-200 rounded-r-2xl py-5 pr-5">
                        <div className="flex gap-4">
                            <div className="flex-1 p-5 rounded-2xl bg-blue-200">
                                <div className="pt-10">
                                    <div>
                                        <h4 className="text-lg font-medium text-primary-color">Booked appointments</h4>
                                        <div className="flex gap-4 justify-between items-bottom mt-4">
                                            <h2 className="text-5xl font-semibold ">100+</h2>
                                            <Image src='/dashboard/Icon calendar check-01.svg' alt="Calender" width={60} height={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-5 rounded-2xl bg-blue-200">
                            <div className="pt-10">
                                    <div>
                                        <h4 className="text-lg font-medium text-primary-color">Pending appointments</h4>
                                        <div className="flex gap-4 justify-between items-bottom mt-4">
                                            <h2 className="text-5xl font-semibold ">100+</h2>
                                            <Image src='/dashboard/icon_pending-appointment.svg' alt="Calender" width={60} height={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-5 rounded-2xl bg-blue-200">
                            <div className="pt-10">
                                    <div>
                                        <h4 className="text-lg font-medium text-primary-color">Doctors appointments</h4>
                                        <div className="flex gap-4 justify-between items-bottom mt-4">
                                            <h2 className="text-5xl font-semibold ">100+</h2>
                                            <Image src='/dashboard/icon_doctor-appointment.svg' alt="Calender" width={60} height={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-5 rounded-2xl bg-blue-200">
                            <div className="pt-10">
                                    <div>
                                        <h4 className="text-lg font-medium text-primary-color">Services</h4>
                                        <div className="flex gap-4 justify-between items-bottom mt-4">
                                            <h2 className="text-5xl font-semibold ">100+</h2>
                                            <Image src='/dashboard/icon_service.svg' alt="Calender" width={60} height={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5">
                        <h2 className="text-lg font-semibold">Upcomming Appointments</h2>
                        <div className="mt-3 flex flex-col gap-4">
                            <div className="flex-1 rounded-2xl bg-blue-200 p-5">
                                <h4 className="text-lg font-semibold my-2">John Doe</h4>
                                <h5 className="text-sm"><b>Doctor:</b> DR.Smith</h5>
                                <h5 className="text-sm"><b>Date and Time:</b> 24-6-2024, 12.00am</h5>
                                <div className="flex gap-3 mt-3">
                                    <Button>Reschedule</Button>
                                    <Button variant="secondary">Cancel</Button>
                                </div>
                            </div>

                            <div className="flex-1 rounded-2xl bg-blue-200 p-5">
                                <h4 className="text-lg font-semibold my-2">Sam Doe</h4>
                                <h5 className="text-sm"><b>Doctor:</b> DR.Smith</h5>
                                <h5 className="text-sm"><b>Date and Time:</b> 24-6-2024, 12.00am</h5>
                                <div className="flex gap-3 mt-3">
                                    <Button>Reschedule</Button>
                                    <Button variant="secondary">Cancel</Button>
                                </div>
                            </div>
                            
                            <div className="flex-1 rounded-2xl bg-blue-200 p-5">
                                <h4 className="text-lg font-semibold my-2">Sam Doe</h4>
                                <h5 className="text-sm"><b>Doctor:</b> DR.Smith</h5>
                                <h5 className="text-sm"><b>Date and Time:</b> 24-6-2024, 12.00am</h5>
                                <div className="flex gap-3 mt-3">
                                    <Button>Reschedule</Button>
                                    <Button variant="secondary">Cancel</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        

        </div>

        </>
    )
}