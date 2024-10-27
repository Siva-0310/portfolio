import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as SendGrid from "@sendgrid/mail";

// Set up SendGrid with your API key
SendGrid.setApiKey(process.env.SENDGRID_API_KEY as string);

// Define sender and recipient email addresses
const from = process.env.FROM_EMAIL as string;
const to = process.env.TO_EMAIL as string;
const id = process.env.TEMPLATE_ID as string

// Schema for validating incoming message data
const messageSchema = z.object({
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(4, "Subject must be at least 4 characters long")
    .max(100, "Subject cannot exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must contain at least 1 sentence with 10 characters")
    .max(1000, "Message cannot exceed 1000 characters")
    .refine((msg) => /[.!?](\s|$)/.test(msg), {
      message: "Message must contain at least one complete sentence.",
    }),
});

// API route handler for POST requests
export async function POST(req: NextRequest) {
  try {

    if (req.headers.get("Content-Type") != "application/json"){
        return NextResponse.json({ error: 'Content-Type must be application/json' },{status:400})
    }
    // if (!req.body || Object.keys(req.body).length === 0){
    //     return NextResponse.json({ error: 'Request body is missing or empty'},{status:400})

    // }
    // Parse JSON data from the request
    const data = await req.json();

    // Validate incoming data against the schema
    const validateData = messageSchema.parse(data);

    // Prepare the email message object
    const msg = {
      to: to,
      from: from,
      templateId:id,
      dynamicTemplateData:validateData
    };

    // Send the email using SendGrid
    await SendGrid.send(msg);
    
    // Return a success response
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    // Handle validation errors from Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors.map((err) => err.message) }, { status: 400 });
    }

    // Handle other errors (e.g., SendGrid errors)
    console.error(error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}