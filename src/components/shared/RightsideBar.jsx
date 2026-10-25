import Image from "next/image";
import swimming from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playground from "@/assets/playground.png";
import bg from "@/assets/bg.png";
import fb from "@/assets/fb.png";
import twitter from "@/assets/twitter.png";
import instagram from "@/assets/instagram.png";

const RightsideBar = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Login With */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-[#403F3F]">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="btn btn-outline border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white flex items-center justify-center gap-2 w-full normal-case font-medium">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Login with Google
          </button>
          <button className="btn btn-outline border-neutral-700 text-neutral-800 hover:bg-neutral-800 hover:text-white flex items-center justify-center gap-2 w-full normal-case font-medium">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Login with Github
          </button>
        </div>
      </div>

      {/* Find Us On */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-[#403F3F]">Find Us On</h2>
        <div className="border border-base-300 rounded-lg overflow-hidden divide-y divide-base-300">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 hover:bg-base-200 transition text-[#706F6F] font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
              <Image src={fb} alt="Facebook" width={16} height={16} />
            </div>
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 hover:bg-base-200 transition text-[#706F6F] font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
              <Image src={twitter} alt="Twitter" width={16} height={16} />
            </div>
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 hover:bg-base-200 transition text-[#706F6F] font-medium"
          >
            <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
              <Image src={instagram} alt="Instagram" width={16} height={16} />
            </div>
            Instagram
          </a>
        </div>
      </div>

      {/* Q-Zone */}
      <div className="bg-[#F3F3F3] rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-bold text-[#403F3F]">Q-Zone</h2>
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-lg border border-dashed border-gray-300 flex flex-col items-center">
            <Image src={swimming} alt="Swimming" className="rounded w-full object-cover" />
            <span className="font-semibold text-gray-700 mt-2 text-sm">Swimming</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-dashed border-gray-300 flex flex-col items-center">
            <Image src={classImg} alt="Class" className="rounded w-full object-cover" />
            <span className="font-semibold text-gray-700 mt-2 text-sm">Class</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-dashed border-gray-300 flex flex-col items-center">
            <Image src={playground} alt="Play Ground" className="rounded w-full object-cover" />
            <span className="font-semibold text-gray-700 mt-2 text-sm">Play Ground</span>
          </div>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div
        className="relative rounded-lg overflow-hidden text-center text-white py-14 px-8 flex flex-col items-center justify-center shadow-lg"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 space-y-4">
          <h3 className="text-2xl font-bold leading-tight">
            Create an Amazing Newspaper
          </h3>
          <p className="text-xs text-gray-200 leading-relaxed max-w-xs">
            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
          </p>
          <button className="btn bg-[#D72050] hover:bg-[#b51b43] text-white border-none rounded-none px-6 py-3 font-semibold text-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightsideBar;
