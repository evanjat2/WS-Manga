import {useNavigate} from "react-router-dom";
import error404 from "../assets/images/Error/error404.png";

const NotFound = () => {

    return (
        <>
            <div className="grid h-screen place-content-center">
                <img src={error404} className="mx-auto"/>
                <p className="font-notoseriftc text-center text-3xl text-reemkufiink text-blue font-bold my-4">
                Sorry, this page could not be found
                </p>
            </div>
        </>
    )
}

export default NotFound