import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Youtube, PinIcon, GraduationCap, Mail, Phone, MapPin } from 'lucide-react'

const navigation = {
  academics: [
    { name: 'Undergraduate Programs', href: '/academics/undergraduate' },
    { name: 'Graduate Programs', href: '/academics/graduate' },
    { name: 'Schools & Departments', href: '/academics/schools' },
    { name: 'Faculty', href: '/academics/faculty' },
  ],
  admissions: [
    { name: 'How to Apply', href: '/admissions/apply' },
    { name: 'Requirements', href: '/admissions/requirements' },
    { name: 'Scholarships', href: '/admissions/scholarships' },
    { name: 'International Students', href: '/admissions/international' },
  ],
  campus: [
    { name: 'Student Life', href: '/campus-life/student-life' },
    { name: 'Housing', href: '/campus-life/housing' },
    { name: 'Dining', href: '/campus-life/dining' },
    { name: 'Recreation', href: '/campus-life/recreation' },
  ],
  resources: [
    { name: 'Library', href: '/resources/library' },
    { name: 'Career Services', href: '/resources/career' },
    { name: 'Alumni Network', href: '/resources/alumni' },
    { name: 'News & Events', href: '/resources/news' },
  ],
}

const social = [
  { name: 'Facebook', href: 'https://facebook.com/UAPBDDhaka', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/uap_university', icon: Twitter },
  { name: 'LinkedIn', href: 'https://bd.linkedin.com/company/uapbd', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/@uapuniversity', icon: Youtube },
  { name: 'Pinterest', href: 'https://pinterest.com/uapuniversity', icon: PinIcon },
  { name: 'ResearchGate', href: 'https://www.researchgate.net/institution/University_of_Asia_Pacific', icon: GraduationCap },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-16 sm:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Academics</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.academics.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Admissions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.admissions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Campus Life</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.campus.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-300">74/A, Green Road, Farmgate, Dhaka-1205, Bangladesh</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-300">PABX: +8802-58157091-4,6</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-300">FAX: +8802-58157097</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-300">info@uap-bd.edu</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Follow Us</h3>
                <div className="mt-6 flex space-x-6">
                  {social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Image
              src="/logo.png"
              alt="University of Asia Pacific"
              width={160}
              height={80}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-xs leading-5 text-gray-400 sm:mt-0">
              &copy; 2025 University of Asia Pacific. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
