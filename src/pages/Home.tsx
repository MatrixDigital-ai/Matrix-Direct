import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black leading-[1.1] mb-8">
                Facilitating New Benchmarks Of Excellence In Marketing And Brand Management.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Matrix Direct- Steering brands towards impactful visibility and robust engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-matrix-blue text-white font-bold rounded-lg hover:bg-matrix-accent transition-all flex items-center gap-2">
                  Contact Us <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-matrix-blue flex items-center justify-center p-4">
              <img 
                src="/hero-section.png" 
                alt="Our Clients – Tata, ABP, Taj, Jindal, Keventers, Hutch & more" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                <img 
                  src="/28-year.png" 
                  alt="28 Years of Excellence" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black mb-8">“ Twenty Years Of Excellence ”</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Matrix Direct provides brand management and channel management services and solutions for brands, covering Go-to-Market strategies, brand communication, loyalty programs, audio visuals, conferences, meets, and other allied services.
                </p>
                <p>
                  At Matrix Direct, we pride ourselves on being the silent force behind the success of businesses. With over two decades in the industry, we specialize in experiential business solutions, helping brands navigate the complex waters of marketing, engagement, and digital transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Why choose Matrix Direct?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customized Approach",
                desc: "We recognize the uniqueness of your challenges and align our strategies to your specific objectives, ensuring personalized solutions."
              },
              {
                title: "Client-Centric Philosophy",
                desc: "Your goals are ours. We work as an extension of your team, dedicated to achieving shared success."
              },
              {
                title: "Innovation-Driven",
                desc: "We stay ahead of the curve, employing the latest technologies and trends to give your brand a significant advantage."
              },
              {
                title: "Proven Track Record",
                desc: "Our partnership with industry leaders like Tata Group & ITC speaks volumes about our reliability and proficiency."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all bg-white group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-matrix-blue group-hover:text-white transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-matrix-blue text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-black mb-8 text-white">Our Services</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Go-to-Market strategies",
                  "brand communication",
                  "loyalty programs",
                  "audio visuals",
                  "conferences",
                  "meets",
                  "other allied services"
                ].map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg text-slate-300">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
