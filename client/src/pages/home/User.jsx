import React from 'react';

const User = ({ onUserClick, userDetails, index }) => {
    return (
        < li
            index={index}
            onClick={(e) => onUserClick(e)}
            className="list-row bottom-border rounded-none hover:bg-base-300/50 cursor-default"
        >
            <div className="avatar avatar-online">
                <div className="w-10 rounded-full">
                    <img src={userDetails?.avatar} />
                </div>
            </div>
            <div>
                <div className='fullName'>{userDetails?.fullName}</div>
                <div
                    className="recent-message text-xs uppercase font-semibold opacity-60"
                >
                    Remaining Reason
                </div>
            </div>
        </li>
    );
};

export default User;