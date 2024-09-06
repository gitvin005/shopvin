import { Button } from "../../button";

export default function AppointmentsTable(){
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
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">John Doe</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">+963 852 7410</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">testing@testing.com</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">Ortho</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">Dr Smith</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                        <div className="flex justify-justify-center items-center gap-4">
                            <Button>Complete</Button>
                            <Button variant="secondary">Cancel</Button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}