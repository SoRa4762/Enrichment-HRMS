import {
  faDeleteLeft,
  faDumpster,
  faEdit,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../../assets/svgs/undraw_chill-guy-avatar.svg";

const Employees = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col gap-2">
        {/* add employee */}
        <div className="flex justify-end">
          <button className="bg-blue-300 hover:bg-[#2750D3] p-2 rounded-lg text-white cursor-pointer transition">
            <FontAwesomeIcon icon={faPlus} />
            Add Employee
          </button>
        </div>

        {/* list of employees */}
        <div className="flex flex-col h-full w-full gap-2">
          {/* employee */}
          <div className="flex items-center justify-between h-10 w-full border-b rounded-2xl px-2 border-b-blue-300">
            {/* user details */}
            <div className="flex gap-2 items-center">
              <p className="font-semibold">Username</p>
              <img
                className="h-8 w-8 rounded-full border border-[#17B8A6]"
                src={Avatar}
                alt="emp1"
              />
            </div>
            {/* user roles */}
            <div className="flex gap-4 font-semibold">
              <p>User</p>
              <p className="flex items-center gap-1">
                <span className="h-2 w-2 bg-green-500 rounded-full inline-block"></span>
                Active
              </p>
              <p>Dep123</p>
            </div>
            {/* action buttons */}
            <div className="flex gap-2">
              <button className="bg-emerald-500 px-2 py-1 text-white rounded-lg">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button className="bg-red-500 px-2 py-1 text-white rounded-lg">
                <FontAwesomeIcon icon={faDumpster} />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
