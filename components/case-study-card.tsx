import type { LucideIcon } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  sector: string
  icon: LucideIcon
  problem: string
  solution: string
  results: string[]
  testimonial: string
  index: number
}

export default function CaseStudyCard({
  title,
  sector,
  icon: Icon,
  problem,
  solution,
  results,
  testimonial,
  index,
}: CaseStudyCardProps) {
  return (
    <div className="relative">
      {/* Main container */}
      <div className="bg-white border-2 border-gray-200 overflow-hidden">
        {/* Header with geometric design */}
        <div className="relative bg-primary text-white">
          <div className="p-8">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-mono text-xs tracking-wider text-secondary mb-2">
                  CASE_STUDY_{String(index + 1).padStart(2, "0")}
                </div>
                <div className="inline-block bg-secondary text-primary px-3 py-1 font-mono text-xs font-bold mb-4">
                  {sector.toUpperCase()}
                </div>
                <h3 className="font-mono text-xl font-bold tracking-wide">{title}</h3>
              </div>
              <div className="bg-secondary p-4">
                <Icon size={32} className="text-primary" />
              </div>
            </div>
          </div>

          {/* Geometric bottom */}
          <div className="h-4 bg-secondary relative">
            <div className="absolute right-0 top-0 w-0 h-0 border-t-[16px] border-t-primary border-r-[40px] border-r-transparent"></div>
          </div>
        </div>

        {/* Content sections */}
        <div className="p-8 space-y-8">
          {/* Problem */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-red-500 mr-3"></div>
              <h4 className="font-mono text-sm font-bold text-primary tracking-wider">PROBLÉMATIQUE</h4>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <p className="font-mono text-sm text-gray-700 leading-relaxed">{problem}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-blue-500 mr-3"></div>
              <h4 className="font-mono text-sm font-bold text-primary tracking-wider">SOLUTION</h4>
            </div>
            <div className="border-l-4 border-blue-500 pl-6">
              <p className="font-mono text-sm text-gray-700 leading-relaxed">{solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="relative">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-green-500 mr-3"></div>
              <h4 className="font-mono text-sm font-bold text-primary tracking-wider">RÉSULTATS</h4>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <div className="grid gap-2">
                {results.map((result, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 mr-3"></div>
                    <span className="font-mono text-sm text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 p-6 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            <div className="font-mono text-xs text-primary mb-2 tracking-wider">TÉMOIGNAGE_CLIENT</div>
            <p className="font-mono text-sm text-gray-700 italic leading-relaxed">"{testimonial}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}
