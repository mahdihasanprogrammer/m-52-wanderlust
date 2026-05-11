import DestinationCard from "./DestinationCard";


const AllDestinations = ({destinations}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                destinations.map(destCard => <DestinationCard key={destCard._id} destCard={destCard} />)
            }
        </div>
    );
};

export default AllDestinations;