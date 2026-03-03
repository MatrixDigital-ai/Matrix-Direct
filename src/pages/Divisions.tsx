import { CheckCircle2 } from 'lucide-react';

export default function Divisions() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="section-container text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-6">Our Divisions</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Specialized solutions for every dimension of brand growth and engagement.
          </p>
        </div>
      </section>

      {/* Matrix Events */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Matrix Events</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Delivering bespoke events that resonate with your brand’s ethos and audience’s expectations.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4">Corporate Events</h3>
                <p className="text-slate-600 leading-relaxed">
                  Brand Launches, Award Ceremonies, Customer Meets, Milestone Celebrations, Channel Partner Meets, Conferences, Seminars, Conventions, Exhibitions, Expositions and more.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4">Public & Social Events</h3>
                <p className="text-slate-600 leading-relaxed">
                  Musical Concerts, Art Exhibitions & Festivals, Socio - Cultural Celebrations and more.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4">AV Services</h3>
                <p className="text-slate-600 leading-relaxed">
                  Event AVs, Corporate AVs, Product AVs, Brand AVs, Social Media Videos, Documentaries, Motivational Films, Films for social occasions, etc.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4">Event Support</h3>
                <p className="text-slate-600 leading-relaxed">
                  Graphic Design, Content Curation, Audio - Visuals & Films, Web Application Development, Augmented Reality, Virtual Reality, Social Media Management, Travel Support, Printing & Fabrication, Event Production & Execution and more.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-4">Celebrity Management</h3>
                <p className="text-slate-600 leading-relaxed">
                  Motivational Speakers, Subject-matter Experts, and Celebrity Performers & Artistes.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/events.png" 
              alt="Matrix Events" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Matrix Rewards */}
      <section className="bg-slate-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/rewards.png" 
                  alt="Matrix Rewards" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black mb-6">Matrix Rewards</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Building and managing fruitful, long-lasting relationships through strategic CRM and precise stakeholder management.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold uppercase tracking-widest text-slate-400 mb-6">Our services include</h3>
                {[
                  "Design, management and Implementation of Loyalty Programs",
                  "Development of Engagement Strategies",
                  "Stakeholder Communication and Updates",
                  "Feedback and Review Management",
                  "Feedback Collection and Analysis",
                  "Customer Satisfaction Enhancement"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-lg text-slate-600">
                    <CheckCircle2 size={20} className="text-matrix-blue" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix Digital */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">Matrix Digital</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Pioneering digital excellence with the power of Data analytics , AI and forward-thinking marketing strategies.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <h3 className="col-span-full text-lg font-bold uppercase tracking-widest text-slate-400 mb-4">Our services Include</h3>
              {[
                "Big Data Analytics",
                "Data Warehousing",
                "Data Mining",
                "Web Development",
                "AI-Driven Solutions",
                "Digital Marketing",
                "Content Creation and Management",
                "Email Marketing"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 text-lg text-slate-600">
                  <div className="w-1.5 h-1.5 bg-matrix-blue rounded-full" />
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/digital.png" 
              alt="Matrix Digital" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
