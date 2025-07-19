import { BookOpen, Users, Award, Globe, GraduationCap, Building } from 'lucide-react'

const features = [
  {
    name: 'Academic Excellence',
    description: 'Top-tier programs designed by industry experts with cutting-edge curriculum and hands-on learning experiences.',
    icon: BookOpen,
    color: 'bg-blue-500',
  },
  {
    name: 'Diverse Community',
    description: 'A vibrant campus community with students from different backgrounds, cultures, and countries fostering global perspectives.',
    icon: Users,
    color: 'bg-green-500',
  },
  {
    name: 'Recognition & Accreditation',
    description: 'Internationally recognized degrees and accreditations ensuring your education meets global standards.',
    icon: Award,
    color: 'bg-yellow-500',
  },
  {
    name: 'Global Opportunities',
    description: 'International exchange programs, partnerships with global universities, and career opportunities worldwide.',
    icon: Globe,
    color: 'bg-purple-500',
  },
  {
    name: 'Research Excellence',
    description: 'State-of-the-art research facilities and opportunities to work with renowned faculty on groundbreaking projects.',
    icon: GraduationCap,
    color: 'bg-red-500',
  },
  {
    name: 'Modern Infrastructure',
    description: 'Contemporary campus facilities with advanced laboratories, libraries, and technology-enabled learning spaces.',
    icon: Building,
    color: 'bg-indigo-500',
  },
]

export default function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-gray-100 bg-opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='nonzero'%3E%3Ccircle cx='30' cy='30' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 uppercase tracking-wide">Why Choose UAP</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
            Everything you need for <span className="text-primary-600">academic success</span>
          </p>
          <p className="mt-6 text-xl leading-8 text-secondary-600">
            Discover what makes UAP the perfect place to pursue your higher education 
            and build a successful career.
          </p>
        </div>
        
        <div className="mx-auto mt-20 max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <dt className="flex flex-col items-start">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-xl ${feature.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-xl font-bold leading-7 text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {feature.name}
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
                
                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300"></div>
              </div>
            ))}
          </dl>
        </div>
        
        {/* Call to action section */}
        <div className="mt-20 text-center">
          <div className="bg-primary-600 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have chosen UAP as their pathway to success. 
              Your future starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/apply" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Apply for Admission
              </a>
              <a 
                href="/programs" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg border border-white/20"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
