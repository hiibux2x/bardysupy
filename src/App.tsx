import React, { useState } from 'react';
import BlobBackground from './components/BlobBackground';
import { 
  Smartphone, 
  Utensils, 
  Zap, 
  Sparkles, 
  Star, 
  Award, 
  Shield, 
  ArrowRight, 
  Mail, 
  Check, 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Percent 
} from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'food' | 'data'>('food');

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-x-hidden selection:bg-mint selection:text-dark-green">
      {/* Moving organic background blobs */}
      <BlobBackground />

      {/* --- NAVIGATION BAR --- */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-extrabold text-primary-green tracking-tight">
            bardysupy<span className="text-dark-green font-light">.ng</span>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-widest bg-mint text-primary-green px-2.5 py-1 rounded-full border border-primary-green/10">
            Super App
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-dark-green/80">
          <a href="#services" className="hover:text-primary-green transition-colors">Services</a>
          <a href="#features" className="hover:text-primary-green transition-colors">Why Bardysupy</a>
          <a href="#how-it-works" className="hover:text-primary-green transition-colors">How It Works</a>
          <a href="#waitlist" className="hover:text-primary-green transition-colors">Join Waitlist</a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="#waitlist" 
            className="btn-flat text-xs font-bold px-5 py-2.5 bg-primary-green text-white rounded-xl hover:bg-dark-green transition-all shadow-md shadow-primary-green/10 text-center"
          >
            Request Access
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Hero Copy (Left) */}
        <section className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 bg-mint/60 border border-primary-green/10 rounded-full px-3.5 py-1.5 text-xs font-bold text-primary-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Introducing the Nigeria Essentials Super App</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark-green leading-[1.1] tracking-tight">
            Your Daily <span className="text-primary-green">Essentials</span>,<br /> All in One App.
          </h1>

          <p className="text-base sm:text-lg text-dark-green/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Stop switching between twenty different apps. Bardysupy brings gourmet food delivery, ice-cold drinks, and instant data or airtime top-ups into one seamless, glassmorphic workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <a
              href="#waitlist"
              className="w-full sm:w-auto btn-flat py-4 px-8 bg-primary-green text-white font-extrabold text-sm rounded-xl hover:bg-dark-green transition-all text-center shadow-lg shadow-primary-green/20"
            >
              Join the Beta Waitlist
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-white/45 backdrop-blur-md border border-white/40 rounded-xl hover:bg-white text-dark-green text-sm font-bold transition-all shadow-sm"
            >
              Explore Our Offerings
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-dark-green/5 max-w-md mx-auto lg:mx-0">
            <div>
              <span className="text-2xl font-black text-primary-green block leading-none">20 Min</span>
              <span className="text-[10px] text-dark-green/50 font-extrabold uppercase tracking-widest mt-1.5 block">Delivery Guarantee</span>
            </div>
            <div>
              <span className="text-2xl font-black text-primary-green block leading-none">5% Off</span>
              <span className="text-[10px] text-dark-green/50 font-extrabold uppercase tracking-widest mt-1.5 block">All Data Top-ups</span>
            </div>
            <div>
              <span className="text-2xl font-black text-primary-green block leading-none">10% Back</span>
              <span className="text-[10px] text-dark-green/50 font-extrabold uppercase tracking-widest mt-1.5 block">First Food Order</span>
            </div>
          </div>
        </section>

        {/* Hero App Showcase (Right) */}
        <section id="services" className="lg:col-span-6 w-full space-y-6">
          <div className="glass-card p-6 md:p-8 border border-white/50 relative overflow-hidden">
            
            {/* Toggle visual previews */}
            <div className="flex bg-mint/30 rounded-xl p-1 mb-6">
              <button
                onClick={() => setActiveTab('food')}
                className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'food' ? 'bg-primary-green text-white shadow-sm' : 'text-dark-green/70 hover:text-dark-green'
                }`}
              >
                <Utensils className="w-4 h-4" />
                <span>Food & Drinks App</span>
              </button>
              <button
                onClick={() => setActiveTab('data')}
                className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'data' ? 'bg-primary-green text-white shadow-sm' : 'text-dark-green/70 hover:text-dark-green'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Airtime & Data App</span>
              </button>
            </div>

            {/* Simulated Mobile Mockup Card inside the landing page */}
            <div className="bg-white/80 rounded-2xl border border-dark-green/5 p-5 shadow-inner">
              {activeTab === 'food' ? (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-extrabold tracking-wider bg-primary-green text-white px-2 py-0.5 rounded uppercase">
                        Cravings & Dining
                      </span>
                      <h3 className="text-base font-extrabold text-dark-green mt-1">Order Fresh Delicacies</h3>
                    </div>
                    <span className="text-xs font-bold text-primary-green">₦ Ready</span>
                  </div>

                  {/* Sample Menu Previews */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-creamy-white/50 rounded-xl border border-dark-green/5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl bg-mint p-1.5 rounded-lg">🍗</span>
                        <div>
                          <p className="text-xs font-bold text-dark-green">Smoky Party Jollof Platter</p>
                          <p className="text-[10px] text-dark-green/60">Includes Grilled Chicken & Sweet Dodo</p>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-primary-green">₦4,500</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-creamy-white/50 rounded-xl border border-dark-green/5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl bg-mint p-1.5 rounded-lg">🍹</span>
                        <div>
                          <p className="text-xs font-bold text-dark-green">Signature Chilled Chapman</p>
                          <p className="text-[10px] text-dark-green/60">Classic cold refreshment mocktail</p>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-primary-green">₦1,800</span>
                    </div>
                  </div>

                  <div className="bg-mint/20 border border-primary-green/10 rounded-xl p-3 text-xs text-dark-green flex items-center justify-between">
                    <span>⚡ Order arrives in less than 25 minutes</span>
                    <strong className="text-primary-green text-[10px] font-black uppercase tracking-wider">LAGOS & ABUJA</strong>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[9px] font-extrabold tracking-wider bg-teal-700 text-white px-2 py-0.5 rounded uppercase">
                        Connectivity
                      </span>
                      <h3 className="text-base font-extrabold text-dark-green mt-1">Instant Network Topup</h3>
                    </div>
                    <span className="text-xs font-bold text-primary-green">⚡ Instant delivery</span>
                  </div>

                  {/* Simulated Mobile inputs */}
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-4 gap-2">
                      <span className="py-2 rounded-lg bg-amber-400 text-slate-950 text-center font-bold text-[10px] shadow-sm">MTN</span>
                      <span className="py-2 rounded-lg bg-red-600 text-white text-center font-bold text-[10px] opacity-60">Airtel</span>
                      <span className="py-2 rounded-lg bg-green-600 text-white text-center font-bold text-[10px] opacity-60">GLO</span>
                      <span className="py-2 rounded-lg bg-teal-700 text-white text-center font-bold text-[10px] opacity-60">9mobile</span>
                    </div>

                    <div className="p-3 bg-creamy-white/50 rounded-xl border border-dark-green/5 text-xs text-dark-green flex justify-between items-center">
                      <div>
                        <p className="font-bold text-dark-green">12GB Monthly Bundle</p>
                        <p className="text-[9px] text-dark-green/50">Validity: 30 Days • Fast 5G Speed</p>
                      </div>
                      <span className="font-extrabold text-primary-green text-right">₦1,500</span>
                    </div>

                    <div className="p-3 bg-creamy-white/50 rounded-xl border border-dark-green/5 text-xs text-dark-green flex justify-between items-center">
                      <div>
                        <p className="font-bold text-dark-green">35GB Mega Surf Bundle</p>
                        <p className="text-[9px] text-dark-green/50">Validity: 30 Days • Unlimited Hotspot</p>
                      </div>
                      <span className="font-extrabold text-primary-green text-right">₦4,000</span>
                    </div>
                  </div>

                  <div className="bg-mint/20 border border-primary-green/10 rounded-xl p-3 text-xs text-dark-green text-center font-bold">
                    💰 Receive 5% instant cashback on all network bundles!
                  </div>
                </div>
              )}
            </div>

            {/* Bottom highlight banner */}
            <div className="mt-4 pt-4 border-t border-dark-green/5 flex items-center justify-between text-xs font-semibold text-dark-green/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary-green" /> Secured via Centralized Super-Wallet
              </span>
              <span className="text-primary-green font-bold">100% Secure</span>
            </div>

          </div>
        </section>

      </main>

      {/* --- WHY BARDYSUPY (FEATURES GRID) --- */}
      <section id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-dark-green/5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] tracking-widest uppercase font-extrabold text-primary-green bg-mint px-3.5 py-1.5 rounded-full">
            The Super App Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-green mt-3 tracking-tight">
            Designed for the Fast-Paced Lifestyle
          </h2>
          <p className="text-sm text-dark-green/70 mt-2">
            Why fill your phone storage with multiple separate utility apps when Bardysupy handles everything through one high-performance interface?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="glass-card p-6 border border-white/40 space-y-4">
            <div className="w-10 h-10 bg-mint rounded-xl flex items-center justify-center">
              <Utensils className="w-5 h-5 text-primary-green" />
            </div>
            <h3 className="text-lg font-bold text-dark-green">Gourmet Food Ordering</h3>
            <p className="text-xs text-dark-green/70 leading-relaxed">
              Order smoking-hot party Jollof, spicy Asun, grilled Suya, or chilled Chapman from premium dark kitchens delivered in less than 25 minutes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6 border border-white/40 space-y-4">
            <div className="w-10 h-10 bg-mint rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-green" />
            </div>
            <h3 className="text-lg font-bold text-dark-green">One-Click Airtime & Data</h3>
            <p className="text-xs text-dark-green/70 leading-relaxed">
              Instantly recharge MTN, Airtel, GLO, and 9mobile plans. Our automated API delivery guarantees immediate top-up the second you pay.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6 border border-white/40 space-y-4">
            <div className="w-10 h-10 bg-mint rounded-xl flex items-center justify-center">
              <Percent className="w-5 h-5 text-primary-green" />
            </div>
            <h3 className="text-lg font-bold text-dark-green">Integrated Cashback Engine</h3>
            <p className="text-xs text-dark-green/70 leading-relaxed">
              Every single transaction returns value. Get up to 10% cashbacks automatically credited to your in-app wallet to spend on your next essentials.
            </p>
          </div>

        </div>
      </section>

      {/* --- HOW IT WORKS (SIMPLE TIMELINE) --- */}
      <section id="how-it-works" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-dark-green/5 bg-mint/10 rounded-3xl mb-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] tracking-widest uppercase font-extrabold text-primary-green">
            Simple 3-Step Flow
          </span>
          <h2 className="text-3xl font-extrabold text-dark-green mt-2 tracking-tight">
            How Bardysupy Keeps You Going
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
          
          <div className="space-y-3 px-4">
            <div className="w-12 h-12 bg-primary-green text-white text-lg font-black rounded-full flex items-center justify-center mx-auto shadow-md">
              1
            </div>
            <h3 className="text-base font-bold text-dark-green">Fund Your Secure Super-Wallet</h3>
            <p className="text-xs text-dark-green/70 leading-relaxed max-w-xs mx-auto">
              Add funds easily to your centralized, PIN-protected wallet. No need to input credit card details every time you make a purchase.
            </p>
          </div>

          <div className="space-y-3 px-4">
            <div className="w-12 h-12 bg-primary-green text-white text-lg font-black rounded-full flex items-center justify-center mx-auto shadow-md">
              2
            </div>
            <h3 className="text-base font-bold text-dark-green">Select Your Essential</h3>
            <p className="text-xs text-dark-green/70 leading-relaxed max-w-xs mx-auto">
              Browse hot gourmet foods, beverages, or select from MTN, Airtel, GLO, and 9mobile high-speed internet data bundles.
            </p>
          </div>

          <div className="space-y-3 px-4">
            <div className="w-12 h-12 bg-primary-green text-white text-lg font-black rounded-full flex items-center justify-center mx-auto shadow-md">
              3
            </div>
            <h3 className="text-base font-bold text-dark-green">Instant Delivery & Cashback</h3>
            <p className="text-xs text-dark-green/70 leading-relaxed max-w-xs mx-auto">
              Your data recharges immediately, or your hot platter is assigned to a dispatch rider with automatic cashbacks loaded into your wallet balance.
            </p>
          </div>

        </div>
      </section>

      {/* --- JOIN BETA WAITLIST (INTERACTIVE CTAs & NEWSLETTER) --- */}
      <section id="waitlist" className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 text-center">
        <div className="glass-card p-8 md:p-12 border border-white/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Award className="w-32 h-32 text-primary-green" />
          </div>

          <span className="text-[10px] tracking-widest uppercase font-extrabold text-primary-green bg-mint px-3 py-1 rounded-full">
            Beta Launch Access
          </span>

          <h2 className="text-3xl font-extrabold text-dark-green mt-4 mb-3 tracking-tight">
            Be the First to Experience Bardysupy
          </h2>
          
          <p className="text-xs sm:text-sm text-dark-green/70 max-w-lg mx-auto mb-8 leading-relaxed">
            We are launching invitation-only access to select users in Lagos, Abuja, and Port Harcourt. Sign up with your email to secure your free delivery coupon and 1,000 Naira trial wallet bonus!
          </p>

          {isSubmitted ? (
            <div className="bg-mint/40 border border-primary-green/20 rounded-2xl p-6 text-center animate-scale-in">
              <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="text-base font-extrabold text-dark-green">You're on the list!</h4>
              <p className="text-xs text-dark-green/80 mt-1 max-w-sm mx-auto">
                We've sent an invitation confirmation to <span className="font-bold text-primary-green">{email}</span>. Stay tuned for early access coordinates!
              </p>
              <button 
                onClick={() => { setIsSubmitted(false); setEmail(''); }} 
                className="text-xs text-primary-green font-extrabold mt-4 hover:underline"
              >
                Sign up another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white focus:bg-white text-dark-green font-semibold rounded-xl border border-dark-green/15 focus:border-primary-green focus:ring-1 focus:ring-primary-green px-4 py-3.5 outline-none text-xs transition-all"
                />
                <button
                  type="submit"
                  className="btn-flat py-3.5 px-6 bg-primary-green text-white font-extrabold text-xs rounded-xl hover:bg-dark-green transition-all shadow-md shadow-primary-green/20"
                >
                  Join Waitlist
                </button>
              </div>
              <p className="text-[10px] text-dark-green/50">
                🔒 We protect your data. No spam, unsubscribe anytime.
              </p>
            </form>
          )}

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-dark-green/5 relative z-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-dark-green/50">
          © 2026 Bardysupy.ng. All rights reserved. Delighting food cravings & connectivity demands across Nigeria.
        </p>
        <div className="flex space-x-6 text-xs font-semibold text-dark-green/60">
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Security and Privacy: All information submitted is simulated client-side and treated in full confidentiality."); }} className="hover:text-primary-green">Privacy Policy</a>
          <span>•</span>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("System Info: Bardysupy.ng utilizes custom Glassmorphism style wrappers paired with thin flat action buttons."); }} className="hover:text-primary-green">Terms of Service</a>
          <span>•</span>
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Contact support: Reach out directly via email at invite@bardysupy.ng for partnership coordinates."); }} className="hover:text-primary-green">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
