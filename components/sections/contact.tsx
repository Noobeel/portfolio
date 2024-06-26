"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name is required and must be at least 2 characters.",
    }),
    email: z.string().email({
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
});

export default function Contact() {
    const { toast } = useToast();
    const [formLoading, setFormLoading] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setFormLoading(true);

        const { name, email, message } = values;

        fetch("/api/send/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((res) => {
                if (res.status === 200) {
                    form.reset();
                    const charCountEl =
                        document.getElementById("message-char-count");
                    const charCountContainerEl = document.getElementById(
                        "message-char-count-container"
                    );
                    if (charCountEl && charCountContainerEl) {
                        if (
                            charCountContainerEl.classList.contains(
                                "char-limit-reached"
                            )
                        ) {
                            charCountContainerEl.classList.remove(
                                "char-limit-reached"
                            );
                        }

                        charCountContainerEl.classList.add("text-muted");
                        charCountEl.textContent = "0";
                    }

                    toast({
                        description: "Your message has been sent successfully.",
                        duration: 5000,
                    });
                } else {
                    toast({
                        variant: "destructive",
                        description:
                            "Oops! Something went wrong while sending your message. Please try again later.",
                        duration: 5000,
                    });
                }
            })
            .finally(() => {
                setFormLoading(false);
            });
    }

    return (
        <section id="contact" className="py-10 mb-10 lg:py-0 lg:mb-0">
            <div className="flex flex-col items-center justify-center w-4/5 h-full sm:w-3/5 md:w-2/5 lg:w-1/3">
                <div className="flex flex-col items-center justify-center text-center mb-5">
                    <h2 className="font-poppins font-bold text-2xl text-primary md:text-3xl mb-1">
                        Contact Me
                    </h2>
                    <p className="font-medium text-secondary leading-tight md:text-lg lg:text-xl">
                        Let&apos;s connect and explore the endless
                        possibilities.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col rounded-xl py-3 px-4 space-y-1.5 shadow-lg dark:shadow-white/10 w-full lg:px-5 bg-card"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John Doe"
                                                autoComplete="name"
                                                {...field}
                                            />
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
                                            <Input
                                                placeholder="john.doe@email.com"
                                                autoComplete="email"
                                                {...field}
                                            />
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
                                                placeholder="Your website is amazing..."
                                                {...field}
                                                maxLength={500}
                                                onChange={(e) => {
                                                    field.onChange(e);

                                                    const charCount =
                                                        e.target.value.length;
                                                    const charCountEl =
                                                        document.getElementById(
                                                            "message-char-count"
                                                        );
                                                    const charCountContainerEl =
                                                        document.getElementById(
                                                            "message-char-count-container"
                                                        );

                                                    e.target.style.height =
                                                        "inherit";
                                                    e.target.style.height = `${e.target.scrollHeight}px`;

                                                    if (charCountEl) {
                                                        charCountEl.textContent =
                                                            charCount.toString();

                                                        if (charCount === 500) {
                                                            charCountContainerEl?.classList.remove(
                                                                "text-muted"
                                                            );
                                                            charCountContainerEl?.classList.add(
                                                                "char-limit-reached"
                                                            );
                                                        } else {
                                                            charCountContainerEl?.classList.remove(
                                                                "char-limit-reached"
                                                            );
                                                            charCountContainerEl?.classList.add(
                                                                "text-muted"
                                                            );
                                                        }
                                                    }
                                                }}
                                            />
                                        </FormControl>
                                        <FormDescription
                                            id="message-char-count-container"
                                            className="mt-1 mb-2 text-muted"
                                        >
                                            <span id="message-char-count">
                                                0
                                            </span>
                                            /500 characters
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {formLoading ? (
                                <Button
                                    className="w-max mx-auto px-10 font-semibold text-base"
                                    disabled
                                >
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                </Button>
                            ) : (
                                <Button
                                    className="w-max mx-auto px-10 font-semibold text-base"
                                    type="submit"
                                >
                                    Send
                                </Button>
                            )}
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
