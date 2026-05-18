import { Button } from "@heroui/react";
import Link from "next/link";
import DestinationCard from "../allDestinationPage/DestinationCard";

const Featured =async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const featuredDestination =await res.json();
    

    return (
        <section className="my-15">
            {/* content */}
            <div className="flex flex-col md:flex-row items-center justify-between  mb-6">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold">
                        Featured Destinations
                    </h1>
                    <p className="text-[#6C696D] text-lg">
                        Handpicked travel experiences for the adventure seekers
                    </p>
                </div>
                <Link href={'/destinations'}>
                    <Button variant="outline"
                        className={'border-cyan-600 rounded-sm text-cyan-600 border-2 bg-white'}>
                        All Destinations
                    </Button>
                </Link>
            </div>

            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                featuredDestination?.map(destCard => <DestinationCard
                key={destCard._id} destCard={destCard}/>)
            }
            </div>
        </section>
    );
};

export default Featured;