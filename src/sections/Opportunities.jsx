import SectionWrapper from '../components/layout/SectionWrapper';
import { profile } from '../data/profile';
import { sections, opportunities, readinessMetrics } from '../data/constants';
import { 
  CARD_STYLE, 
  HEADING_H2, 
  SUBTITLE_TEXT 
} from '../config/uiConfig';

export default function Opportunities() {
  return (
    <SectionWrapper id="opportunities" className="bg-[#030712] relative border-t border-white/5">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full radial-glow-blue pointer-events-none z-0" />

      <div className="relative z-10 space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Recruiter Availability Text */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#3B82F6] block font-sora">
                {sections.opportunities.label}
              </span>
              <h2 className={HEADING_H2}>
                {sections.opportunities.title}
              </h2>
              <p className={SUBTITLE_TEXT}>
                {sections.opportunities.subtitle}
              </p>
            </div>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {(opportunities || []).map((badge) => (
                <span 
                  key={badge} 
                  className="px-4 py-2 bg-white/5 text-zinc-300 font-inter text-xs rounded-xl border border-white/10 flex items-center space-x-2 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Operational Readiness Card */}
          <div className="lg:col-span-5 flex items-center">
            <div className={`w-full ${CARD_STYLE} relative overflow-hidden flex flex-col justify-between h-full p-6 text-left`}>
              
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold font-sora text-zinc-400 uppercase tracking-wider">Status Dashboard</span>
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Active</span>
                  </div>
                </div>

                {/* Status Content */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Availability Status</span>
                  <span className="text-lg font-bold font-sora text-white block">
                    {(profile.availabilityStatus || "").toUpperCase()}
                  </span>
                </div>

                {/* Skills/Readiness Metrics */}
                <div className="space-y-3.5 pt-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block border-t border-white/10 pt-3">Readiness Metrics</span>
                  {(readinessMetrics || []).map((metric) => (
                    <div key={metric.name} className="space-y-1">
                      <div className="flex justify-between text-xs font-medium text-zinc-300 font-inter">
                        <span>{metric.name}</span>
                        <span className="font-mono text-zinc-400">{metric.level}</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full" 
                          style={{ width: metric.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </SectionWrapper>
  );
}
