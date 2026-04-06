import icon from "../assets/icon.png";

function AuthNavbar({ isTrue = false }) {
  return (
    <div className="flex items-center justify-between">
      <div className="md:ml-[8px]">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-sky-700">Linked</h1>

          <img src={icon} alt="Linkedin logo" className="h-[30px]" />
        </div>
      </div>
      {isTrue && (
        <div className="text-sm text-gray-600 mt-1">
          <button className="text-sky-900 border border-sky-900 text-lg px-7 py-3 font-semibold hover:bg-sky-100 rounded-full mr-2">
            Sign in
          </button>
          <button className="bg-sky-600 text-white px-7 py-3 text-lg font-semibold hover:bg-sky-900 rounded-full">
            Join now
          </button>
        </div>
      )}
    </div>
  );
}

export default AuthNavbar;
