import SignInSvg from "./assets/svgs/undraw_sign_in.svg";

function App() {
  return (
    <>
      <div className="h-screen w-full flex">
        {/* 1st section */}
        <div className="w-[40%] bg-[#2750D3] hidden sm:flex justify-center items-center">
          <img src={SignInSvg} className="h-72" />
        </div>
        <div className="w-[60%]"></div>
      </div>
    </>
  );
}

export default App;
