import { FaHeart } from "react-icons/fa6";
function Footer() {
    var preCourtseyText = 'Made with'
    var postCourtseyText = 'by Abhinavan'
    return (
        <div className="flex items-center gap-2 justify-center p-5">
            <h1 className="font-poppins text-white">{preCourtseyText}</h1>
            <FaHeart className="shadow-sm" color="red"/>
            <h1 className="font-poppins text-white">{postCourtseyText}</h1>
        </div>
        
    )
}
export default Footer