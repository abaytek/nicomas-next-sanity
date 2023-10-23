'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Donate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Submit the form data to your donation API
    };
    return (
            <div className="gap-6 bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-800 min-h-screen w-full h-full flex flex-col md:flex-row justify-around items-center text-slate-300 px-8">
                    <div className="py-4 w-full md:w-2/3 ">
                        <h2 className='py-4 text-2xl'>Donate Now</h2>

                        <form className='flex text-slate-700 flex-col  gap-4' onSubmit={(e) => handleSubmit}>
                            <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} className='border-none outline-none px-6 py-2' />
                            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className='border-none outline-none px-6 py-2' />
                            <input type="number" placeholder="Amount" value={amount} onChange={(event) => setAmount(event.target.value)} className='border-none outline-none px-6 py-2' />
                            <Link href='/' className='px-8 py-2 bg-slate-700 hover:scale-105 hover:bg-slate-800 text-center text-fuchsia-50'>Donate</Link>
                        </form>
                    </div>

                    <div className="w-full flex flex-col items-end justify-end  h-full text-slate-50">
                        <div className=''>
                            <h2 className='text-xl font-bold text-center'>Why Donate?</h2>
                            <video className='rounded-lg py-2' controls height={300} >
                                <source src={'/charity.mp4'} type="video/mp4" />
                            </video>
                        </div>
                        <p className='text-base text-right  px-4 font-light leading-10 text-white '><span className='text-4xl'>&lsquo;</span>Your donation will help us to provide food, shelter, and education to children in need. Your donation will help us to provide food, shelter, and education to children in need. Your donation will help us to provide food, shelter, and education to children in need.  and education to children in need <span className='text-4xl'>&rsquo;</span></p>

                    </div>
        </div>

    )
}

export default Donate