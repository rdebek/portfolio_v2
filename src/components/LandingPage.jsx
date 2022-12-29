import computerSvg from "../assets/computer2.svg";

function LandingPage() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col mx-5">
        <h1 className="text-8xl text-violet-600">Hello.</h1>
        <h1 className="text-8xl text-gray-200 pl-6">World</h1>
      </div>
      <img src={computerSvg} alt="Programming guy" className="w-1/2" />
    </div>
  );
}

export default LandingPage;
