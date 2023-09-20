"use client"; // This is a client component

import React from 'react'
import SectionHeading from './sectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submitBtn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact")
    
  return (
    <motion.section
        ref={ref}
        id="contact"
        className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}
    >
        <SectionHeading>Contact</SectionHeading>
        <p className="text-gray-700">If you have any questions, comments, or simply want to say hello, please feel free to reach me out.</p>
        <form
            className="mt-10 flex flex-col"
            action={async formData => {
                const {data, error} = await sendEmail(formData)
                
                if (error) {
                    toast.error(error)
                    return
                }
                toast.success('Email has been sent')
            }}
        >
            <input
                className="h-14 px-4 rounded-lg borderBlack"
                type="email"
                name="senderEmail"
                placeholder="Your email"
                required
                maxLength={500}
            />
            <textarea
                className="h-52 px-4 pt-4 my-3 min-h-[8rem] sm:min-h-[12rem] rounded-lg borderBlack"
                name="message"
                placeholder="Your Message"
                required
                maxLength={5000}
            />
            <SubmitBtn />
      </form>
    </motion.section>
  )
}
