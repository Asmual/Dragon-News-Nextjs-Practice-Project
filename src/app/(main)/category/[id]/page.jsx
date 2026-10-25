import LeftsideBar from "@/components/homepage/news/LeftsideBar";
import RightsideBar from "@/components/shared/RightsideBar";
import NewsCard from "@/components/news/NewsCard";
import { getCategories, getNewsByCategory } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const categories = await getCategories();
  const current = categories?.news_category?.find(
    (c) => String(c.category_id) === String(id)
  );

  return {
    title: `${current?.category_name || "Category"} - Dragon News`,
  };
}

export default async function CategoryPage({ params }) {
  const { id } = await params;
  const categories = await getCategories();
  const newsList = await getNewsByCategory(id);

  const currentCategory = categories?.news_category?.find(
    (c) => String(c.category_id) === String(id)
  );
  const categoryName = currentCategory?.category_name || "Dragon News";

  return (
    <main className="max-w-6xl mx-auto px-4 my-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3">
          <LeftsideBar categories={categories} activeID={id} />
        </aside>

        {/* Middle News Feed */}
        <section className="lg:col-span-6 space-y-6">
          <div className="flex items-center justify-between border-b border-base-200 pb-2">
            <h2 className="text-xl font-bold text-[#403F3F]">{categoryName}</h2>
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
              <p className="text-gray-500 font-medium">
                No news available in {categoryName}.
              </p>
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
