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
    <main className="max-w-6xl mx-auto px-4 my-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3">
          <LeftsideBar categories={categories} activeID={id} />
        </aside>

        {/* Middle News Feed */}
        <section className="lg:col-span-6 space-y-4">
          <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600"></span>
              {categoryName}
            </h2>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-0.5 rounded-full">
              {newsList?.length || 0} Articles
            </span>
          </div>

          {newsList && newsList.length > 0 ? (
            <div className="flex flex-col gap-4">
              {newsList.map((item) => (
                <NewsCard key={item._id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200/80">
              <p className="text-slate-400 text-sm font-medium">
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
