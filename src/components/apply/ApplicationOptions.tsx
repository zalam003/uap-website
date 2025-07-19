import Link from 'next/link'
import { GraduationCap, BookOpen, Users, FileText, ArrowRight } from 'lucide-react'

const applicationTypes = [
  {
    title: "Bachelor's Program",
    description: "Undergraduate degrees across Engineering, Business, Pharmacy, Law, Architecture, and more",
    icon: GraduationCap,
    color: "bg-blue-500",
    borderColor: "border-blue-200",
    hoverColor: "hover:bg-blue-50",
    programs: ["Computer Science & Engineering", "Business Administration", "Architecture", "Pharmacy", "Law"],
    link: "https://admission.uap-bd.edu/Admission/Home.aspx",
    duration: "4 Years",
    intake: "Spring & Fall"
  },
  {
    title: "Master's Program", 
    description: "Advanced graduate programs designed for career advancement and specialization",
    icon: BookOpen,
    color: "bg-green-500",
    borderColor: "border-green-200", 
    hoverColor: "hover:bg-green-50",
    programs: ["MBA", "EMBA", "M.Sc. Engineering", "M.Pharm", "LL.M"],
    link: "https://admission.uap-bd.edu/Admission/Home.aspx",
    duration: "1-2 Years",
    intake: "Spring & Fall"
  },
  {
    title: "Certificate Programs",
    description: "Professional development courses and specialized training programs",
    icon: FileText,
    color: "bg-purple-500",
    borderColor: "border-purple-200",
    hoverColor: "hover:bg-purple-50", 
    programs: ["Professional Courses", "Short Courses", "Training Programs"],
    link: "https://admission.uap-bd.edu/Admission/Home.aspx",
    duration: "3-12 Months",
    intake: "Multiple Intakes"
  }
]

export default function ApplicationOptions() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Choose Your <span className="text-primary-600">Academic Path</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Select the program type that aligns with your educational goals and career aspirations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {applicationTypes.map((type) => (
            <div 
              key={type.title}
              className={`group relative bg-white rounded-2xl p-8 border-2 ${type.borderColor} ${type.hoverColor} transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${type.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <type.icon className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                {type.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {type.description}
              </p>
              
              {/* Program details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-500">Duration:</span>
                  <span className="font-semibold text-secondary-700">{type.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-500">Intake:</span>
                  <span className="font-semibold text-secondary-700">{type.intake}</span>
                </div>
              </div>
              
              {/* Programs list */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-secondary-700 mb-3">Available Programs:</h4>
                <ul className="space-y-2">
                  {type.programs.slice(0, 3).map((program) => (
                    <li key={program} className="text-sm text-secondary-600 flex items-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                      {program}
                    </li>
                  ))}
                  {type.programs.length > 3 && (
                    <li className="text-sm text-primary-600 font-medium">
                      +{type.programs.length - 3} more programs
                    </li>
                  )}
                </ul>
              </div>
              
              {/* Apply button */}
              <Link
                href={type.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center group"
              >
                <span className="flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Need Help Choosing?</h3>
            <p className="text-secondary-600 mb-6">
              Our admission counselors are here to help you find the perfect program for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-outline px-8 py-3 text-base"
              >
                Contact Admissions
              </Link>
              <Link
                href="/programs"
                className="btn btn-secondary px-8 py-3 text-base"
              >
                Browse All Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
