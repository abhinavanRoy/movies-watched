import { FaHeart } from "react-icons/fa6";
import CONSTANTS from "../Constants/Constants";
function Footer() {
    var preCourtseyText = CONSTANTS.madeWith;
    var postCourtseyText = CONSTANTS.byAbhinavan;
    return (
        <div className="flex items-center gap-2 justify-center p-5">
            <h1 className="font-poppins text-white">{preCourtseyText}</h1>
            <FaHeart className="shadow-sm" color="red"/>
            <h1 className="font-poppins text-white">{postCourtseyText}</h1>
        </div>
        
    )
}
export default Footer