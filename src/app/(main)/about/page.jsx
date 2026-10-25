export const metadata = {
  title: "About Us - Dragon News",
  description: "Learn more about Dragon News - Journalism Without Fear or Favour",
};

const AboutPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 my-12 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-[#403F3F]">
          About Dragon News
        </h1>
        <p className="text-lg text-[#706F6F] max-w-2xl mx-auto">
          Delivering reliable, unbiased, and timely news from around the world.
        </p>
      </div>

      <div className="bg-base-100 border border-base-200 rounded-xl p-8 md:p-10 shadow-sm space-y-6 text-[#706F6F] leading-relaxed">
        <div>
          <h2 className="text-2xl font-bold text-[#403F3F] mb-3">
            Our Mission & Commitment
          </h2>
          <p>
            Dragon News was founded on a simple yet unyielding principle:{" "}
            <span className="font-semibold text-[#403F3F]">
              Journalism Without Fear or Favour
            </span>
            . In a world saturated with disinformation and rapid news cycles, our
            duty is to provide verified facts, insightful analysis, and stories that
            matter to everyday people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#F3F3F3] p-5 rounded-lg space-y-2">
            <h3 className="font-bold text-lg text-[#403F3F]">Integrity</h3>
            <p className="text-sm">
              We uphold the highest journalistic standards with strict fact-checking
              and honest reporting.
            </p>
          </div>
          <div className="bg-[#F3F3F3] p-5 rounded-lg space-y-2">
            <h3 className="font-bold text-lg text-[#403F3F]">Independence</h3>
            <p className="text-sm">
              Editorial decisions are free from commercial or political influence,
              ensuring objective coverage.
            </p>
          </div>
          <div className="bg-[#F3F3F3] p-5 rounded-lg space-y-2">
            <h3 className="font-bold text-lg text-[#403F3F]">Inclusivity</h3>
            <p className="text-sm">
              We give voice to diverse perspectives, covering politics, sports,
              culture, science, and more.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-base-200">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-3">Our Global Reach</h2>
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
