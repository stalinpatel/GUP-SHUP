import React from 'react';
import { IoSearch } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";

const UserSidebar = () => {
    return (
        <>
            <div className='min-w-[20rem]  h-full flex flex-col'>
                <div className='header  h-14 flex justify-between items-center px-2 font-bold'>
                    <div>Chats</div>
                    <div className='scale-150 mr-2'><IoCreateOutline /></div>
                </div>
                <div className='search-box px-1'>
                    <label className="input bg-base-300">
                        <IoSearch />
                        <input type="search" className="grow " placeholder="Search" />
                    </label>

                </div>
                <div className='user-conatainer  grow px-2 overflow-y-scroll '>
                    <ul className="list bg-base-100  shadow-md h-full ">
                        <li className="list-row">
                            <div>
                                <img
                                    className="size-10 rounded-full"
                                    src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                                />
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
                        <li className="list-row">
                            <div>
                                <img
                                    className="size-10 rounded-full"
                                    src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                                />
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
                <div className='footer bg-base-300/50 px-3 h-14 flex items-center'>
                    <div className="profile avatar">
                        <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className='name font-bold text-lg grow'>Stalin Patel</div>
                    <button className="btn btn-soft flex items-center bg-accent text-accent-content h-fit p-2 rounded-xl">Logout</button>
                </div>
            </div>
        </>
    );
};

export default UserSidebar;