import { Trophy, Award, Star } from 'lucide-react';

export default function Awards() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="section-container text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-6">Awards & Recognition</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Celebrating excellence and industry-leading achievements.
          </p>
        </div>
      </section>

      {/* Main Awards */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-matrix-blue text-white rounded-2xl flex items-center justify-center">
                <Trophy size={32} />
              </div>
              <h2 className="text-3xl font-black">WOW Awards Asia</h2>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              For Matrix, it was a great honor to be recognized for excellence in event management at the prestigious 'WOW Awards Asia' in the categories 'Industry/Association Convention of the Year' and 'Brand Association with a Business Platform'.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-slate-100 text-matrix-blue rounded-2xl flex items-center justify-center">
                <Award size={32} />
              </div>
              <h2 className="text-3xl font-black">AIMA & TATA Awards</h2>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              We have also won AIMA for Inspiring Loyalty Programs and many more honorable TATA awards.
            </p>
          </div>
          
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/awards.png" 
              alt="Awards & Recognition" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Specific Recognition */}
      <section className="bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="text-matrix-blue mb-6">
                <Star size={40} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-black mb-6">ACEF Asian Leaders Awards 2019</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tata Astrum Super wins award for Excellence in Rural Marketing Retail Communication at the 8th ACEF Asian Leaders Awards 2019!
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="text-matrix-blue mb-6">
                <Star size={40} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-black mb-6">Future of Retail Summits & Awards 2019</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tata Astrum Super won another award for New Brand Lauch in Rural Markets at 2nd Edition - Future of Retail Summits & Awards 2019!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
