import React, { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import Navbar from "../../components/Navbar";
import { logoutUserThunk, getOtherUsersThunk } from '../../store/slice/user/user.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import User from "./components/User"


const UserSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { otherUsers, userProfile } = useSelector(state => state.user)
    const handleLogout = async () => {
        const response = await dispatch(logoutUserThunk())
        if (response.payload.success) {
            navigate("/login", { replace: true })
        }
    }



    useEffect(() => {
        dispatch(getOtherUsersThunk())
    }, [])

    return (
        <>
            <div className='min-w-[20rem]  h-full flex flex-col border-r-[1px] border-gray-700/50 z-0'>
                <Navbar />
                <div className='header h-14 flex justify-between items-center px-2 font-bold'>
                    <div>Chats</div>
                    <div className='scale-150 mr-2'><IoCreateOutline /></div>
                </div>
                <div className='search-box px-1'>
                    <label className="input border-none  bg-base-300 -z-10">
                        <IoSearch />
                        <input type="search" className="grow " placeholder="Search" />
                    </label>

                </div>
                <div className='user-conatainer  grow px-2 overflow-y-scroll '>
                    <ul className="list bg-base-100  shadow-md h-full ">
                        {
                            otherUsers?.map((userDetails) => {
                                return (
                                    <User
                                        key={userDetails?._id}
                                        userDetails={userDetails}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='footer bg-base-300 px-3 h-20 flex items-center'>
                    <div className="profile avatar">
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                            <img src={userProfile?.avatar} />
                        </div>
                    </div>
                    <div className='name font-bold text-lg grow'>{userProfile?.fullName}</div>
                    <button
                        onClick={handleLogout}
                        className="btn btn-sm btn-ghost px-4 font-bold  flex items-center bg-accent text-accent-content rounded-xl"
                    >
                        Logout
                    </button>
                </div>
            </div >
        </>
    );
};

export default UserSidebar;