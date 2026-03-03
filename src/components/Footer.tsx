import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-matrix-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img 
              src="/logo.png" 
              alt="Matrix Direct Logo" 
              className="h-16 w-auto mb-6 drop-shadow-lg"
            />
            <h3 className="text-xl font-bold mb-6 sr-only">Matrix Direct</h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Steering brands towards impactful visibility and robust engagement. 
              Specializing in experiential business solutions for over two decades.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-slate-300 transition-colors">Home</Link></li>
              <li><Link to="/divisions" className="hover:text-slate-300 transition-colors">Our Divisions</Link></li>
              <li><Link to="/clients" className="hover:text-slate-300 transition-colors">Clients & Work</Link></li>
              <li><Link to="/awards" className="hover:text-slate-300 transition-colors">Awards & Recognition</Link></li>
              <li><Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Contact</h4>
            <address className="not-italic text-sm text-slate-300 space-y-2">
              <p>41B/5 Gariahat Road, Jadavpur,</p>
              <p>Kolkata 700068</p>
              <p className="pt-4">E-mail: matrixdirectcommunications@gmail.com</p>
              <p>Phone: 6290868179</p>
            </address>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Matrix Direct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
