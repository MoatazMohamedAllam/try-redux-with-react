import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/userSlice";


const UserRegistrationForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);

    const onSubmit = (data) =>{
        dispatch(registerUser(data))
        reset();
        console.log('submitted')
    }

    return (
        <div>
            <h2>User Registration</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input  {...register('name', {required: true})}/>
                    {errors.name && <span>this field is requied</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input  {...register('email', {required: true})}/>
                    {errors.email && <span>this field is requied</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input  {...register('password', {required: true})}/>
                    {errors.password && <span>this field is requied</span>}
                </div>
                <button type="submit">Register</button>
            </form>

            {userState.status === 'loading' && <p>Registering user...</p>}
            {userState.status === 'succeeded' && <p>Registration Successfully</p>}
            {userState.status === 'failed' && <p>Error: {userState.error}</p>}

        </div>
    );

};

export default UserRegistrationForm;