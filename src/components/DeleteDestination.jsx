"use client"
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";


const DeleteDestination = ({ id }) => {
    const router =useRouter();

    const handleDeleteDestination = async (id) => {
        const res =await fetch(`http://localhost:5000/destinations/${id}`, {
            method: 'DELETE'
        })
        const data = await res.json();
        if(data.deletedCount >0){
          router.push('/destinations');
        }
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="ghost"
                    className={'border border-red-500 text-red-500 rounded-sm'}>
                   <FaTrash/> Delete
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-sm">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Confirm Delete</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>My Awesome Project</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={() => { handleDeleteDestination(id) }}
                                    slot="close" variant="danger">
                                    Confirm Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteDestination;