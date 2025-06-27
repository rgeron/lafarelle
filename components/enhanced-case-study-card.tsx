import type { LucideIcon } from "lucide-react"
import GeometricBackground from "./geometric-background"

interface EnhancedCaseStudyCardProps {
  title: string
  sector: string
  icon: LucideIcon
  problem: string
  solution: string
  results: string[]
  testimonial: string
  index: number
}

export default function EnhancedCaseStudyCard({
  title,
  sector,
  icon: Icon,
  problem,
  solution,
  results,
  testimonial,
  index,
}: EnhancedCaseStudyCardProps) {
  return (
    <div className="relative">
      {/* Main container with complex geometric design */}
      <div className="bg-white border-4 border-primary relative overflow-hidden">
        <GeometricBackground variant="card" />

        {/* Header with diagonal cut design */}
        <div className="relative bg-primary text-white">
          <div className="p-8 relative z-10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {/* Case study identifier */}
                <div className="inline-block bg-secondary text-primary px-4 py-1 font-mono text-xs font-bold mb-4">
                  CASE_STUDY_{String(index + 1).padStart(2, "0")}
                </div>

                {/* Sector badge with unique shape */}
                <div className="relative inline-block mb-4">
                  <div className="bg-white text-primary px-6 py-2 font-mono text-sm font-bold">
                    {sector.toUpperCase()}
                  </div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[12px] border-l-secondary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent"></div>
                </div>

                <h3 className="font-mono text-xl font-bold tracking-wide leading-tight">{title}</h3>
              </div>

              {/* Icon with geometric frame */}
              <div className="relative ml-6">
                <div className="w-20 h-20 bg-secondary flex items-center justify-center relative">
                  <Icon size={36} className="text-primary" />
                  {/* Corner cuts */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-r-[8px] border-r-transparent border-t-[8px] border-t-primary"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[8px] border-l-transparent border-b-[8px] border-b-primary"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Complex bottom geometric design */}
          <div className="relative h-8">
            <div className="absolute inset-0 bg-secondary"></div>
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[32px] border-t-primary border-r-[60px] border-r-transparent"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-primary border-l-[60px] border-l-transparent"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[16px] border-b-white"></div>
          </div>
        </div>

        {/* Content sections with enhanced design */}
        <div className="p-8 space-y-8">
          {/* Problem section */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-red-500 mr-4 relative">
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[6px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
              </div>
              <h4 className="font-mono text-sm font-bold text-primary tracking-wider">PROBLEMATIQUE_CLIENT</h4>
            </div>
            <div className="relative bg-red-50 p-6 border-l-4 border-red-500">
              <p className="font-mono text-sm text-gray-700 leading-relaxed">{problem}</p>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500"></div>
            </div>
          </div>

          {/* Solution section */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-blue-500 mr-4 relative">
                <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-r-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
              </div>
              <h4 className="font-mono text-sm font-bold text-primary tracking-wider">SOLUTION_IMPLEMENTEE</h4>
            </div>
            <div className="relative bg-blue-50 p-6 border-l-4 border-blue-500">
              <p className="font-mono text-sm text-gray-700 leading-relaxed">{solution}</p>
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-blue-500"></div>
            </div>
          </div>

          {/* Results section with enhanced design */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-green-500 mr-4 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white"></div>
              </div>
              <h4 className="font-mono text-sm font-bold text-primary tracking-wider">RESULTATS_OBTENUS</h4>
            </div>
            <div className="relative bg-green-50 p-6 border-l-4 border-green-500">
              <div className="grid gap-3">
                {results.map((result, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 mr-4 relative">
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-[3px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
                    </div>
                    <span className="font-mono text-sm text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 bg-green-500"></div>
            </div>
          </div>

          {/* Testimonial with unique design */}
          <div className="relative bg-gray-100 p-8">
            <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
            <div className="absolute top-2 left-0 w-full h-px bg-primary"></div>

            <div className="font-mono text-xs text-primary mb-4 tracking-wider flex items-center">
              <div className="w-2 h-2 bg-secondary mr-2"></div>
              TEMOIGNAGE_CLIENT
            </div>
            <p className="font-mono text-sm text-gray-700 italic leading-relaxed">"{testimonial}"</p>

            {/* Quote marks as geometric elements */}
            <div className="absolute top-6 right-6 w-6 h-6 border-4 border-secondary opacity-20"></div>
            <div className="absolute bottom-6 left-6 w-4 h-4 border-2 border-primary opacity-20"></div>
          </div>
        </div>

        {/* Bottom accent with complex geometry */}
        <div className="relative h-4 bg-primary">
          <div className="absolute top-0 left-0 w-0 h-0 border-b-[16px] border-b-secondary border-r-[30px] border-r-transparent"></div>
          <div className="absolute top-0 right-0 w-0 h-0 border-b-[16px] border-b-secondary border-l-[30px] border-l-transparent"></div>
        </div>
      </div>
    </div>
  )
}
