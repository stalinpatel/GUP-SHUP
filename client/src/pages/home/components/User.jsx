import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../../../store/slice/user/user.slice';

const User = ({ userDetails, index }) => {
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(state => state.user)
    const handleUserClick = () => {
        dispatch(setSelectedUser(userDetails))
    }
    return (
        < li
            index={index}
            onClick={handleUserClick}
            className={`list-row bottom-border  rounded-md hover:bg-base-300 cursor-default ${selectedUser?._id === userDetails._id ? "bg-base-300/50" : ""}`}
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