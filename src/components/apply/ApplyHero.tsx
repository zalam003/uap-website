import { GraduationCap, Users, Award, Clock } from 'lucide-react'

export default function ApplyHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <GraduationCap className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Admission Open for 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Start Your Journey to
            <span className="block text-yellow-400">Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-8 mb-12 max-w-3xl mx-auto opacity-90">
            Join UAP&rsquo;s community of innovators, leaders, and changemakers. 
            Apply now for our undergraduate and graduate programs.
          </p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">25+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">15K+</div>
              <div className="text-sm opacity-80">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">500+</div>
              <div className="text-sm opacity-80">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-sm opacity-80">Programs</div>
            </div>
          </div>
          
          {/* Status badge */}
          <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/30">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-100 font-medium">Applications Currently Open</span>
          </div>
        </div>
      </div>
    </section>
  )
}
