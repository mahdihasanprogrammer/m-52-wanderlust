export const getAllDestinations = async () => {
    const res = await fetch('http://localhost:5000/destinations');

    return res.json();
}

export const getSingleDestination = async (id) => {
    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    return res.json();
}