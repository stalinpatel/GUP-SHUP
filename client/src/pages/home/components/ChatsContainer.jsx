import React from 'react';
import Message from "./Message"
import ChatDateSeparator from './ChatDateSeparator';
import { useSelector } from 'react-redux';

const ChatsContainer = () => {
    let lastDate = null;
    const { messages } = useSelector(state => state.message)
    return (
        <>
            {
                messages?.map((messageDetails) => {
                    let messageDate = new Date(messageDetails.createdAt).toDateString();
                    const showDateSeparator = lastDate !== messageDate;
                    lastDate = messageDate;
                    return (
                        <React.Fragment key={messageDetails._id}>
                            {
                                showDateSeparator && <ChatDateSeparator createdAt={messageDetails.createdAt} />
                            }
                            <Message
                                messageDetails={messageDetails}
                            />

                        </React.Fragment>
                    )
                })
            }

        </>
    );
};

export default ChatsContainer;