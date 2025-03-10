import React, { useEffect, useState } from 'react';
import { useForm, useFormContext } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom"
import { registerUserThunk } from '../../store/slice/user/user.thunk';
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onTouched",
    });
    const [visibility, setVisibility] = useState({
        password: false,
        confirmPassword: false,
    });
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const { buttonLoading, isAuthenticated } = useSelector((state) => state.user);
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated, navigate])


    const toggleVisibility = (field) => {
        setVisibility((prev) => ({ ...prev, [field]: !prev[field] }))
    }

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            setPasswordMismatch(true)
            return toast.error("Password and Confirm Password doesn't match")
        }
        setPasswordMismatch(false)
        const response = await dispatch(registerUserThunk(data))
        if (registerUserThunk.fulfilled.match(response)) {
            navigate("/", { replace: true })
        }
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
                    <label className={`password-input validator input md:w-full ${passwordMismatch ? "border-red-500" : ""}`}>
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
                    <label className={`confirm-password-input validator input md:w-full ${passwordMismatch ? "border-red-500" : ""}`}>
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
                    <div className='flex gap-x-2 pb-3'>
                        <label className='mr-2 flex items-center'>
                            <input
                                type="radio"
                                {...register("gender", {
                                    required: "Please select your gender"
                                })}
                                value="male"
                                name="gender"
                                className="radio radio-md mr-2"
                            />
                            Male
                        </label>
                        <label className='flex items-center'>
                            <input
                                type="radio"
                                {...register("gender", {
                                    required: "Please select your gender"
                                })}
                                name="gender"
                                value="female"
                                className="radio radio-md mr-2 "
                            />
                            Female
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary md:mx-auto mx-0"
                        disabled={buttonLoading}
                    >
                        {buttonLoading ? <span className="loading loading-spinner"></span> : "Sign Up"}

                    </button>
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