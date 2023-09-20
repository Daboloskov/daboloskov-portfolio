import { useForceUpdate } from 'framer-motion'
import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function SubmitBtn() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className="h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none text-white transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65" disabled={pending}>{
        pending ? <div className="h-5 w-5 ml-14 animate-spin rounded-full border-b-2 border-white"></div> : (
            <>
            Submit
            </>
        )
    }</button>
  )
}
