import { monsterrat } from "@/app/UI/fonts";
import AppointmentsTable from "@/app/UI/dashboard/appointments/table";


export default function Page(){
    return (
        <>
            <main className={`${monsterrat.className}`}>
                <h2 className="text-4xl font-semibold">Appointments</h2>
                <AppointmentsTable />
            </main>
        </>
    )
}