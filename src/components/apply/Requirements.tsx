import { GraduationCap, BookOpen, FileText, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const requirements = [
  {
    type: "Bachelor's Program",
    icon: GraduationCap,
    color: "bg-blue-500",
    borderColor: "border-blue-200",
    requirements: [
      "SSC/O-Level certificate and transcript",
      "HSC/A-Level certificate and transcript", 
      "English proficiency (if applicable)",
      "Passport size photographs",
      "Copy of passport/NID",
      "Medical certificate"
    ],
    minRequirement: "Minimum GPA 2.5 in both SSC & HSC",
    testInfo: "Written test + Viva",
    link: "/admission_requirment_undergraduate"
  },
  {
    type: "Master's Program", 
    icon: BookOpen,
    color: "bg-green-500",
    borderColor: "border-green-200",
    requirements: [
      "Bachelor's degree certificate and transcript",
      "Professional experience (for EMBA)",
      "English proficiency certificate",
      "Passport size photographs", 
      "Copy of passport/NID",
      "Recommendation letters (if required)"
    ],
    minRequirement: "Minimum CGPA 2.25 in Bachelor's degree",
    testInfo: "Written test + Viva (program specific)",
    link: "/admission_requirment_graduate"
  }
]

const documents = [
  "All certificates must be original or certified copies",
  "International students need additional documentation",
  "Documents in other languages must be translated",
  "Submit application fee payment receipt"
]

export default function Requirements() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Admission <span className="text-primary-600">Requirements</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Review the specific requirements for your chosen program before applying
          </p>
        </div>
        
        {/* Requirements by program type */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {requirements.map((req) => (
            <div 
              key={req.type}
              className={`bg-white border-2 ${req.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${req.color} rounded-xl flex items-center justify-center mr-4`}>
                  <req.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">{req.type}</h3>
              </div>
              
              {/* Minimum requirement */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-secondary-700 mb-2">Minimum Academic Requirement:</h4>
                <p className="text-secondary-600">{req.minRequirement}</p>
              </div>
              
              {/* Test information */}
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-primary-700 mb-2">Admission Test:</h4>
                <p className="text-primary-600">{req.testInfo}</p>
              </div>
              
              {/* Required documents */}
              <div className="mb-6">
                <h4 className="font-semibold text-secondary-700 mb-4">Required Documents:</h4>
                <ul className="space-y-3">
                  {req.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Learn more link */}
              <Link
                href={req.link}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
              >
                View Detailed Requirements
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {/* General document guidelines */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 max-w-4xl mx-auto mb-16">
          <div className="flex items-start space-x-4">
            <FileText className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-yellow-900 mb-4">Document Guidelines</h3>
              <ul className="space-y-2">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start text-yellow-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sample questions and test schedule */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <BookOpen className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Sample Questions</h3>
            <p className="text-secondary-600 mb-6">
              Practice with sample questions to prepare for your admission test
            </p>
            <Link
              href="/admission_test_date_time_sample_question"
              className="btn btn-primary w-full"
            >
              Download Sample Questions
            </Link>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-secondary-900 mb-3">Test Results</h3>
            <p className="text-secondary-600 mb-6">
              Check your admission test results and application status
            </p>
            <Link
              href="/admission_test_results"
              className="btn btn-outline w-full"
            >
              Check Test Results
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
