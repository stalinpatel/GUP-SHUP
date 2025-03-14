import React from 'react';
import Message from "./Message";
import ChatDateSeparator from './ChatDateSeparator';
import { useSelector } from 'react-redux';

const ChatsContainer = () => {
    let lastDate = null;
    const { messages } = useSelector(state => state.message);
    // console.log('messageds:', messages);

    return (
        <ul>
            {messages?.map((messageDetails) => {
                let messageDate = new Date(messageDetails.createdAt).toDateString();
                const showDateSeparator = lastDate !== messageDate;
                lastDate = messageDate;

                return (
                    <div key={messageDetails._id}>  {/* ✅ FIXED: Used <div> instead of <React.Fragment> */}
                        {showDateSeparator && (
                            <li key={`separator-${messageDate}`}>
                                <ChatDateSeparator createdAt={messageDetails.createdAt} />
                            </li>
                        )}
                        <li key={messageDetails._id}>
                            <Message messageDetails={messageDetails} />
                        </li>
                    </div>
                );
            })}
        </ul>
    );
};

export default ChatsContainer;
