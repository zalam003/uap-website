import { FileText, CreditCard, UserCheck, Calendar, CheckCircle, Clock } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: "Choose Program",
    description: "Select your desired program and review admission requirements",
    icon: FileText,
    color: "bg-blue-500",
    details: ["Browse available programs", "Check eligibility criteria", "Review curriculum"]
  },
  {
    number: 2, 
    title: "Submit Application",
    description: "Complete the online application form with required documents",
    icon: UserCheck,
    color: "bg-green-500",
    details: ["Fill application form", "Upload documents", "Submit application"]
  },
  {
    number: 3,
    title: "Pay Application Fee", 
    description: "Complete payment process for application processing",
    icon: CreditCard,
    color: "bg-yellow-500",
    details: ["Choose payment method", "Pay application fee", "Save payment receipt"]
  },
  {
    number: 4,
    title: "Admission Test",
    description: "Attend the scheduled admission test or interview",
    icon: Calendar,
    color: "bg-purple-500", 
    details: ["Check test schedule", "Prepare for exam", "Attend admission test"]
  },
  {
    number: 5,
    title: "Result & Admission",
    description: "Receive admission decision and complete enrollment",
    icon: CheckCircle,
    color: "bg-emerald-500",
    details: ["Check test results", "Receive admission letter", "Complete enrollment"]
  }
]

export default function AdmissionProcess() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Admission <span className="text-primary-600">Process</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Follow these simple steps to complete your application and join UAP
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200 rounded-full">
                <div className="h-full bg-primary-600 rounded-full w-0 transition-all duration-1000" style={{width: '80%'}}></div>
              </div>
              
              <div className="grid grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {/* Step circle */}
                    <div className={`relative z-10 w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-primary-600 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 shadow-sm">
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-secondary-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-secondary-600 mb-4">{step.description}</p>
                      
                      {/* Details */}
                      <ul className="text-xs text-secondary-500 space-y-1">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center justify-center">
                            <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start space-x-4">
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center shadow-lg relative`}>
                    <step.icon className="h-6 w-6 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-primary-600 rounded-full flex items-center justify-center text-xs font-bold text-primary-600">
                      {step.number}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-16 bg-gray-200 mx-auto mt-4"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{step.title}</h3>
                  <p className="text-secondary-600 mb-4">{step.description}</p>
                  
                  {/* Details */}
                  <ul className="text-sm text-secondary-500 space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Important notice */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Important Timeline</h3>
              <p className="text-blue-700 mb-4">
                Application deadlines vary by program. Please check specific program requirements and apply early to secure your spot.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-blue-900">Spring Semester:</span>
                  <span className="text-blue-700 ml-2">Applications due December 31st</span>
                </div>
                <div>
                  <span className="font-semibold text-blue-900">Fall Semester:</span>
                  <span className="text-blue-700 ml-2">Applications due July 31st</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
