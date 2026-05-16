"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";


export function MyBookingDeleteAlert({bookingId}) {
 const router = useRouter();

const handleMyBookingDelete =async ()=>{
       console.log(bookingId, 'booking id')
    const res = await fetch(`http://localhost:5000/my-bookings/${bookingId}`,{
        method:"DELETE",
       
    });
    const result =await res.json();
    console.log('result ', result)
    if(result.deletedCount >= 0){
        toast.error('delete successful');
       router.push('/my-bookings')
      // window.location.reload()
    }
}

  return (
    <AlertDialog>
      <Button className={'rounded-sm border border-red-500 text-red-500 text-base'} variant="outline" >
        <RiDeleteBin6Line />Cancel</Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-sm">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Your Booking</strong> 
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button  onClick={handleMyBookingDelete}
              slot="close" variant="danger">
                Confirm Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}