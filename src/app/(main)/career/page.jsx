export const metadata = {
  title: "Careers - Dragon News",
  description: "Join the Dragon News team and shape the future of modern journalism.",
};

const jobOpenings = [
  {
    id: 1,
    title: "Senior Investigative Journalist",
    department: "Editorial",
    location: "Dhaka, Bangladesh / Remote",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Digital Newsroom Sub-Editor",
    department: "Copy & Publishing",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
  },
  {
    id: 3,
    title: "Frontend Engineer (Next.js / React)",
    department: "Engineering & Product",
    location: "Remote",
    type: "Full-Time",
  },
  {
    id: 4,
    title: "Multimedia Photojournalist & Video Editor",
    department: "Media Production",
    location: "Dhaka, Bangladesh",
    type: "Hybrid",
  },
];

const CareerPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 my-6 space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60">
          We are Hiring
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Careers at Dragon News
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Help us build the next generation of trustworthy, high-impact journalism.
        </p>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-800">Available Roles</h2>
          <p className="text-xs text-slate-400">
            Explore active opportunities across our journalism and tech departments.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-800 group-hover:text-rose-600 transition">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mt-1">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium text-[10px]">
                    {job.type}
                  </span>
                </div>
              </div>

              <button className="btn min-h-0 h-8 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs hover:shadow-slate-900/15 border-none transition-all duration-200 active:scale-95 self-start sm:self-auto">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CareerPage;
