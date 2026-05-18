import { MyBookingDeleteAlert } from "@/components/myBookingsPage/MyBookingDeleteAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaSuitcaseRolling } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";



const MyBookingPage = async () => {
    // get user data from db;
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;



    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${user?.id}`);
    const bookings = await res.json();




    return (
        <div className="my-15 space-y-8">
            <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-semibold">My Bookings</h1>
                <p className="text-[#6C696D] text-lg ">
                    Manage and view your upcoming travel plans</p>
            </div>

            {/* no  booking yet */}
            {
                bookings.length === 0 && (
                    <div className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">

                        {/* Icon */}
                        <div className="mb-5 rounded-full bg-cyan-100 p-5">
                            <FaSuitcaseRolling className="text-5xl text-cyan-600" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl font-bold text-gray-800">
                            No Bookings Yet
                        </h2>

                        {/* Description */}
                        <p className="mt-3 max-w-md text-gray-500">
                            Looks like you haven’t booked any destination yet.
                            Start exploring amazing places and make your first booking.
                        </p>

                        {/* Button */}
                        <Link
                            href="/destinations"
                            className="mt-6 rounded-xl bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-700"
                        >
                            Explore Destinations
                        </Link>
                    </div>
                )
}

            <div className="flex flex-col gap-4">
                {
                    bookings.map(booking =>
                        <div key={booking._id}
                            className="flex flex-col sm:flex-row font-medium p-4 shadow border  rounded-sm items-center gap-5">

                            {/* right side image */}
                            <div>
                                <Image className="rounded-sm w-full sm:aspect-video"
                                    src={booking?.destinationImage}
                                    alt={booking?.destinationName}
                                    width={250}
                                    height={250} />
                            </div>

                            {/* left side content */}
                            <div className="w-full">
                                <div className="space-y-3">
                                    <h2 className="text-2xl font-semibold flex gap-2 items-center"> <HiOutlineLocationMarker />
                                        {booking?.destinationName}</h2>

                                    <div className="text-[#6C696D] space-y-1">
                                        <p className="flex gap-2 items-center">
                                            <FaRegCalendarAlt />Departure: {booking?.departureDate}
                                        </p>

                                        <span>Booking ID: {booking?._id}</span>
                                    </div>

                                    <div>
                                        <p className="text-cyan-600 text-2xl font-bold flex items-center gap-2 justify-between">${booking?.price}
                                            <MyBookingDeleteAlert bookingId={booking?._id} />
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyBookingPage;