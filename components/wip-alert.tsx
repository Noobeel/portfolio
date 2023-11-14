"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"
  

export default function WipAlert() {
    const [alertIsOpen, setAlertIsOpen] = useState(false)

    useEffect(() => {
        setAlertIsOpen(true)
    }, [])

    return (
        <AlertDialog {...(alertIsOpen ? { open: true } : {})}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Work in Progress!
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    This website is still a work in progress. Currently working on the following: <br />
                    * Responsive design for different screen sizes <br />
                    * Light theme color scheme
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setAlertIsOpen(false)}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}