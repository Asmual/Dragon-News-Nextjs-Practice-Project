import Marquee from "react-fast-marquee";
import Link from "next/link";

const news = [
  {
    id: "0282e0e58a5c404fbd15261f11c2ab6a",
    title: "Match Highlights: Germany vs Spain — as it happened!",
  },
  {
    id: "bcdefa0123456789bcdefa01",
    title: "Bangladesh's Export Earnings Show Strong Growth in Q1 2025!",
  },
  {
    id: "23456789abcdef0123456789",
    title: "Central Bank Announces New Monetary Policy to Control Inflation!",
  },
  {
    id: "0282e0e58a5c404fbd15261f11c2ab6a",
    title: "Biden Pledges Nearly $3 Billion To Ukraine In Largest Military Aid Package!",
  },
];

const BreakingNews = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 w-full my-2">
      <div className="flex items-center bg-slate-100/90 backdrop-blur-xs p-1.5 sm:p-2 gap-3 rounded-xl border border-slate-200/80 shadow-xs">
        <span className="bg-gradient-to-r from-rose-600 to-rose-500 text-white rounded-lg px-3.5 py-1.5 font-semibold text-xs tracking-wider uppercase shadow-xs flex items-center gap-1.5 flex-shrink-0 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          Latest
        </span>
        <div className="flex-1 overflow-hidden font-medium text-slate-700 text-xs sm:text-sm">
          <Marquee pauseOnHover={true} speed={45}>
            {news.map((n, idx) => (
              <Link
                key={idx}
                href={`/news/${n.id}`}
                className="mr-10 hover:text-rose-600 transition cursor-pointer flex items-center gap-2 group"
              >
                <span className="group-hover:underline">{n.title}</span>
                <span className="text-slate-300">•</span>
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
