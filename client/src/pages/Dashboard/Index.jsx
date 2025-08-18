import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../../assets/svgs/undraw_chill-guy-avatar.svg";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const index = () => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <div className="h-[15vh] w-full border border-white bg-[#2750D3] flex justify-between items-center px-8">
        <p className="font-bold text-4xl text-white">Dashboard</p>
        {/* user details */}
        <div className="flex gap-4">
          <p className="font-semibold text-2xl text-white cursor-pointer">
            Username
          </p>
          <img
            className="h-[5vh] w-full cursor-pointer border border-[#17B8A6] rounded-full"
            src={Avatar}
            alt="Avatar"
          />
        </div>
      </div>
      {/* Sidebar and Main Component */}
      <div className="flex h-[85vh] w-full">
        {/* Sidebar */}
        <div className="flex-1 flex flex-col border border-white bg-blue-300 p-4">
          <a
            href="dashboard/employees"
            className="text-white text-xl font-semibold"
          >
            <FontAwesomeIcon icon={faUsers} />
            <span className="pl-2">Employees</span>
          </a>
          <a
            href="dashboard/users"
            className="text-white text-xl font-semibold"
          >
            <FontAwesomeIcon icon={faUserAlt} />
            <span className="pl-2">Users</span>
          </a>
          <a
            href="dashboard/attendance"
            className="text-white text-xl font-semibold"
          >
            <FontAwesomeIcon icon={faClipboardList} />
            <span className="pl-2">Attendance</span>
          </a>
          <a
            href="dashboard/leave"
            className="text-white text-xl font-semibold"
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span className="pl-2">Leave</span>
          </a>
        </div>
        {/* Main Component */}
        <div className="flex-3 border border-white p-4">
          This is main component
        </div>
      </div>
    </div>
  );
};

export default index;
