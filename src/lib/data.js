export const getAllDestinations = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`);

    return res.json();
}

export const getSingleDestination = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    });
    
    return res.json();
}