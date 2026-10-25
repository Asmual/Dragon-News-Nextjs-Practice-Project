export default function NewsDetailsLoading() {
  return (
    <div className="w-full">
      {/* Top glowing progress bar */}
      <div className="w-full h-1 bg-slate-100 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-rose-500 via-rose-600 to-rose-400 w-3/4 animate-[pulse_0.8s_ease-in-out_infinite] rounded-full"></div>
      </div>

      <main className="max-w-6xl mx-auto px-4 my-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Main Details Skeleton */}
          <section className="lg:col-span-9 space-y-5">
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4 animate-pulse">
              <div className="h-5 w-24 bg-rose-100 rounded-md"></div>
              <div className="w-full h-72 sm:h-96 bg-slate-200 rounded-xl"></div>
              <div className="h-7 w-4/5 bg-slate-200 rounded-md"></div>
              <div className="h-6 w-3/5 bg-slate-200 rounded-md"></div>
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <div className="h-3.5 w-full bg-slate-200 rounded-sm"></div>
                <div className="h-3.5 w-full bg-slate-200 rounded-sm"></div>
                <div className="h-3.5 w-4/5 bg-slate-200 rounded-sm"></div>
                <div className="h-3.5 w-3/4 bg-slate-200 rounded-sm"></div>
              </div>
              <div className="pt-2">
                <div className="h-9 w-44 bg-slate-200 rounded-xl"></div>
              </div>
            </div>

            {/* Editors Insight Skeleton */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 animate-pulse">
              <div className="h-4 w-32 bg-slate-200 rounded-md"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="space-y-2">
                    <div className="h-32 w-full bg-slate-200 rounded-xl"></div>
                    <div className="h-3.5 w-full bg-slate-200 rounded-sm"></div>
                    <div className="h-3 w-2/3 bg-slate-200 rounded-sm"></div>
                  </div>
                ))}
              </div>
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
