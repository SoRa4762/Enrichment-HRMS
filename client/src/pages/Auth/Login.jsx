import SignInSvg from "../../assets/svgs/undraw_sign_in.svg";
// import { RxAvatar } from "react-icons/rx";
// import { FaLock } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <>
      <div className="h-screen w-full flex">
        {/* 1st section */}
        <div className="w-[40%] bg-blue-300 hidden sm:flex justify-center items-center">
          <img src={SignInSvg} className="h-72" />
        </div>
        <div className="w-full sm:w-[60%] flex justify-center items-center px-8 sm:px-20 py-24">
          {/* log in contain garne div */}
          <div className="h-full w-full flex flex-col justify-center items-center gap-12">
            {/* heading wala section */}
            <div className="text-center">
              <h1 className="font-bold text-4xl">Login</h1>
              <p className="mt-2">
                If you have not logged in yet, NOW is the time!
              </p>
            </div>

            {/* login form */}
            <form
              action="submit"
              className="w-full sm:w-96 gap-2 flex flex-col"
            >
              <div className="flex items-center gap-2">
                {/* <RxAvatar size={40} /> */}
                <FontAwesomeIcon icon={faUser} fontSize={30} />
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-[#EAE9E9] rounded-2xl h-14 w-full p-2"
                />
              </div>

              <div className="flex items-center gap-2">
                {/* <FaLock size={40} /> */}
                <FontAwesomeIcon icon={faLock} fontSize={30} />
                <input
                  type="text"
                  placeholder="Password"
                  className="bg-[#EAE9E9] rounded-2xl h-14 w-full p-2"
                />
              </div>

              <button className="bg-blue-300 h-14 w-full rounded-2xl text-white cursor-pointer hover:bg-[#2750D3] transition-all duration-200">
                Login
              </button>
            </form>

            {/* sign up with */}
            <div className="text-center">
              <p>Or sign up with</p>
              <div className="flex gap-2 justify-center mt-2">
                <FontAwesomeIcon
                  icon={faFacebook}
                  fontSize={26}
                  className="cursor-pointer hover:text-[#2750D3] transition-colors"
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  fontSize={26}
                  className="cursor-pointer hover:text-[#2750D3] transition-colors"
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  fontSize={26}
                  className="cursor-pointer hover:text-[#2750D3] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
