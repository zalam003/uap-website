import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/front_entrance.jpg)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Excellence in{' '}
            <span className="text-yellow-400 drop-shadow-lg">Education</span>{' '}
            Since 1996
          </h1>
          <p className="mt-6 text-xl md:text-2xl leading-8 max-w-3xl mx-auto mb-10 drop-shadow-md">
            University of Asia Pacific is a leading institution committed to providing 
            world-class education, fostering innovation, and developing future leaders 
            who will shape tomorrow's world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/apply" className="btn btn-primary text-lg px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-xl transform hover:scale-105 transition-all">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="https://youtu.be/nzTSBIlwCjk?si=VKC93AZ9oYi4-H25" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold shadow-xl transform hover:scale-105 transition-all"
            >
              <Play className="mr-2 h-5 w-5" />
              Virtual Tour
            </Link>
          </div>
        </div>
      </div>
      
      {/* Statistics Section - Floating Cards */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          <div className="bg-white/90 backdrop-blur-sm text-center p-4 rounded-xl shadow-xl border border-white/20">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600">25+</div>
            <div className="text-xs sm:text-sm text-secondary-600 font-medium">Years of Excellence</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-center p-4 rounded-xl shadow-xl border border-white/20">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600">15,000+</div>
            <div className="text-xs sm:text-sm text-secondary-600 font-medium">Students</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-center p-4 rounded-xl shadow-xl border border-white/20">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600">500+</div>
            <div className="text-xs sm:text-sm text-secondary-600 font-medium">Faculty Members</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm text-center p-4 rounded-xl shadow-xl border border-white/20">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600">50+</div>
            <div className="text-xs sm:text-sm text-secondary-600 font-medium">Programs</div>
          </div>
        </div>
      </div>
    </section>
  )
}
