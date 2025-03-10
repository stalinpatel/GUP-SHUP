import React from 'react';

const IntroPage = () => {
    return (
        <>
            <div className='flex flex-col grow items-center justify-center bg-base-200'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold opacity-50 mb-4'>GUP-SHUP karte rahiye!</h1>
                    <p className='text-lg opacity-70'>Select a chat to start messaging</p>
                    <div className='mt-8'>
                        <svg
                            className='w-32 h-32 mx-auto text-gray-400'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroPage;