/* eslint-disable @next/next/no-head-element */
import * as React from "react";

interface ContactEmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const ContactEmailTemplate: React.FC<
    Readonly<ContactEmailTemplateProps>
> = ({ name, email, message }) => (
    <html>
        <head>
            <meta name="viewport" content="width=device-width" />
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        </head>
        <body>
            <table
                bgcolor="#fafafa"
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fafafa",
                    padding: "20px",
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                    fontSize: "100%",
                    lineHeight: "1.6",
                }}
            >
                <tr>
                    <td
                        style={{
                            border: "1px solid #eeeeee",
                            backgroundColor: "#ffffff",
                            borderRadius: "10px",
                            display: "block!important",
                            maxWidth: "600px!important",
                            margin: "0 auto!important",
                            clear: "both",
                        }}
                    >
                        <div
                            style={{
                                padding: "15px",
                                maxWidth: "600px",
                                margin: "0 auto",
                                display: "block",
                            }}
                        >
                            <table style={{ width: "100%" }}>
                                <tr>
                                    <td>
                                        <h1
                                            style={{
                                                fontWeight: 200,
                                                fontSize: "16px",
                                                color: "#333333",
                                            }}
                                        >
                                            <b>Name:</b> {name}
                                            <br />
                                            <b>Email:</b> {email}
                                        </h1>
                                        <p
                                            style={{
                                                fontWeight: "normal",
                                                fontSize: "14px",
                                                color: "#333333",
                                            }}
                                        >
                                            <b>Message:</b>
                                            <br />
                                            {message}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </table>
        </body>
    </html>
);
