import { ArrowRight, Sparkles, CheckCircle2, Zap, Layers, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="bg-indigo-600 text-white p-1.5 rounded-lg text-sm">
              <Zap className="w-4 h-4" />
            </span> 
            NexusAI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
          <a 
            href="#pricing" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Get Started
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Introducing NexusAI 2.0
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Automate Your Workflow with <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300">
            Next-Gen AI Agents
          </span>
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Build, scale, and ship your software product 10x faster using our pre-built automation agents and modern visual workflows.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#pricing" 
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#features" 
            className="border border-slate-800 hover:bg-slate-900 text-slate-300 px-6 py-3 rounded-xl font-semibold transition"
          >
            Explore Features
          </a>
        </div>

        {/* Mockup UI Box */}
        <div className="mt-14 p-3 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-2xl">
          <div className="bg-slate-950 rounded-xl aspect-video border border-slate-800/80 flex flex-col items-center justify-center p-8 text-slate-500 text-sm">
            <Layers className="w-12 h-12 text-indigo-500 mb-3 animate-pulse" />
            <p className="font-mono text-slate-400">[ Interactive AI Dashboard UI Preview ]</p>
          </div>
        </div>
      </section>

      {/* BENTO GRID FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Engineered for Velocity</h2>
          <p className="text-slate-400">Everything you need to deploy production-ready AI tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition">
            <Zap className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Real-Time Data Streams</h3>
            <p className="text-slate-400 text-sm">
              Process complex natural language requests with sub-100ms latency using our global edge orchestration pipeline.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition">
            <ShieldCheck className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
            <p className="text-slate-400 text-sm">SOC-2 compliant end-to-end data encryption by default.</p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Simple, Transparent Pricing</h2>
          <p className="text-slate-400">Choose the plan that fits your growth stage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Starter Plan */}
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
            <h3 className="text-lg font-semibold text-slate-300">Starter</h3>
            <div className="my-4">
              <span className="text-4xl font-extrabold text-white">$19</span>
              <span className="text-slate-500"> / month</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-400 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Up to 5 AI Agents</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 50,000 API Requests</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Community Support</li>
            </ul>
            <button className="w-full py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 font-semibold transition text-sm">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-indigo-950/40 to-slate-900/40 border border-indigo-500/50 relative">
            <span className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Popular
            </span>
            <h3 className="text-lg font-semibold text-indigo-300">Pro Developer</h3>
            <div className="my-4">
              <span className="text-4xl font-extrabold text-white">$49</span>
              <span className="text-slate-500"> / month</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Unlimited AI Agents</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> 500,000 API Requests</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-indigo-400" /> Priority 24/7 Support</li>
            </ul>
            <button className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition text-sm shadow-lg shadow-indigo-600/30">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 py-10 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} NexusAI Template. All rights reserved.</p>
      </footer>

    </div>
  );
}