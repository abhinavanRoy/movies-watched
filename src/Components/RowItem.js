import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
function RowItem(props) {
  var editText = "Edit";
  var deleteText = "Delete";
  return (
    <div className="flex flex-col  items-center gap-2 invisible md:visible">
      <h1 className=" font-poppins font-semibold text-black">
        {props.titleText}
      </h1>
      {props.titleText === editText && props.value ? (
        <MdEdit
          className=" cursor-pointer shadow-sm"
          color="#671FAF"
          size={20}
        />
      ) : props.titleText === deleteText && props.value ? (
        <AiOutlineDelete
          className=" cursor-pointer shadow-sm"
          size={20}
          color="#671FAF"
        />
      ) : (
        <div className="max-w-xs">
          <h1 className=" font-medium overflow-hidden text-ellipsis whitespace-nowrap font-poppins  text-[#671FAF]">
            {props.value}
          </h1>
        </div>
      )}
    </div>
  );
}
export default RowItem;