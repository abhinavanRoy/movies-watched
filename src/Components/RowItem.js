import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import CONSTANTS from "../Constants/Constants";
function RowItem(props) {
  var editText = CONSTANTS.edit;
  var deleteText = CONSTANTS.delete;
  var purple = CONSTANTS.colors.purple
  return (
    <div className="flex flex-col  items-center gap-2 invisible md:visible">
      <h1 className=" font-poppins font-semibold text-black">
        {props.titleText}
      </h1>
      {props.titleText === editText && props.value ? (
        <MdEdit
          className=" cursor-pointer shadow-sm"
          color={purple}
          size={20}
        />
      ) : props.titleText === deleteText && props.value ? (
        <AiOutlineDelete
          className=" cursor-pointer shadow-sm"
          size={20}
          color={purple}
        />
      ) : (
        <div className="max-w-xs">
          <h1 className={ `font-medium overflow-hidden text-ellipsis whitespace-nowrap font-poppins  text-[${{purple}}]`}>
            {props.value}
          </h1>
        </div>
      )}
    </div>
  );
}
export default RowItem;