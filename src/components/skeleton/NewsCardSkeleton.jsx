const NewsCardSkeleton = () => {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs animate-pulse">
      {/* Top author bar skeleton */}
      <div className="bg-slate-50/80 px-4 py-2.5 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-200"></div>
          <div className="space-y-1.5">
            <div className="h-3 w-24 bg-slate-200 rounded-sm"></div>
            <div className="h-2.5 w-16 bg-slate-200 rounded-sm"></div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-5 h-5 bg-slate-200 rounded-md"></div>
          <div className="w-5 h-5 bg-slate-200 rounded-md"></div>
        </div>
      </div>

      {/* Main body skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 w-4/5 bg-slate-200 rounded-md"></div>
        <div className="h-4 w-3/5 bg-slate-200 rounded-md"></div>

        {/* Thumbnail pulse block */}
        <div className="w-full h-52 bg-slate-200 rounded-xl"></div>

        {/* Text lines */}
        <div className="space-y-2 pt-1">
          <div className="h-3 w-full bg-slate-200 rounded-sm"></div>
          <div className="h-3 w-5/6 bg-slate-200 rounded-sm"></div>
          <div className="h-3 w-2/3 bg-slate-200 rounded-sm"></div>
        </div>

        {/* Footer info */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <div className="h-6 w-20 bg-slate-200 rounded-lg"></div>
          <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
