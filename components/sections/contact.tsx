"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "Name is required and must be at least 2 characters.",
        }),
    email: z
        .string()
        .email({
            message: "Please enter a valid email.",
        }),
    message: z
        .string()
        .min(10, {
            message: "Message must be at least 10 characters.",
        })
        .max(500, {
            message: "Message must be less than 500 characters.",
        }),
})

export default function Contact() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        const { name, email, message } = values

        const data = {
            service_id: 'service_pl5bvnw',
            template_id: 'template_msst0eu',
            user_id: 'W14PNvo7HMuEArA9J',
            template_params: {
                from_name: name,
                from_email: email,
                message: message,
            },
        }
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.status === 200) {
                    form.reset()

                    toast({
                        description: "Your message has been sent successfully.",
                        duration: 5000,
                    })

                } else {
                    toast({
                        variant: "destructive",
                        description: "Oops! Something went wrong while sending your message. Please try again later.",
                        duration: 5000,
                    })
                }
            })
    }

    return (
        <section id="contact">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center justify-center w-full text-center mb-5">
                    <h2 className="font-poppins font-[700] text-xl leading-tight md:text-2xl lg:text-4xl mb-1">Contact Me</h2>
                    <p className="font-[500] text-base leading-tight md:text-lg lg:text-xl">
                        Let&apos;s connect and explore the endless possibilities.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center w-1/3 mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col bg-white/10 rounded-xl p-5 space-y-2 shadow-lg shadow-white/10 w-full">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john.doe@email.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Your website is amazing..." {...field}
                                                maxLength={500}
                                                onChange={(e) => {
                                                    field.onChange(e)
                                                    
                                                    const charCount = e.target.value.length
                                                    const charCountEl = document.getElementById("message-char-count")
                                                    const charCountContainerEl = document.getElementById("message-char-count-container")

                                                    // Auto-resize textarea
                                                    e.target.style.height = "inherit"
                                                    e.target.style.height = `${e.target.scrollHeight}px`
                                                    
                                                    if (charCountEl) {
                                                        // Update char count
                                                        charCountEl.textContent = charCount.toString()

                                                        // Change color of char count if limit is reached
                                                        if (charCount === 500) {
                                                            charCountContainerEl?.classList.remove("text-muted-foreground")
                                                            charCountContainerEl?.classList.add("char-limit-reached")
                                                        } else {
                                                            charCountContainerEl?.classList.remove("char-limit-reached")
                                                            charCountContainerEl?.classList.add("text-muted-foreground")
                                                        }
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormDescription id="message-char-count-container" className="mt-1 mb-2">
                                            <span id="message-char-count">0</span>/500 characters
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="w-1/4 mx-auto" type="submit">
                                Send
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}