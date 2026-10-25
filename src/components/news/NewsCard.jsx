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
    <article className="border border-base-200 rounded-lg overflow-hidden bg-base-100 shadow-sm hover:shadow-md transition">
      {/* Top author bar */}
      <div className="bg-[#F3F3F3] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 relative flex-shrink-0">
            <Image
              src={authorImage}
              alt={author?.name || "Author"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h5 className="font-semibold text-sm text-[#403F3F]">
              {author?.name || "Awlad Hossain"}
            </h5>
            <p className="text-xs text-[#706F6F]">
              {author?.published_date
                ? new Date(author.published_date).toISOString().split("T")[0]
                : "2025-08-21"}
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-3 text-[#706F6F]">
          <button
            type="button"
            aria-label="Bookmark"
            className="hover:text-primary transition cursor-pointer"
          >
            <svg
              className="w-5 h-5"
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
            className="hover:text-primary transition cursor-pointer"
          >
            <svg
              className="w-5 h-5"
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
      <div className="p-5 space-y-4">
        <Link href={`/news/${_id}`}>
          <h3 className="text-xl font-bold text-[#403F3F] leading-snug hover:text-primary transition cursor-pointer">
            {title}
          </h3>
        </Link>

        {displayImage && (
          <div className="relative w-full h-64 rounded-md overflow-hidden bg-gray-100">
            <Image
              src={displayImage}
              alt={title || "News"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div className="text-[#706F6F] text-sm leading-relaxed">
          {details ? (
            <>
              {details.length > 250 ? `${details.slice(0, 250)}...` : details}{" "}
              <Link
                href={`/news/${_id}`}
                className="text-[#FF8C47] font-semibold hover:underline inline-block ml-1"
              >
                Read More
              </Link>
            </>
          ) : (
            <Link
              href={`/news/${_id}`}
              className="text-[#FF8C47] font-semibold hover:underline"
            >
              Read More
            </Link>
          )}
        </div>

        <div className="border-t border-base-200 my-2"></div>

        {/* Footer info: Rating and Views */}
        <div className="flex items-center justify-between text-sm pt-1">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-[#FF8C47]">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < starsCount ? "fill-[#FF8C47]" : "fill-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-[#403F3F]">
              {ratingNumber}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-[#706F6F]">
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
    </article>
  );
};

export default NewsCard;
