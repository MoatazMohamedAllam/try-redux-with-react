import { useSelector } from "react-redux"

const UserInfo = () =>{
    const userInfo = useSelector(state => state.user.userInfo)
    if(!userInfo){
        return <p>No user registered yet.</p>
    }

    return (
        <div>
        <h3>Registered User Information:</h3>
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
      </div>
    )
};

export default UserInfo;