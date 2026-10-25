import NewsCardSkeleton from "@/components/skeleton/NewsCardSkeleton";

export default function Loading() {
  return (
    <div className="w-full">
      {/* Top micro progress bar */}
      <div className="w-full h-1 bg-slate-100 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-rose-500 via-rose-600 to-rose-400 w-1/2 animate-[pulse_1s_ease-in-out_infinite] rounded-full"></div>
      </div>

      <main className="max-w-6xl mx-auto px-4 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Sidebar Skeleton */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs space-y-2 animate-pulse">
              <div className="h-4 w-28 bg-slate-200 rounded-md mb-3"></div>
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-8 w-full bg-slate-100 rounded-xl"></div>
              ))}
            </div>
          </aside>

          {/* Middle News Feed Skeleton */}
          <section className="lg:col-span-6 space-y-4">
            <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between animate-pulse">
              <div className="h-4 w-36 bg-slate-200 rounded-md"></div>
              <div className="h-4 w-16 bg-slate-100 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-4">
              <NewsCardSkeleton />
              <NewsCardSkeleton />
            </div>
          </section>

          {/* Right Sidebar Skeleton */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2.5 animate-pulse">
              <div className="h-4 w-24 bg-slate-200 rounded-md mb-2"></div>
              <div className="h-9 w-full bg-slate-100 rounded-xl"></div>
              <div className="h-9 w-full bg-slate-100 rounded-xl"></div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
