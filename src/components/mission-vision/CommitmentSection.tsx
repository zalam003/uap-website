import { Compass, Users, Globe, Award, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const commitments = [
  {
    icon: Users,
    title: "Faculty Excellence",
    description: "Maintaining highly qualified and strongly motivated faculty members who are leaders in their fields",
    achievements: [
      "PhD qualified faculty from top universities",
      "Active research and publication",
      "Industry-academia collaboration"
    ]
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Ensuring our graduates meet international standards and can compete globally",
    achievements: [
      "UGC approved curricula",
      "International accreditations",
      "Global employment opportunities"
    ]
  },
  {
    icon: Award,
    title: "Societal Impact",
    description: "Creating meaningful impact on society through education, research, and community engagement",
    achievements: [
      "Community development programs",
      "Applied research projects",
      "Alumni leadership roles"
    ]
  }
]

export default function CommitmentSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Compass className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Our Commitment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Promises We <span className="text-yellow-400">Keep</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These are not just aspirations—they are the concrete commitments we make 
              to our students, faculty, and community every single day.
            </p>
          </div>
          
          {/* Commitment cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {commitments.map((commitment, index) => (
              <div 
                key={commitment.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                  <commitment.icon className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{commitment.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{commitment.description}</p>
                
                <div className="space-y-3">
                  {commitment.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center">
            <h3 className="text-3xl font-bold mb-6">Realizing Our Mission</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join an institution committed to advancing science, technology, and humanities 
              while preparing future leaders for global impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all border border-white/30"
              >
                Learn More About UAP
              </Link>
            </div>
          </div>
          
          {/* Foundation info */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold mb-4">Established by UAP Foundation</h4>
              <p className="text-gray-300 leading-relaxed">
                UAP has been sponsored by the University of Asia Pacific Foundation, a non-profit, 
                non-commercial organization based in Dhaka, Bangladesh. The Foundation was established 
                by eminent educationists, industrialists, and administrators who share the vision of 
                promoting human and social development through improved educational opportunities and 
                innovative educational programs relevant to the needs of an emerging society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
