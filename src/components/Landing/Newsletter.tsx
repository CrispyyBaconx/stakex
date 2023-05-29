import React, { useState } from 'react'

const Newsletter = () => {
    const [success, setSuccess] = useState(false);

    const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        const email: string = e.currentTarget['member_email'].value as string;
        console.log(email);

        const formID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID || '';
        const apiKey = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY || '';

        console.log(`https://api.convertkit.com/v3/forms/${formID}/subscribe`);
        
        try {
            fetch(`https://api.convertkit.com/v3/forms/${formID}/subscribe`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    api_key: apiKey,
                    email: email
                })
            }).then(() => {
                console.log('Success');
                setSuccess(true);
            }).catch((err) => {
                console.log(err);
            });
        } catch (error) {
            setSuccess(false);
        }
    }

    return (
        <div className='flex flex-col items-center gap-8'>
            <h2 className='text-3xl'>Want to stay up to date?</h2>
            <form className='flex gap-5 align-middle' onSubmit={subscribe}>
                <div className='relative w-full mr-3 formkit-field'>
                    <label className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300' htmlFor="member_email">Email Address</label>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none focus:border-blue-500'>
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input type='email' id='member_email' pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" required placeholder='Enter Email' className='bg-black px-4 py-2 rounded-xl pl-10' />
                </div>
                <button className='bg-gradient-to-r 
                                   from-purple-500 
                                   via-purple-600 
                                   to-purple-700 
                                   hover:bg-gradient-to-br 
                                   focus:ring-4 
                                   focus:outline-none 
                                   focus:ring-purple-300 
                                   dark:focus:ring-purple-800 
                                   shadow-lg 
                                   shadow-purple-500/50 
                                   dark:shadow-lg 
                                   dark:shadow-purple-800/80 
                                   font-medium 
                                   rounded-lg 
                                   text-sm 
                                   px-5 
                                   py-2.5 
                                   text-center'
                        type='submit'>Subscribe
                </button>
            </form>
            <p className='mt-2 text-center text-sm md:text-xs'>
                {success ? '✅ Thanks for subscribing! Check your email to confirm.' : 'No spam, ever. Unsubscribe at any time.'}
            </p>
        </div>
    )
}

export default Newsletter;