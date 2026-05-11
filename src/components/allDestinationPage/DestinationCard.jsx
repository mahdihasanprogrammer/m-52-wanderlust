
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";


const DestinationCard = ({ destCard }) => {
    const {_id, destinationName, country, category, price, duration, imageUrl } = destCard;
    return (
        <div className="flex flex-col font-medium space-y-1 p-4">

            <div>
                <Image className="grow"
                    src={imageUrl}
                    alt={destinationName}
                    width={500}
                    height={500} />
            </div>
            <div className="flex gap-1 items-center">
                <HiOutlineLocationMarker />
                <p>{country}</p>
            </div>
            <div className="flex gap-2 items-center text-lg">
                <h2>{destinationName}</h2>
                <p>${price}/person</p>
            </div>

            <div className="flex gap-3 items-center">
                <FaCalendar />
                <p>{duration}days</p>
            </div>
           
            <Link className=" underline-[#15a1bf]" href={`/destinations/${_id}`}>
               <span className="flex items-center gap-1 text-[#15a1bf] "> 
                Book Now <GoArrowUpRight />
                </span>
                
            </Link>

        </div>
    );
};

export default DestinationCard;