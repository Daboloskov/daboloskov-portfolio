"use server"; // This is a server component

import React from 'react';
import { Resend } from 'resend'
import { validadeString } from '@/lib/utils';
import { getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/email/contactFormEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    // Server-side validation
    if (!validadeString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    if (!validadeString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    let data
    try {
        data = await resend.emails.send({
            from: 'Message from Hello! Daboloskov <onboarding@resend.dev>',
            // to: '520b291327038a3967c19f@daboloskov.com',
            to: 'hello@daboloskov.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }  
    
    return {
        data
    }
}
