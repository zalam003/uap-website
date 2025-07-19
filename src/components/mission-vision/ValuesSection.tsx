import { Star, Heart, Shield, Users, Lightbulb, Trophy } from 'lucide-react'

const coreValues = [
  {
    icon: Trophy,
    title: "Excellence",
    description: "Pursuing the highest standards in education, research, and service to achieve outstanding results",
    color: "bg-yellow-500"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding honesty, transparency, and ethical principles in all our academic and administrative practices",
    color: "bg-red-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing creativity, encouraging new ideas, and fostering a culture of continuous improvement",
    color: "bg-purple-500"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships with students, faculty, industry, and community for mutual growth",
    color: "bg-blue-500"
  },
  {
    icon: Shield,
    title: "Responsibility",
    description: "Taking accountability for our actions and their impact on students, society, and the environment",
    color: "bg-green-500"
  },
  {
    icon: Star,
    title: "Diversity",
    description: "Celebrating different perspectives, backgrounds, and ideas to create an inclusive learning environment",
    color: "bg-indigo-500"
  }
]

export default function ValuesSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 rounded-full px-6 py-2 mb-6">
              <Star className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-600 font-medium">Our Core Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Guiding <span className="text-purple-600">Principles</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              These fundamental values shape our culture, guide our decisions, and define 
              who we are as an institution committed to excellence.
            </p>
          </div>
          
          {/* Values grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
                
                {/* Hover effect indicator */}
                <div className="mt-6 w-0 h-1 bg-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* Values in practice */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Values in Practice
              </h3>
              <p className="text-secondary-600 max-w-2xl mx-auto">
                Our core values are not just words on paper—they are lived experiences 
                that shape every aspect of university life.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Academic Integrity</h4>
                    <p className="text-secondary-600 text-sm">
                      Maintaining the highest standards of honesty in teaching, learning, and research
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Inclusive Environment</h4>
                    <p className="text-secondary-600 text-sm">
                      Creating welcoming spaces where all students can thrive regardless of background
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Continuous Innovation</h4>
                    <p className="text-secondary-600 text-sm">
                      Regularly updating curricula and teaching methods to meet evolving needs
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Community Engagement</h4>
                    <p className="text-secondary-600 text-sm">
                      Actively participating in community development and social responsibility initiatives
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Quality Assurance</h4>
                    <p className="text-secondary-600 text-sm">
                      Implementing rigorous quality control measures across all academic programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Collaborative Partnerships</h4>
                    <p className="text-secondary-600 text-sm">
                      Building meaningful relationships with industry, government, and international institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
