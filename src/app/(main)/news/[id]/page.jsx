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
      <div className="max-w-6xl mx-auto px-4 my-12 text-center">
        <h2 className="text-2xl font-bold text-[#403F3F] mb-4">News Not Found</h2>
        <p className="text-gray-500 mb-6">The article you requested could not be found.</p>
        <Link
          href="/"
          className="btn bg-[#D72050] text-white hover:bg-[#b51b43] border-none px-6"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const { title, details, image_url, thumbnail_url, category_id } = news;
  const displayImage = image_url || thumbnail_url;

  return (
    <main className="max-w-6xl mx-auto px-4 my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Content */}
        <section className="lg:col-span-9 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#403F3F] mb-5">Dragon News</h2>

            {/* News Detail Card */}
            <div className="border border-base-200 rounded-lg p-6 bg-base-100 shadow-sm space-y-5">
              {displayImage && (
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-gray-100">
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

              <h1 className="text-2xl md:text-3xl font-bold text-[#403F3F] leading-snug">
                {title}
              </h1>

              <div className="text-[#706F6F] text-base leading-relaxed whitespace-pre-line space-y-4">
                {details}
              </div>

              <div className="pt-4">
                <Link
                  href={category_id ? `/category/${category_id}` : "/"}
                  className="inline-flex items-center gap-2 btn bg-[#D72050] hover:bg-[#b51b43] text-white border-none rounded-none px-6 py-2.5 font-medium text-sm"
                >
                  <svg
                    className="w-4 h-4"
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
          </div>

          {/* Editors Insight */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-[#403F3F]">Editors Insight</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col gap-3 group">
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={demoThumb}
                      alt="Editors Insight"
                      className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-base text-[#403F3F] leading-snug group-hover:text-primary transition">
                    21 The Most Stylish Wedding Guest Dresses For Spring
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#9F9F9F]">
                    <svg
                      className="w-4 h-4"
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
