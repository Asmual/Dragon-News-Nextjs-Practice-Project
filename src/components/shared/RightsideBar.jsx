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
    <div className="flex flex-col gap-5">
      {/* Login With */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
        <h2 className="text-sm font-bold mb-3 text-slate-800 px-1">Login With</h2>
        <div className="flex flex-col gap-2">
          <button className="btn min-h-0 h-9 bg-white hover:bg-slate-50 border border-slate-300/80 text-slate-700 hover:text-slate-900 rounded-xl flex items-center justify-center gap-2 w-full normal-case font-medium text-xs shadow-2xs hover:shadow-sm transition-all duration-200">
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
          <button className="btn min-h-0 h-9 bg-slate-900 hover:bg-slate-800 text-white rounded-xl flex items-center justify-center gap-2 w-full normal-case font-medium text-xs shadow-xs hover:shadow-slate-900/15 border-none transition-all duration-200">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Login with Github
          </button>
        </div>
      </div>

      {/* Find Us On */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
        <h2 className="text-sm font-bold mb-3 text-slate-800 px-1">Find Us On</h2>
        <div className="border border-slate-200/70 rounded-xl overflow-hidden divide-y divide-slate-100">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-2.5 hover:bg-slate-50 transition text-slate-600 text-xs font-medium"
          >
            <div className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Image src={fb} alt="Facebook" width={14} height={14} />
            </div>
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-2.5 hover:bg-slate-50 transition text-slate-600 text-xs font-medium"
          >
            <div className="w-6 h-6 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
              <Image src={twitter} alt="Twitter" width={14} height={14} />
            </div>
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 p-2.5 hover:bg-slate-50 transition text-slate-600 text-xs font-medium"
          >
            <div className="w-6 h-6 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
              <Image src={instagram} alt="Instagram" width={14} height={14} />
            </div>
            Instagram
          </a>
        </div>
      </div>

      {/* Q-Zone */}
      <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <h2 className="text-sm font-bold text-slate-800 px-1">Q-Zone</h2>
        <div className="space-y-2.5">
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/60 flex flex-col items-center">
            <Image src={swimming} alt="Swimming" className="rounded-lg w-full object-cover" />
            <span className="font-semibold text-slate-700 mt-1.5 text-xs">Swimming</span>
          </div>
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/60 flex flex-col items-center">
            <Image src={classImg} alt="Class" className="rounded-lg w-full object-cover" />
            <span className="font-semibold text-slate-700 mt-1.5 text-xs">Class</span>
          </div>
          <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/60 flex flex-col items-center">
            <Image src={playground} alt="Play Ground" className="rounded-lg w-full object-cover" />
            <span className="font-semibold text-slate-700 mt-1.5 text-xs">Play Ground</span>
          </div>
        </div>
      </div>

      {/* Advertisement Banner */}
      <div
        className="relative rounded-2xl overflow-hidden text-center text-white py-10 px-5 flex flex-col items-center justify-center shadow-sm"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-2xs"></div>
        <div className="relative z-10 space-y-2.5">
          <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-rose-500/30">
            Special Edition
          </span>
          <h3 className="text-lg font-bold leading-tight">
            Create an Amazing Newspaper
          </h3>
          <p className="text-[11px] text-slate-300 leading-relaxed max-w-xs">
            Discover thousands of options, easy to customize layouts, one-click to import demo.
          </p>
          <button className="btn min-h-0 h-9 bg-rose-600 hover:bg-rose-500 text-white border-none rounded-xl px-5 text-xs font-semibold shadow-md shadow-rose-600/30 transition-all duration-200 active:scale-95">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightsideBar;
