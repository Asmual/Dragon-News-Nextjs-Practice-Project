import Image from "next/image";
import Link from "next/link";
import demoThumb from "@/assets/demo-card-thumbnail.png";

const LeftsideBar = ({ categories, activeID = "0" }) => {
  const categoryList = categories?.news_category || [];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Category List */}
      <div>
        <h2 className="text-xl font-bold text-[#403F3F] mb-4">All Caterogy</h2>
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
                className={`block py-3.5 px-6 rounded-lg text-base transition text-left ${
                  isActive
                    ? "bg-[#E7E7E7] text-[#403F3F] font-semibold"
                    : "text-[#9F9F9F] font-medium hover:bg-base-200 hover:text-[#403F3F]"
                }`}
              >
                {category.category_name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Highlights / Demo Cards under categories */}
      <div className="flex flex-col gap-5 pt-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col gap-3 group">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={demoThumb}
                alt="Highlight news"
                className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <h4 className="font-semibold text-base text-[#403F3F] leading-snug group-hover:text-primary transition">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h4>
            <div className="flex items-center gap-4 text-xs text-[#9F9F9F]">
              <span className="font-semibold text-[#403F3F]">Sports</span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Jan 4, 2022
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftsideBar;
