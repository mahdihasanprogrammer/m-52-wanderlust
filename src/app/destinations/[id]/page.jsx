import { Button, Description, Separator } from "@heroui/react";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";


const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    const data = await res.json();

    const { destinationName, country, description, price, duration, imageUrl,  departureDate} = data;

    console.log(data)
    return (
        <div className="my-15">
            <h1 className="text-5xl mb-5">details page</h1>
            <div className="space-y-6">

                <Image className="w-full h-[80vh] object-center"
                    src={imageUrl}
                    alt={destinationName}
                    width={500}
                    height={500} />

                {/* content container */}
                <div className="flex justify-between">
                    {/* left side content */}
                    <div className="space-y-2">
                        <div className="flex gap-1 items-center">
                            <HiOutlineLocationMarker />
                            <p>{country}</p>
                        </div>
                        <div className="flex gap-2 items-center text-lg">
                            <h2 className="text-2xl">{destinationName}</h2>

                        </div>

                        <div className="flex gap-3 items-center">
                            <FaCalendar />
                            <p>{duration}days</p>
                        </div>

                        <div className="mt-5">
                            <h1 className="text-2xl font-semibold">Overview</h1>
                            <p>{description}</p>
                        </div>
                    </div>

                    {/* right side content */}
                    <div className="shadow p-4 w-2xs space-y-4">
                        <p className="mb-10">Starting from <br />
                        <span className="text-3xl font-bold text-cyan-600">${price}</span>
                         <br /> per person</p>

                         <h3 className="w-full px-4 py-2 bg-slate-100">{ departureDate}</h3>

                         <Separator/>

                         <Button className={'w-full rounded-none bg-cyan-600'}>Book Now <GoArrowUpRight className="size-5" /></Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DestinationDetailsPage;