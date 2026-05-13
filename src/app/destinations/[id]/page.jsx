import BookingCard from "@/components/BookingCard";
import DeleteDestination from "@/components/DeleteDestination";
import { EditDetailsPageWithModal } from "@/components/editDestinationPage/EditDetailsPageWithModal";
import { getSingleDestination } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";


const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const data = await getSingleDestination(id);
    console.log(data, 'test id')

    const { destinationName, country, description, duration, imageUrl } = data;


    return (
        <div className="my-15 space-y-5">
            <div className="flex justify-between items-center">
                <Link className="flex items-center gap-2  underline underline-offset-4" href={'/destinations'}><FaArrowLeftLong />
                    back to destinations</Link>
                <div className="flex gap-4 items-center">
                    <EditDetailsPageWithModal id={id} data={data} />
                    <DeleteDestination id={id} />
                </div>
            </div>
            <div className="space-y-6">

                <Image className="w-full h-[80vh] object-center"
                    src={imageUrl}
                    alt={destinationName}
                    width={500}
                    height={500} />

                {/* content container */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* left side content */}
                    <div className="space-y-2 max-w-4xl">
                        <div className="flex gap-1 items-center">
                            <HiOutlineLocationMarker />
                            <p>{country}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">{destinationName}</h2>
                        </div>

                        <div className="flex gap-3 items-center">
                            <FaCalendar />
                            <p>Days {duration} Night</p>
                        </div>

                        <div className="mt-5">
                            <h1 className="text-2xl font-semibold">Overview</h1>
                            <p className="text-slate-700">{description}</p>
                        </div>
                    </div>

                    {/* right side content */}
                  <BookingCard data={data}/>
                </div>

            </div>
        </div>
    );
};

export default DestinationDetailsPage;