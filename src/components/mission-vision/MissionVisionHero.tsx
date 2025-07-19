import { Eye, Target, Compass, Star } from 'lucide-react'

export default function MissionVisionHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Compass className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Our Guiding Principles</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Vision &
            <span className="block text-yellow-400">Mission</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-8 mb-12 max-w-3xl mx-auto opacity-90">
            Discover the foundational principles that drive UAP's commitment to 
            excellence in education and our vision for the future of learning.
          </p>
          
          {/* Key principles preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Eye className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-sm font-medium">Vision</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Target className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-sm font-medium">Mission</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-sm font-medium">Values</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Compass className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-sm font-medium">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
