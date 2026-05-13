import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";



const MyBookingPage = async () => {
    // get user data from db;
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    const { _id, destinationName, country, category, price, duration, imageUrl } = user;


    const res = await fetch(`http://localhost:5000/my-bookings/${user?.id}`);
    const bookings = await res.json();
    

    return (
        <div className="my-15">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-semibold">My Bookings</h1>
                <p className="text-[#6C696D] text-lg ">
                    Manage and view your upcoming travel plans</p>
            </div>

            <div className="flex flex-col">
            {
             bookings.map(booking => 
                 <div key={booking._id}
                  className="flex font-medium space-y-1 p-4 shadow border  rounded-sm">

            <div className=" mb-4">
                <Image className="rounded-sm"
                    src={booking?.destinationImage}
                    alt={booking?.destinationName}
                    width={300}
                    height={300}/>
            </div>
            <div className="flex gap-1 items-center text-gray-600">
                <HiOutlineLocationMarker />
                <p>{booking?.country}</p>
            </div>
            <div className="flex gap-2 items-center justify-between text-2xl">
                <h2>{booking?.destinationName}</h2>
                <p className="flex items-center">${booking?.price}
                    <span className="text-lg text-gray-500">/person</span>
                </p>
            </div>

            <div className="flex gap-3 items-center text-[#6C696D] ">
                <LuCalendarDays />
                <p>Days {booking?.duration} Night</p>
            </div>

        </div>
             )
            }
            </div>
        </div>
    );
};

export default MyBookingPage;