export default function Clients() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="section-container text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-6">Clients & Work</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A legacy of trust and excellence with industry leaders.
          </p>
        </div>
      </section>

      {/* Overview of Clients */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black mb-8">Overview of Clients</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-matrix-blue">A. Tata Group Companies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
                  {[
                    "Tata Pipes",
                    "Tata Structura",
                    "Tata Shaktee",
                    "Tata Tiscon",
                    "Tata Steelium",
                    "Galvano",
                    "Tata Astrum",
                    "Tata Astrum Super"
                  ].map((client, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      {client}
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-slate-500 text-sm italic leading-relaxed">
                  We also regularly undertake assignments for various divisions and departments of Tata Steel, such as Corporate Communications, Steel Manufacturing, Engineering C Projects, HRM, TQM, RCD, Safety, and Procurement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-slate-400 uppercase tracking-widest">Other Tata Group Companies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
                  {[
                    "Tata BlueScope",
                    "Tata Metaliks",
                    "Tata Housing - 88 East",
                    "Tata International-Tata Stryder",
                    "TMILL",
                    "JCAPCPL",
                    "Tata Bearings"
                  ].map((client, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      {client}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-matrix-blue">B. Other Brands/Companies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
                  {[
                    "Taj",
                    "Jindal",
                    "Keventers",
                    "Aditya Birla - Essel Mining",
                    "Lafarge India",
                    "ABP Limited – The Telegraph",
                    "ITC Limited – Personal Care Division",
                    "Hutch",
                    "Hindustan Times",
                    "Peerless",
                    "West Bengal Tourism Development Corporation",
                    "Government of Odisha",
                    "Government of West Bengal"
                  ].map((client, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-slate-400 rounded-full" />
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:sticky lg:top-32 lg:col-span-2">
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/client-overview.png" 
                alt="Client Overview" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Focused Initiatives */}
      <section className="bg-slate-50">
        <div className="section-container">
          <h2 className="text-4xl font-black mb-12 text-center">Consumer Focused Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Home building Centre",
              "Home decor service",
              "Plumbing Solutions",
              "Readybuild Centre",
              "Store Launch",
              "Rainwater Harvesting Campaign",
              "Arsenic Poisoning Awareness Campaign",
              "Building India Essay Competition",
              "‘Disha’ Career Counselling Workshops",
              "ABP-The Telegraph - TTIS",
              "Dental Camps"
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-all">
                <p className="font-bold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Activation Initiatives */}
      <section className="section-container">
        <h2 className="text-4xl font-black mb-12 text-center">Brand Activation Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Pepsi Puja Promotions",
            "Vivel Facewash Launch",
            "Mall Activation Event",
            "Onground Activity",
            "Puja Bonus",
            "Product Launch",
            "Amusement Parks",
            "Customer Meet",
            "Mobile service",
            "Dinosaur Park"
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-lg transition-all">
              <p className="font-bold text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loyalty and Relationship Programs */}
      <section className="bg-matrix-blue text-white">
        <div className="section-container">
          <h2 className="text-4xl font-black mb-12 text-center text-white">Loyalty and Relationship Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Steel Junction Privileges",
              "Tata Pipes Parivaar",
              "Tata Tiscon Parivaar",
              "Tata Shaktee Parivaar",
              "Tata Agrico Parivaar",
              "Tata Tiscon Mason Loyalty Program",
              "Tata Shaktee Star Club Dealer Loyalty Program",
              "Tata Steelium Advantage Plus Relationship Program",
              "Tata Shaktee Fabricators Loyalty Program",
              "Tata Pipes Plumbers Loyalty Program",
              "Tata Tiscon Atoot Rishtey Dealer Loyalty Program",
              "Tata Tiscon Influencer Relationship Program"
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                <p className="font-bold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}