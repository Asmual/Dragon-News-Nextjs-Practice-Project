export const metadata = {
  title: "About Us - Dragon News",
  description: "Learn more about Dragon News - Journalism Without Fear or Favour",
};

const AboutPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 my-6 space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200/60">
          Our Story
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          About Dragon News
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Delivering reliable, unbiased, and timely news from around the world.
        </p>
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5 text-slate-600 text-xs sm:text-sm leading-relaxed">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
            Our Mission & Commitment
          </h2>
          <p>
            Dragon News was founded on a simple yet unyielding principle:{' '}
            <span className="font-semibold text-rose-600">
              Journalism Without Fear or Favour
            </span>
            . In a world saturated with disinformation and rapid news cycles, our
            duty is to provide verified facts, insightful analysis, and stories that
            matter to everyday people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1.5 hover:shadow-xs transition">
            <h3 className="font-bold text-xs sm:text-sm text-slate-800">Integrity</h3>
            <p className="text-[11px] sm:text-xs text-slate-500">
              We uphold the highest journalistic standards with strict fact-checking
              and honest reporting.
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1.5 hover:shadow-xs transition">
            <h3 className="font-bold text-xs sm:text-sm text-slate-800">Independence</h3>
            <p className="text-[11px] sm:text-xs text-slate-500">
              Editorial decisions are free from commercial or political influence,
              ensuring objective coverage.
            </p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1.5 hover:shadow-xs transition">
            <h3 className="font-bold text-xs sm:text-sm text-slate-800">Inclusivity</h3>
            <p className="text-[11px] sm:text-xs text-slate-500">
              We give voice to diverse perspectives, covering politics, sports,
              culture, science, and more.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <h2 className="text-base sm:text-lg font-bold text-slate-800 mb-2">Our Global Reach</h2>
          <p>
            With correspondents across the globe and a 24/7 digital newsroom,
            Dragon News brings breaking headlines, investigative investigations,
            and in-depth multimedia journalism directly to millions of readers.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
