
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";


const DestinationCard = ({ destCard }) => {
    const { _id, destinationName, country, category, price, duration, imageUrl } = destCard;
    return (
        <div className="flex flex-col font-medium space-y-1 p-4 shadow border  rounded-sm">

            <div className="aspect-video relative mb-4">
                <Image className="rounded-sm"
                    src={imageUrl}
                    alt={destinationName}
                    fill />
            </div>
            <div className="flex gap-1 items-center text-gray-600">
                <HiOutlineLocationMarker />
                <p>{country}</p>
            </div>
            <div className="flex gap-2 items-center justify-between text-2xl">
                <h2>{destinationName}</h2>
                <p className="flex items-center">${price}
                    <span className="text-lg text-gray-500">/person</span>
                </p>
            </div>

            <div className="flex gap-3 items-center text-[#6C696D] ">
                <LuCalendarDays />
                <p>Days {duration} Night</p>
            </div>

            <Link className=" underline-[#15a1bf]" href={`/destinations/${_id}`}>
                <span className="flex items-center gap-1 mt-2 underline underline-offset-2 text-[#15a1bf] ">
                    Book Now <GoArrowUpRight />
                </span>

            </Link>

        </div>
    );
};

export default DestinationCard;