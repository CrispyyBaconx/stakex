import React, { useEffect, useState } from 'react';

const Initializing = () => {
    const [stage, setStage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (stage === 19) {
                setStage(1);
            } else {
                setStage(stage + 1);
            }
        }, 250);
        return () => clearInterval(interval);
    }, [stage]);

    return (
        <>
            {stage === 1 && <h2 className='text-m uppercase font-bold'><span className='text-purple-600'>I</span>nitializing...</h2>}
            {stage === 2 && <h2 className='text-m uppercase font-bold'>I<span className='text-purple-600'>n</span>itializing...</h2>}
            {stage === 3 && <h2 className='text-m uppercase font-bold'>In<span className='text-purple-600'>i</span>tializing...</h2>}
            {stage === 4 && <h2 className='text-m uppercase font-bold'>Ini<span className='text-purple-600'>t</span>ializing...</h2>}
            {stage === 5 && <h2 className='text-m uppercase font-bold'>Init<span className='text-purple-600'>i</span>alizing...</h2>}
            {stage === 6 && <h2 className='text-m uppercase font-bold'>Initi<span className='text-purple-600'>a</span>lizing...</h2>}
            {stage === 7 && <h2 className='text-m uppercase font-bold'>Initia<span className='text-purple-600'>l</span>izing...</h2>}
            {stage === 8 && <h2 className='text-m uppercase font-bold'>Initial<span className='text-purple-600'>i</span>zing...</h2>}
            {stage === 9 && <h2 className='text-m uppercase font-bold'>Initiali<span className='text-purple-600'>z</span>ing...</h2>}
            {stage === 10 && <h2 className='text-m uppercase font-bold'>Initializ<span className='text-purple-600'>i</span>ng...</h2>}
            {stage === 11 && <h2 className='text-m uppercase font-bold'>Initializi<span className='text-purple-600'>n</span>g...</h2>}
            {stage === 12 && <h2 className='text-m uppercase font-bold'>Initializin<span className='text-purple-600'>g</span>...</h2>}
            {stage === 13 && <h2 className='text-m uppercase font-bold'>Initializing<span className='text-purple-600'>.</span>..</h2>}
            {stage === 14 && <h2 className='text-m uppercase font-bold'>Initializing.<span className='text-purple-600'>.</span>.</h2>}
            {stage === 15 && <h2 className='text-m uppercase font-bold'>Initializing..<span className='text-purple-600'>.</span></h2>}
            {stage === 16 && <h2 className='text-m uppercase font-bold text-purple-600'>Initializing...</h2>}
            {stage === 17 && <h2 className='text-m uppercase font-bold'>Initializing...</h2>}
            {stage === 18 && <h2 className='text-m uppercase font-bold text-purple-600'>Initializing...</h2>}
            {stage === 19 && <h2 className='text-m uppercase font-bold'>Initializing...</h2>}
        </>
    )
}

export default Initializing;