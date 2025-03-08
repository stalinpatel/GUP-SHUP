import React from 'react';

const Message = () => {
    return (
        <div>
            <div className="chat chat-start ">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-bubble flex flex-col gap-x-1 pb-0">
                    <div className="content">
                        Hey hii Stalin
                    </div>
                    <div className='flex py-1 justify-end items-end '>
                        <div className="text-xs opacity-50">12:45</div>
                    </div>
                </div>
            </div>
            <div className="chat chat-end ">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className="chat-bubble flex flex-col gap-x-1 pb-0">
                    <div className="content">
                        How are you
                    </div>
                    <div className='flex py-1 justify-end items-end '>
                        <div className="text-xs opacity-50">12:45</div>
                    </div>
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>


        </div>
    );
};

export default Message;