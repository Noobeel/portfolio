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
            <AlertDialogContent className="w-[95%]">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Work in Progress!
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    This website is still a work in progress. Currently working on the following: <br />
                    * Responsive layout from About and Projects section <br />
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