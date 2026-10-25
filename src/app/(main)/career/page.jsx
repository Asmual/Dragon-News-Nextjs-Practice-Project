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
    type: "Part-Time / Hybrid",
  },
];

const CareerPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 my-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-[#403F3F]">
          Careers at Dragon News
        </h1>
        <p className="text-lg text-[#706F6F] max-w-2xl mx-auto">
          Help us build the next generation of trustworthy, high-impact journalism.
        </p>
      </div>

      <div className="bg-base-100 border border-base-200 rounded-xl p-8 md:p-10 shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[#403F3F] mb-2">Open Positions</h2>
          <p className="text-sm text-[#706F6F]">
            We are always on the lookout for talented journalists, editors, and engineers.
          </p>
        </div>

        <div className="divide-y divide-base-200">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-bold text-lg text-[#403F3F]">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-[#706F6F] mt-1">
                  <span>{job.department}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span className="badge badge-sm badge-outline">{job.type}</span>
                </div>
              </div>

              <button className="btn bg-[#403F3F] hover:bg-neutral-800 text-white rounded-none px-5 py-2 text-sm self-start md:self-auto font-medium">
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
