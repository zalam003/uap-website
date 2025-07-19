import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from 'lucide-react'

const contactMethods = [
  {
    title: "Phone",
    icon: Phone,
    color: "bg-blue-500",
    details: [
      "+8802-48114140",
      "PABX: +8802-58157091-4",
      "+8802-58157096 (Ext: 210,211,212,215)"
    ]
  },
  {
    title: "Mobile",
    icon: MessageCircle,
    color: "bg-green-500",
    details: [
      "+8801789050383",
      "+8801714088321", 
      "+8801768544208",
      "+8801731681081"
    ]
  },
  {
    title: "Email",
    icon: Mail,
    color: "bg-purple-500",
    details: [
      "admission@uap-bd.edu"
    ]
  },
  {
    title: "Address",
    icon: MapPin,
    color: "bg-red-500",
    details: [
      "74/A, Green Road",
      "Dhaka - 1205, Bangladesh"
    ]
  }
]

const officeHours = [
  { day: "Sunday - Thursday", time: "9:00 AM - 5:00 PM" },
  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
  { day: "Friday", time: "Closed" }
]

export default function ContactInfo() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Need <span className="text-primary-600">Help?</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our admission team is here to guide you through the application process
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Contact methods grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method) => (
              <div 
                key={method.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-secondary-900 mb-3">{method.title}</h3>
                <div className="space-y-2">
                  {method.details.map((detail, index) => (
                    <p key={index} className="text-sm text-secondary-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Office hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-secondary-900">Office Hours</h3>
              </div>
              <div className="space-y-4">
                {officeHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-secondary-700">{schedule.day}</span>
                    <span className="text-secondary-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-700">
                  <strong>Note:</strong> Office hours may vary during admission periods. 
                  Please call ahead to confirm availability.
                </p>
              </div>
            </div>
            
            {/* FAQ section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-primary-600 mr-3" />
                <h3 className="text-2xl font-bold text-secondary-900">Get Assistance</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2">Admission Counseling</h4>
                  <p className="text-secondary-600 text-sm mb-3">
                    Get personalized guidance on program selection and application process
                  </p>
                  <button className="btn btn-primary text-sm px-4 py-2">
                    Schedule Consultation
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2">Campus Visit</h4>
                  <p className="text-secondary-600 text-sm mb-3">
                    Tour our facilities and meet with faculty and current students
                  </p>
                  <button className="btn btn-outline text-sm px-4 py-2">
                    Book Campus Tour
                  </button>
                </div>
                
                <div>
                  <h4 className="font-semibold text-secondary-700 mb-2">Virtual Information Session</h4>
                  <p className="text-secondary-600 text-sm mb-3">
                    Join our online sessions to learn about programs and ask questions
                  </p>
                  <button className="btn btn-secondary text-sm px-4 py-2">
                    Join Next Session
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency contact */}
          <div className="mt-12 bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-red-900 mb-2">Emergency Contact</h3>
            <p className="text-red-700 mb-4">
              For urgent admission-related matters outside office hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <span className="text-red-800 font-semibold">Emergency Hotline:</span>
              <a href="tel:+8801789050383" className="text-red-600 hover:text-red-700 font-bold">
                +880 1789 050383
              </a>
            </div>
          </div>
          
          {/* Map or additional info */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Visit Our Campus</h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Located in the heart of Dhaka, our Green Road campus is easily accessible 
              by public transport. We welcome prospective students and parents to visit us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary px-6 py-3">
                Get Directions
              </button>
              <button className="btn btn-outline px-6 py-3">
                Download Campus Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
