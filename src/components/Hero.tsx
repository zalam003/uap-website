'use client'

import Link from 'next/link'
import { ArrowRight, Play, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowVideo(false)
      }
    }

    if (showVideo) {
      document.addEventListener('keydown', handleEscape)
      // Prevent background scrolling
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [showVideo])

  return (
    <>
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
              who will shape tomorrow&rsquo;s world.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/apply" className="btn btn-primary text-lg px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-xl transform hover:scale-105 transition-all">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button 
                onClick={() => setShowVideo(true)}
                className="btn btn-outline text-lg px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold shadow-xl transform hover:scale-105 transition-all"
              >
                <Play className="mr-2 h-5 w-5" />
                Virtual Tour
              </button>
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

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="relative w-full max-w-6xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Video container */}
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/nzTSBIlwCjk?autoplay=1&rel=0&modestbranding=1"
                  title="UAP Virtual Tour"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Video info with close button */}
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      University of Asia Pacific - Virtual Tour
                    </h3>
                    <p className="text-gray-600">
                      Take a virtual tour of our beautiful campus and discover the facilities, 
                      academic buildings, and vibrant student life at UAP.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowVideo(false)}
                    className="ml-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                    aria-label="Close video"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Action buttons */}
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="btn btn-secondary px-6 py-2 text-sm"
                  >
                    Back to Home
                  </button>
                  <Link
                    href="/apply"
                    className="btn btn-primary px-6 py-2 text-sm"
                    onClick={() => setShowVideo(false)}
                  >
                    Apply Now
                  </Link>
                  <a
                    href="https://youtu.be/nzTSBIlwCjk?si=VKC93AZ9oYi4-H25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline px-6 py-2 text-sm"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
            
            {/* Click hint */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              Click outside the video or press the X to close
            </div>
          </div>
        </div>
      )}
    </>
  )
}
