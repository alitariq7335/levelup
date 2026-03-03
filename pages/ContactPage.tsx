
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-40">
            <h3 className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px] mb-8">Comms Channel</h3>
            <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
              OPEN AN <br /> <span className="text-blue-600">UPLINK.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-16 max-w-lg">
              Our central operations are located in Lahore, Pakistan, serving visionaries globally via our high-bandwidth digital terminals.
            </p>

            <div className="space-y-16">
              <div className="group">
                <h4 className="text-blue-600 font-black text-[9px] uppercase tracking-[0.4em] mb-4 group-hover:tracking-[0.6em] transition-all">Central Hub</h4>
                <p className="text-3xl font-black uppercase tracking-tight">Gulberg III, Lahore</p>
                <p className="text-gray-500 mt-2 font-bold uppercase text-xs tracking-widest">Protocol Floor 04, Tech Plaza</p>
              </div>
              <div className="group">
                <h4 className="text-blue-600 font-black text-[9px] uppercase tracking-[0.4em] mb-4 group-hover:tracking-[0.6em] transition-all">Frequency</h4>
                <p className="text-3xl font-black uppercase tracking-tight">hello@levelupsol.com.pk</p>
                <p className="text-gray-500 mt-2 font-bold uppercase text-xs tracking-widest">Always Online // PKT / GMT / EST</p>
              </div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-white/5 flex items-center space-x-6">
               <span className="text-[10px] font-black tracking-[0.4em] text-gray-600 uppercase">Secure Link Status</span>
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[4rem] border-white/10 relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <h2 className="text-2xl font-black uppercase tracking-widest mb-12 text-center">Transmission Terminal</h2>
            
            <form className="space-y-10 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-widest text-blue-500">Identifier</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-blue-600 focus:outline-none transition-all placeholder:text-gray-700" 
                    placeholder="Subject Name" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-black uppercase tracking-widest text-blue-500">Terminal Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-blue-600 focus:outline-none transition-all placeholder:text-gray-700" 
                    placeholder="email@node.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-widest text-blue-500">Operation Category</label>
                <select className="w-full bg-white/5 border-b border-white/10 p-4 focus:border-blue-600 focus:outline-none transition-all appearance-none text-gray-500 font-bold uppercase text-xs tracking-widest">
                  <option className="bg-zinc-900">Total Digital Transformation</option>
                  <option className="bg-zinc-900">Search Dominance Expansion</option>
                  <option className="bg-zinc-900">Social Narrative Deployment</option>
                  <option className="bg-zinc-900">E-Commerce Velocity Scaling</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-widest text-blue-500">Encrypted Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 p-6 rounded-3xl focus:border-blue-600 focus:outline-none transition-all placeholder:text-gray-700" 
                  placeholder="Details of your vision..."
                ></textarea>
              </div>

              <button className="group relative w-full py-8 bg-blue-600 rounded-[3rem] font-black uppercase tracking-[0.5em] text-xs overflow-hidden transition-all hover:bg-white hover:text-black shadow-2xl">
                <span className="relative z-10">Transmit Inquiry</span>
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </form>
            
            <div className="mt-12 text-center text-[8px] font-bold text-gray-700 uppercase tracking-[0.3em]">
              All transmissions are secured via AES-256 equivalent protocol
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
