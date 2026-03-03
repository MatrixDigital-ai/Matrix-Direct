import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="section-container text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-black mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Get in touch with us to discuss your next big project.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-black mb-12">Get in Touch</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-matrix-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    41B/5 Gariahat Road, Jadavpur,<br />
                    Kolkata 700068
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-matrix-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">E-mail</h3>
                  <p className="text-slate-600 leading-relaxed">
                    matrixdirectcommunications@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-matrix-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-slate-600 leading-relaxed">
                    6290868179
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-8">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-matrix-blue/20 focus:border-matrix-blue transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-matrix-blue/20 focus:border-matrix-blue transition-all"
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-matrix-blue/20 focus:border-matrix-blue transition-all"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-matrix-blue/20 focus:border-matrix-blue transition-all"
                ></textarea>
                <button className="w-full py-4 bg-matrix-blue text-white font-bold rounded-lg hover:bg-matrix-accent transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
