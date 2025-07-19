import { Eye, Lightbulb, Globe, Users } from 'lucide-react'

const visionPoints = [
  {
    icon: Lightbulb,
    title: "Advance Science & Technology",
    description: "Leading innovation in science, technology, and humanities to drive progress and discovery"
  },
  {
    icon: Globe,
    title: "Innovation in Higher Education",
    description: "Transforming higher education through innovative teaching methods and cutting-edge research"
  },
  {
    icon: Users,
    title: "Better Society",
    description: "Creating positive impact and contributing to the development of a better society through education"
  }
]

export default function VisionSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
              <Eye className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Envisioning the <span className="text-blue-600">Future</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main vision statement */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 leading-tight">
                  "UAP's vision is to advance science, technology, and humanities through 
                  innovation in higher education, research, and development for a better society."
                </h3>
                <p className="text-lg text-secondary-600 leading-relaxed mb-8">
                  This vision reflects our commitment to being at the forefront of educational 
                  innovation while maintaining our responsibility to contribute meaningfully 
                  to societal development and progress.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-900">Official Vision Statement</div>
                    <div className="text-sm text-secondary-600">University of Asia Pacific</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision components */}
            <div className="order-1 lg:order-2 space-y-6">
              {visionPoints.map((point, index) => (
                <div 
                  key={point.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary-900 mb-2">{point.title}</h4>
                      <p className="text-secondary-600 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Vision impact stats */}
          <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-secondary-900 mb-12">
              Realizing Our Vision Through Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-secondary-600">Years of Educational Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">#681-700</div>
                <div className="text-sm text-secondary-600">QS Asia Rankings 2025</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
                <div className="text-sm text-secondary-600">Alumni Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <div className="text-sm text-secondary-600">Academic Schools</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
