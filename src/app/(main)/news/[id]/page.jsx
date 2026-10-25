import Image from "next/image";
import Link from "next/link";
import RightsideBar from "@/components/shared/RightsideBar";
import { getNewsById } from "@/lib/api";
import demoThumb from "@/assets/demo-card-thumbnail.png";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const news = await getNewsById(id);
  return {
    title: news?.title ? `${news.title} - Dragon News` : "News Details - Dragon News",
  };
}

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsById(id);

  if (!news) {
    return (
      <div className="max-w-4xl mx-auto px-4 my-12 text-center bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
        <h2 className="text-xl font-bold text-slate-800 mb-2">News Not Found</h2>
        <p className="text-slate-500 text-sm mb-5">The article you requested could not be found.</p>
        <Link
          href="/"
          className="btn min-h-0 h-9 bg-rose-600 hover:bg-rose-500 text-white rounded-xl px-5 text-xs font-semibold shadow-sm hover:shadow-rose-600/25 border-none"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const { title, details, image_url, thumbnail_url, category_id } = news;
  const displayImage = image_url || thumbnail_url;

  return (
    <main className="max-w-6xl mx-auto px-4 my-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Content */}
        <section className="lg:col-span-9 space-y-5">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-md">
                Headline
              </span>
              <span className="text-xs text-slate-400">Detailed Coverage</span>
            </div>

            {displayImage && (
              <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-100 shadow-xs">
                <Image
                  src={displayImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              {title}
            </h1>

            <div className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-3 border-t border-slate-100 pt-3">
              {details}
            </div>

            <div className="pt-2">
              <Link
                href={category_id ? `/category/${category_id}` : "/"}
                className="btn min-h-0 h-9 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white border-none rounded-xl px-4 py-2 font-semibold text-xs tracking-wide shadow-sm hover:shadow-md hover:shadow-rose-500/25 transition-all duration-200 active:scale-95 inline-flex items-center gap-2"
              >
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                All news in this category
              </Link>
            </div>
          </div>

          {/* Editors Insight */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-slate-800 px-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
              Editors Insight
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col gap-2 group cursor-pointer">
                  <div className="overflow-hidden rounded-xl h-32 relative">
                    <Image
                      src={demoThumb}
                      alt="Editors Insight"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-xs text-slate-800 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
                    21 The Most Stylish Wedding Guest Dresses For Spring
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <svg
                      className="w-3 h-3 text-slate-400"
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
                    <span>Jan 4, 2022</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3">
          <RightsideBar />
        </aside>
      </div>
    </main>
  );
};

export default NewsDetailsPage;
