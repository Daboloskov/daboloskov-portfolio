"use client"; // This is a client component

import React from 'react'
import { motion } from 'framer-motion'

export default function sectionDivider() {
  return (
    <motion.div className="bg-gray-200 my-24 h-40 w-1 rounded-full hidden sm:block"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{ delay: 0.125 }}
    ></motion.div>
  )
}
