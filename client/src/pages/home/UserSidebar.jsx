import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import Navbar from "../../components/Navbar";


const UserSidebar = () => {
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
                        <li className="list-row bottom-border rounded-none">
                            <div className="avatar avatar-online">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div>
                                <div className='username'>Dio Lupa</div>
                                <div
                                    className="recent-message text-xs uppercase font-semibold opacity-60"
                                >
                                    Remaining Reason
                                </div>
                            </div>
                        </li>
                        <li className="list-row bottom-border rounded-none">
                            <div className="avatar avatar-offline">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div>
                                <div className='username'>Dio Lupa</div>
                                <div
                                    className="recent-message text-xs uppercase font-semibold opacity-60"
                                >
                                    Remaining Reason
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='footer bg-base-300/50 px-3 h-16 flex items-center'>
                    <div className="profile avatar">
                        <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className='name font-bold text-lg grow'>Stalin Patel</div>
                    <button className="btn btn-sm btn-ghost px-4 font-bold  flex items-center bg-accent text-accent-content rounded-xl">Logout</button>
                </div>
            </div>
        </>
    );
};

export default UserSidebar;