import AllDestinations from "@/components/allDestinationPage/AllDestinations";
import { getAllDestinations } from "@/lib/data";


const DestinationPage = async() => {

    const destinations = await getAllDestinations();
    return (
        <div className="my-15">
            <h1 className="text-4xl md:text-6xl font-medium mb-5">Explore All Destinations</h1>

            <AllDestinations destinations={destinations}/>
        </div>
    );
};

export default DestinationPage;