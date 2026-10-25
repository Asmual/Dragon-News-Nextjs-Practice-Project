import LeftsideBar from "@/components/homepage/news/LeftsideBar";
import RightsideBar from "@/components/shared/RightsideBar";
import NewsCard from "@/components/news/NewsCard";
import { getCategories, getNewsByCategory } from "@/lib/api";

export const metadata = {
  title: "Dragon News - Home",
  description: "Journalism Without Fear or Favour",
};

export default async function Home() {
  const categories = await getCategories();
  const newsList = await getNewsByCategory("0");

  return (
    <main className="max-w-6xl mx-auto px-4 my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3">
          <LeftsideBar categories={categories} activeID="0" />
        </aside>

        {/* Middle News Feed */}
        <section className="lg:col-span-6 space-y-6">
          <div className="flex items-center justify-between border-b border-base-200 pb-2">
            <h2 className="text-xl font-bold text-[#403F3F]">Dragon News Home</h2>
            <span className="text-sm text-[#706F6F] font-medium">
              {newsList?.length || 0} News Found
            </span>
          </div>

          {newsList && newsList.length > 0 ? (
            <div className="flex flex-col gap-6">
              {newsList.map((item) => (
                <NewsCard key={item._id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-base-200 rounded-lg">
              <p className="text-gray-500 font-medium">No news available in this category.</p>
            </div>
          )}
        </section>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3">
          <RightsideBar />
        </aside>
      </div>
    </main>
  );
}
