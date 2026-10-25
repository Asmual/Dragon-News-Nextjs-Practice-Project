import Image from "next/image";
import Link from "next/link";
import demoUser from "@/assets/demo-user.png";

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    author,
    image_url,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  const displayImage = image_url || thumbnail_url;
  const authorImage = author?.img || demoUser;
  const ratingNumber = rating?.number || 4.5;
  const starsCount = Math.round(Number(ratingNumber) || 4);

  return (
    <article className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:shadow-slate-200/60 hover:border-slate-300 transition-all duration-300">
      {/* Top author bar */}
      <div className="bg-slate-50/80 px-4 py-2.5 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 relative flex-shrink-0 ring-1 ring-slate-300/60">
            <Image
              src={authorImage}
              alt={author?.name || "Author"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h5 className="font-semibold text-xs text-slate-800 leading-tight">
              {author?.name || "News Desk"}
            </h5>
            <p className="text-[11px] text-slate-400">
              {author?.published_date
                ? new Date(author.published_date).toISOString().split("T")[0]
                : "2025-08-21"}
            </p>
          </div>
        </div>

        {/* Action icons with curved hover background */}
        <div className="flex items-center gap-1 text-slate-400">
          <button
            type="button"
            aria-label="Bookmark"
            className="p-1.5 rounded-lg hover:bg-slate-200/60 hover:text-slate-700 transition"
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
                strokeWidth={1.8}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Share"
            className="p-1.5 rounded-lg hover:bg-slate-200/60 hover:text-slate-700 transition"
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
                strokeWidth={1.8}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Main card body */}
      <div className="p-4 space-y-3">
        <Link href={`/news/${_id}`}>
          <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        {displayImage && (
          <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={displayImage}
              alt={title || "News"}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              unoptimized
            />
          </div>
        )}

        <div className="text-slate-500 text-xs sm:text-sm leading-relaxed">
          {details ? (
            <>
              {details.length > 200 ? `${details.slice(0, 200)}...` : details}
            </>
          ) : null}
        </div>

        <div className="pt-1 flex items-center justify-between">
          <Link
            href={`/news/${_id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-semibold transition-all duration-200 active:scale-95"
          >
            Read More
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Rating and Views */}
          <div className="flex items-center gap-4 text-xs">
            {/* Stars */}
            <div className="flex items-center gap-1.5 bg-amber-50/80 px-2 py-1 rounded-md border border-amber-200/60">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3 h-3 ${
                      i < starsCount ? "fill-amber-400" : "fill-slate-200"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-amber-700 text-[11px]">
                {ratingNumber}
              </span>
            </div>

            {/* Views */}
            <div className="flex items-center gap-1 text-slate-400">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="font-medium">{total_view ?? 0}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
