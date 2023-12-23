"use client"
"use client"
import Image from 'next/image'
import contactForm from './(component)/contactform'
import ContactForm from './(component)/contactform'
export default function Home() {
  return (
     <>
    <div className="text-center">
      <h1 className="mx-auto " >Form Handling</h1>
    </div>
    <ContactForm/>
    </>
  )

}
