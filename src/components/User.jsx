import { useParams } from "react-router-dom"
function User(){
 const {userid} = useParams()
    return(
            <div className=" bg-amber-900 text-3xl text-center text-white p-5">Name: {userid}</div>
    )
}

export default User