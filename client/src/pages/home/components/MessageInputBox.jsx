import React, { useEffect, useState } from 'react';
import { IoSend } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { sendMessageThunk } from '../../../store/slice/message/message.thunk';
import { pushMessage } from '../../../store/slice/message/message.slice';
import { useSelector } from 'react-redux';
import { sendMessageViaSocket } from '../../../socket/socket';

const MessageInputBox = () => {
    const dispatch = useDispatch();
    const { selectedUser, userProfile } = useSelector(state => state.user)

    const [inputMessage, setInputMessage] = useState("")


    const handleInputChange = (e) => {
        setInputMessage(e.target.value)
    }

    const handleSendClick = async () => {
        const msg = inputMessage.trim();
        if (!selectedUser && !msg) return;

        const resp = await dispatch(sendMessageThunk({
            receiverId: selectedUser?._id,
            message: msg
        }));

        if (resp.payload?.success) {
            dispatch(pushMessage({
                message: msg,
                createdAt: new Date().toISOString(),
                receiverId: selectedUser?._id,
                senderId: userProfile._id
            }))
            sendMessageViaSocket({
                receiverId: selectedUser?._id,
                message: msg
            })
            setInputMessage(""); // Clear the input field
        }
    }

    return (
        <>
            <input
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={inputMessage}
                className="outline-none border-none px-4 w-full h-full  bg-base-300"
                placeholder="Type a message..."
            />
            <button
                onClick={handleSendClick}
                disabled={!inputMessage.trim()}
                className="btn btn-sm btn-ghost absolute right-6 scale-150 "
            >
                <IoSend />
            </button>
        </>
    );
};

export default MessageInputBox;