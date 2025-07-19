import { Target, BookOpen, Users, Award, Lightbulb, Globe } from 'lucide-react'

const missionPillars = [
  {
    icon: Users,
    title: "Excellence in Faculty & Staff",
    description: "Maintain highly qualified and strongly motivated faculty and staff members to ensure quality education"
  },
  {
    icon: BookOpen,
    title: "Modern Facilities & Research", 
    description: "Provide state-of-the-art facilities for faculty research and student practicum with modern laboratories and libraries"
  },
  {
    icon: Award,
    title: "Global Standards",
    description: "Produce graduates who meet global standards and create positive impact on society"
  },
  {
    icon: Lightbulb,
    title: "Cutting-edge Knowledge",
    description: "Encourage faculty research, publication, and knowledge sharing to foster creativity and innovation"
  },
  {
    icon: Globe,
    title: "Future Leaders",
    description: "Equip students with social skills to become productive community members and future leaders"
  }
]

export default function MissionSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-2 mb-6">
              <Target className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-600 font-medium">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Driving <span className="text-green-600">Purpose</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Mission pillars */}
            <div className="space-y-6">
              {missionPillars.map((pillar, index) => (
                <div 
                  key={pillar.title}
                  className="group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-green-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 group-hover:bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <pillar.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-green-600 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-secondary-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Main mission statement */}
            <div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  &ldquo;UAP&rsquo;s mission is to hold excellence high in maintaining faculty members and staff, 
                  facilities for faculty research and student practicum harmonized with co-curricular 
                  activities so that UAP produces graduates to meet the global standards and in creating 
                  impact to the society.&rdquo;
                </h3>
                <p className="text-green-100 leading-relaxed mb-8 text-lg">
                  Our mission encompasses maintaining highly qualified faculty, modern facilities, 
                  cutting-edge curricula, and vibrant co-curricular activities to prepare students 
                  for global success while fostering innovation and societal impact.
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Official Mission Statement</div>
                    <div className="text-sm text-green-100">University of Asia Pacific</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mission in action */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-secondary-900 mb-12">
              Mission in Action
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-3">Qualified Faculty</h4>
                <p className="text-secondary-600">
                  500+ highly qualified and motivated faculty members with advanced degrees 
                  from reputed universities worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-3">Modern Facilities</h4>
                <p className="text-secondary-600">
                  State-of-the-art laboratories, comprehensive library facilities, and 
                  advanced research infrastructure for optimal learning
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-3">Global Impact</h4>
                <p className="text-secondary-600">
                  Graduates successfully employed globally, contributing to society as 
                  leaders in their respective fields
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
