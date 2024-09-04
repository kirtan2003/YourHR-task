import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-r from-blue-600 to-teal-500 md:py-12 bottom-0 w-full px-32">
                <div className="container ml-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-base w-full">
                    <div className="grid gap-1 ">
                        <h3 className="font-semibold">Company</h3>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            About Us
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Careers
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Contact
                        </Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Job Seekers</h3>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Find Jobs
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Sign Up
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Login
                        </Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Employers</h3>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Post a Job
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Pricing
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Resources
                        </Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Legal</h3>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Privacy Policy
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            Terms of Service
                        </Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Follow Us</h3>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            <i className="bi bi-twitter-x mr-1"></i>
                            Twitter
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            <i className="bi bi-linkedin mr-1"></i>
                            LinkedIn
                        </Link>
                        <Link href="#" className='hover:underline underline-offset-4'>
                            <i className="bi bi-instagram mr-1"></i>
                            Instagram
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer