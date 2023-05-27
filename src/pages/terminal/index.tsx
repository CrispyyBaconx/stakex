import React from 'react';

import Head from 'next/head';

const Terminal = () => { 
    const help: Array<string> = [
        'whoami      Displays information about the current user.',
        'socials     View social networks.',
        'puzzle      Start the puzzle.',
        'help        Displays this help page.'
    ]

    const submitCommand = () => {
        // grab the command
        // process it
        // remove the text from the textarea
    }

    return (
        <>
            <Head>
                <title>Stakex Terminal</title>
        		<meta name="description" content="Stakex" />
        		<meta name="viewport" content="width=device-width, initial-scale=1" />
        		<link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <textarea typeof='text' onSubmit={() => {submitCommand()}} cols={30} rows={10} className='resize-none'></textarea>
            </main>
        </>
    )
}

export default Terminal;

//https://medium.com/coinmonks/terminal-co-next-js-a44cae8350f8
// satnacks terminal