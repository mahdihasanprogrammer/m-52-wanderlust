"use client"
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label, Separator } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoArrowUpRight } from "react-icons/go";


const BookingCard = ({ data }) => {
    const { _id, destinationName, country, price, duration, imageUrl } = data;
    const [date, setDate] = useState('');


    // get user data from db;
    const {
        data: session,
    } = authClient.useSession();
    const user = session?.user;


    const handleBooking =async () => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            country,
            price,
            destinationImage: imageUrl,
            duration,
            departureDate: new Date(date).toDateString()
        };

        const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method:'POST', 
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(bookingData),
        });

        const bookingRes =await res.json();
        if(bookingRes.insertedId) {
            toast.success('Booked Successfully!');
        }
    }

    return (
        <div className="shadow-lg border p-4 space-y-4 min-w-72">
            <p className="mb-10">Starting from <br />
                <span className="text-3xl font-bold text-cyan-600">${price}</span>
                <br /> per person</p>

            <DateField 
                className="w-full rounded-xl" name="date" value={date}
                onChange={setDate}>
                <Label className="text-base font-semibold mb-2">Departure Date</Label>
                <DateField.Group>
                    <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                    </DateField.Input>
                </DateField.Group>
            </DateField>

            <Separator />

            <Button onClick={handleBooking}
                className={'w-full rounded-xl bg-cyan-600'}>Book Now <GoArrowUpRight className="size-5" /></Button>
        </div>
    );
};

export default BookingCard;