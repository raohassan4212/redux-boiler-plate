import {useParams} from "react-router-dom"

const Profile = () => {
    const {id} = useParams();
    return (
        <>
        <h1>Profile Page</h1>
        <h2>{id}</h2>
        </>
    );
}

export default Profile;