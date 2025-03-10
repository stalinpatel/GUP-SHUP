import React from 'react';

const ChatDateSeparator = ({ createdAt }) => {
    const dateObj = new Date(createdAt);
    const getFormattedDate = () => {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1)

        const options = { day: "numeric", month: "long", year: "numeric" };
        const formattedDate = dateObj.toLocaleDateString("en-US", options);

        if (dateObj.toDateString() === today.toDateString()) {
            return "Today";
        } else if (dateObj.toDateString() === yesterday.toDateString()) {
            return "Yesterday";
        } else {
            return formattedDate;
        }
    }
    return (
        <div className="flex justify-center my-3">
            <div className="bg-base-content text-primary-content text-xs px-3 py-1 rounded-full">
                {getFormattedDate()}
            </div>
        </div>
    );
};

export default ChatDateSeparator;