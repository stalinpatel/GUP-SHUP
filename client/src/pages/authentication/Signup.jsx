import React, { useState } from 'react';
import { useForm, useFormContext } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"


const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onTouched",
    });
    const [visibility, setVisibility] = useState({
        password: false,
        confirmPassword: false,
    });

    const toggleVisibility = (field) => {
        setVisibility((prev) => ({ ...prev, [field]: !prev[field] }))
    }

    const onSubmit = (data) => {
        console.log(data);

    }
    const onError = () => {
        Object.values(errors).forEach((error) => {
            toast.error(error.message);
        });
    }


    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit, onError)}
                className='flex items-center justify-center w-full h-[80vh] '
            >
                <div className='flex p-4 md:p-10 bg-base-200/50 flex-col gap-y-4 relative md:w-[40%] rounded-2xl '>
                    <h2 className='font-semibold'>Please Signup..!</h2>
                    <label className="full-name input validator md:w-full">
                        <FaRegUser />
                        <input
                            {...register("fullName", {
                                required: "Full name is required",
                                minLength: { value: 3, message: "Full Name should be atleast 3 characters" },
                                maxLength: { value: 15, message: "Full Name should not exceed 15 characters" },
                            })}
                            placeholder="Full Name"
                            title="Only letters, numbers or dash"
                        />
                    </label>
                    <label className="input validator md:w-full">
                        <FaRegUser />
                        <input
                            {...register("username", {
                                required: "Username is required",
                                pattern: {
                                    value: /^[A-Za-z][A-Za-z0-9\-]*$/,
                                    message: "Username should contain only A-Z, a-z, 0-9, and dashes ",
                                },
                                minLength: { value: 3, message: "Username should be atleast 3 characters" },
                                maxLength: { value: 15, message: "Username should not exceed 15 characters" },
                            })}
                            placeholder="Username"
                            title="Only letters, numbers or dash"
                        />
                    </label>
                    <label className="password-input validator input  md:w-full ">
                        <FaKey />
                        <input
                            type={visibility.password ? "text" : "password"}
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                                    message: "Password must contain uppercase, lowercase and digit",
                                },
                                minLength: { value: 8, message: "Password should be atleast 8 characters" },
                                maxLength: { value: 15, message: "Max length of password is 15" },
                            })}
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button
                            type='button'
                            onClick={() => toggleVisibility("password")}
                            className=' scale-150 active:invert-50 hover:scale-160 active:scale-170 mr-2'
                        >
                            {visibility.password ? (<FaEye />) : (<FaEyeSlash />)}
                        </button>
                    </label>
                    <label className="confirm-password-input validator input  md:w-full ">
                        <FaKey />
                        <input
                            type={visibility.confirmPassword ? "text" : "password"}
                            placeholder="Password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                pattern: {
                                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                                    message: "Confirm Password must contain uppercase, lowercase and digit",
                                },
                                minLength: { value: 8, message: "Confirm Password should be atleast 8 characters" },
                                maxLength: { value: 15, message: "Max length of Confirm password is 15" },
                            })}
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button
                            type='button'
                            onClick={() => toggleVisibility("confirmPassword")}
                            className=' scale-150 active:invert-50 hover:scale-160 active:scale-170 mr-2'
                        >
                            {visibility.confirmPassword ? (<FaEye />) : (<FaEyeSlash />)}
                        </button>
                    </label>


                    <input
                        type="submit"
                        value="Sign Up"
                        className="btn btn-primary t md:mx-auto mx-0"
                    />
                    <div className='flex flex-col md:flex-row justify-between '>
                        <div >
                            <span>
                                Already have an account ?
                            </span>
                            <Link
                                to={"/login"}
                                type='button'
                                className='ml-2 cursor-pointer btn-secondary hover:text-secondary active:text-secondary-content underline'
                            > Login
                            </Link>
                        </div>
                        <div>
                            <span>
                                Forgot Password ?
                            </span>
                            <Link
                                to={"/resetpassword"}
                                type='button'
                                className='ml-2 cursor-pointer btn-secondary hover:text-secondary active:text-secondary-content underline'
                            > Reset
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Signup;