import DestinationCard from "./DestinationCard";


const AllDestinations = ({destinations}) => {
    
    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                destinations.map(destCard => <DestinationCard key={destCard._id} destCard={destCard} />)
            }
        </div>
    );
};

export default AllDestinations;