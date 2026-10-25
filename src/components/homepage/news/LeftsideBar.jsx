import Image from "next/image";
import Link from "next/link";
import demoThumb from "@/assets/demo-card-thumbnail.png";

const LeftsideBar = ({ categories, activeID = "0" }) => {
  const categoryList = categories?.news_category || [];

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Category List */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
        <h2 className="text-base font-bold text-slate-800 mb-3 px-2 flex items-center justify-between">
          <span>Categories</span>
          <span className="text-[11px] font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
            {categoryList.length}
          </span>
        </h2>
        <div className="flex flex-col gap-1">
          {categoryList.map((category) => {
            const isActive = String(activeID) === String(category.category_id);
            const href =
              category.category_id === "0"
                ? "/"
                : `/category/${category.category_id}`;

            return (
              <Link
                key={category.category_id}
                href={href}
                className={`flex items-center justify-between py-2 px-3 rounded-xl text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-rose-50 text-rose-600 font-bold border border-rose-200/60 shadow-xs"
                    : "text-slate-600 font-medium hover:bg-slate-100/80 hover:text-slate-900"
                }`}
              >
                <span>{category.category_name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Highlights / Compact Cards */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-3.5">
        <h3 className="text-sm font-bold text-slate-800 px-1">Top Highlights</h3>
        {[1, 2].map((item) => (
          <div key={item} className="flex flex-col gap-2 group cursor-pointer border-b border-slate-100 pb-3 last:border-none last:pb-0">
            <div className="overflow-hidden rounded-xl h-28 relative">
              <Image
                src={demoThumb}
                alt="Highlight news"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h4>
            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span className="font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                Sports
              </span>
              <span>Jan 4, 2022</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftsideBar;
