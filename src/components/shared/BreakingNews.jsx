import Marquee from "react-fast-marquee";
import Link from "next/link";

const news = [
  {
    id: "0282e0e58a5c404fbd15261f11c2ab6a",
    title: "Match Highlights: Germany vs Spain — as it happened !",
  },
  {
    id: "bcdefa0123456789bcdefa01",
    title: "Bangladesh's Export Earnings Show Strong Growth in Q1 2025 !",
  },
  {
    id: "23456789abcdef0123456789",
    title: "Central Bank Announces New Monetary Policy to Control Inflation !",
  },
  {
    id: "4",
    title: "Biden Pledges Nearly $3 Billion To Ukraine In Largest Military Aid Package !",
  },
];

const BreakingNews = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 w-full my-3">
      <div className="flex items-center bg-[#F3F3F3] p-3 gap-4">
        <button className="btn bg-[#D72050] hover:bg-[#b51b43] text-white border-none rounded-none px-6 py-2 font-medium text-base min-h-0 h-10 shadow-none">
          Latest
        </button>
        <div className="flex-1 overflow-hidden font-semibold text-[#403F3F] text-base">
          <Marquee pauseOnHover={true} speed={50}>
            {news.map((n) => (
              <span key={n.id} className="mr-12 hover:text-[#D72050] transition cursor-pointer">
                {n.title}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
