import Link from 'next/link'
import { Calendar, ArrowRight, Trophy, Users, BookOpen } from 'lucide-react'

const achievements = [
  {
    title: "QS Asia University Rankings 2025",
    description: "UAP secured the #681-700 position in the QS Asia University Rankings 2025",
    icon: Trophy,
    color: "bg-yellow-500",
    date: "2025"
  },
  {
    title: "10th Convocation 2024", 
    description: "Successfully conducted our 10th convocation ceremony celebrating graduating students",
    icon: Users,
    color: "bg-blue-500",
    date: "2024"
  },
  {
    title: "Winter School 2024",
    description: "Inaugural Ceremony of Winter School 2024 at UAP with international collaboration",
    icon: BookOpen,
    color: "bg-green-500", 
    date: "2024"
  }
]

const news = [
  {
    title: "ICPC-Jamilur Reza Choudhury Scholarship Award",
    description: "UAP honors 20 students with prestigious scholarship awards for academic excellence",
    date: "Jan 2025",
    category: "Awards"
  },
  {
    title: "MOU with Police Staff College",
    description: "University of Asia Pacific signs MOU with Police Staff College for collaborative programs",
    date: "Dec 2024", 
    category: "Partnership"
  },
  {
    title: "UAP Delegates Meet Maldives Vice President",
    description: "UAP delegates call on the Honorable Vice President of Maldives for educational cooperation",
    date: "Nov 2024",
    category: "International"
  }
]

export default function NewsAchievements() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container">
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Recent <span className="text-primary-600">Achievements</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Celebrating our milestones and recognitions that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="group relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="text-sm font-semibold text-primary-600">
                    {achievement.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest News Section */}
        <div>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Latest <span className="text-primary-600">News</span>
              </h2>
              <p className="text-xl text-secondary-600">
                Stay updated with the latest happenings at UAP
              </p>
            </div>
            <Link 
              href="/news"
              className="hidden sm:flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={item.title} className="group cursor-pointer">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-600">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-secondary-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 text-sm font-semibold group-hover:text-primary-700 transition-colors">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:hidden">
            <Link 
              href="/news"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
