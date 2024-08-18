import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Authprovider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUserByEmailPass } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // console.log(errors);

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data)
        const email = data.email;
        const password = data.password;
        // console.log(email)

        createUserByEmailPass(email, password)
            .then(result => {
                console.log(result.user);
                setLoading(false);
                if (result?.user) {
                    navigate('/log-in');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    // create user by email pass

    return (
        <div className='max-w-6xl mx-auto my-16'>
            <form onSubmit={handleSubmit(onSubmit)} className=' w-full flex flex-col justify-center items-center gap-4'>
                <div className='w-1/3 flex flex-col justify-center items-start'>
                    <input {...register('email', { required: true })} className='py-2 px-3 rounded-full outline-none bg-gray-100 w-full' type="email" placeholder='Enter email' />
                    {errors?.email && <span className='text-red-500 pb-2 pl-3'>Email required</span>}
                </div>
                <div className='w-1/3 flex flex-col justify-center items-start'>
                    <input {...register('password', { required: true, minLength: 6 })} className='py-2 px-3 rounded-full outline-none bg-gray-100 w-full' type="password" placeholder='Enter password' />
                    {errors?.password?.type === 'required' && <span className='text-red-500 pb-2 pl-3'>Password Required</span>}
                    {errors?.password?.type === 'minLength' && <span className='text-red-500 pb-2 pl-3'>Password must be at minimum 6 character</span>}
                </div>
                {
                    !loading ?
                        <input className='py-2 px-3 rounded-full outline-none bg-gray-200 hover:bg-gray-300 w-1/3' type="submit" value={'Register'} /> :
                        <p className='py-2 px-3 rounded-full outline-none bg-gray-200 hover:bg-gray-300 w-1/3 flex justify-center items-center'>loading...</p>
                }
            </form>
        </div>
    );
};

export default Register;