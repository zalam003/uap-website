'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Vision & Mission', href: '/vision-mission' },
      { name: 'UAP Profile', href: '/uap-profile' },
      { 
        name: 'UAP Foundation',
        submenu: [
          { name: 'Board of Trustees', href: '/bot' },
          { name: 'Office Bearers of Board of Trustees', href: '/board' },
        ]
      },
    ]
  },
  { 
    name: 'Admission',
    href: '/admission',
    submenu: [
      { name: 'Admission Notice', href: '/admissiondir/images/admission_notice.jpg' },
      { 
        name: 'Admission Information',
        submenu: [
          { name: "Bachelor's Program", href: '/admission_info_undergraduate' },
          { name: "Master's Program", href: '/admission_info_graduate' },
        ]
      },
      { 
        name: 'Tuition Fee & Waiver',
        submenu: [
          { name: "Bachelor's Tuition Fee", href: '/undergraduate' },
          { name: "Master's Tuition Fee", href: '/graduate' },
          { name: "Bachelor's Waiver", href: '/tution' },
        ]
      },
      { 
        name: 'Admission Requirements',
        submenu: [
          { name: "Bachelor's Program", href: '/admission_requirment_undergraduate' },
          { name: "Master's Program", href: '/admission_requirment_graduate' },
        ]
      },
      { 
        name: 'Apply Online',
        submenu: [
          { name: "Bachelor's Program", href: '/admission_requirment_undergraduate' },
          { name: "Master's Program", href: '/admission_requirment_graduate' },
        ]
      },
      { name: 'Admission Test Schedule & Sample Questions', href: '/admission_test_date_time_sample_question' },
      { name: 'Admission Test Result', href: '/admission_test_results' },
    ]
  },
  { 
    name: 'Academic',
    href: '/academic',
    submenu: [
      { 
        name: 'School of Engineering',
        submenu: [
          { name: 'Key statistics: UAP School of Engineering', href: '/key_statistics_SoE.pdf' },
          { name: 'Bachelor of Computer Science and Engineering', href: 'https://cse.uap-bd.edu/' },
          { name: 'Bachelor of Science in Civil Engineering', href: '/ce/' },
          { name: 'Bachelor of Electrical & Electronic Engineering', href: 'http://eee.uap-bd.edu' },
          { name: 'Master in Science in Computer Science and Engineering', href: 'https://cse.uap-bd.edu/' },
          { name: 'M.Sc. in Civil Engineering', href: '/ce/' },
          { name: 'Master of Science in Electrical and Electronic Engineering', href: 'http://eee.uap-bd.edu' },
        ]
      },
      { 
        name: 'School of Business',
        submenu: [
          { name: 'Bachelor of Business Administration', href: '/dba/' },
          { name: 'Master of Business Administration', href: 'https://mba.uap-bd.edu' },
          { name: 'Executive Master of Business Administration', href: 'https://mba.uap-bd.edu' },
        ]
      },
      { 
        name: 'School of Environmental Sciences and Design',
        submenu: [
          { name: 'Bachelor of Architecture', href: '/architecture/' },
        ]
      },
      { 
        name: 'School of Humanities & Social Sciences',
        submenu: [
          { name: 'Bachelor of Arts (Honours) in English Language and Literature', href: '/eng/' },
          { name: 'Master of Arts in Applied Linguistics and ELT (Final)', href: '/eng/' },
        ]
      },
      { 
        name: 'School of Pharmacy',
        submenu: [
          { name: 'Bachelor of Pharmacy', href: '/phar/' },
          { name: 'Master of Pharmacy (M.Pharm) in Clinical Pharmacy and Pharmacology', href: '/phar/' },
          { name: 'Master of Pharmacy (M.Pharm) in Pharmaceutical Technology', href: '/phar/' },
        ]
      },
      { 
        name: 'School of Science',
        submenu: [
          { name: 'Basic Sciences & Humanities', href: '/bsh/' },
        ]
      },
      { 
        name: 'School of Law',
        submenu: [
          { name: 'Bachelor of Laws (Honours)', href: 'https://law.uap-bd.edu/' },
          { name: 'Master of Laws (General)', href: 'https://law.uap-bd.edu/' },
          { name: 'UMSAILS LL.M', href: 'https://law.uap-bd.edu/' },
          { name: 'Master of Human Rights', href: 'https://law.uap-bd.edu/' },
        ]
      },
      { name: 'Deans', href: '/deans' },
    ]
  },
  { 
    name: 'OIA',
    href: '/oia',
    submenu: [
      { 
        name: "Office of Int'l Affairs",
        submenu: [
          { name: 'Introduction', href: '/intro_oia' },
          { name: 'Affiliation', href: '/affiliation' },
          { name: 'International Advisory Council', href: '/international-advisory-council' },
          { name: 'MoUs', href: '/OIA_Signed_MOUs' },
          { name: 'Collaborations', href: '/dsw/Collaborations.pdf' },
          { name: 'Scholarships', href: '/dsw/Scholarships.pdf' },
          { name: 'Upcoming Prospects', href: '/dsw/Upcoming_Prospects.pdf' },
        ]
      },
    ]
  },
  { name: 'Authorities', href: '/authorities' },
  { name: 'Contact', href: '/contactus' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<{[key: string]: boolean}>({})

  const toggleDropdown = (itemName: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }))
  }

  return (
    <header className="bg-[#3B82C7] shadow-sm sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">UAP University</span>
            <Image
              src="/logo.png"
              alt="University of Asia Pacific"
              width={140}
              height={70}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium leading-6 text-white hover:text-gray-200 transition-colors flex items-center"
              >
                {item.name}
                {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
              
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name}>
                        {subItem.submenu ? (
                          <div className="relative group/sub">
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between">
                              {subItem.name}
                              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                            </button>
                            <div className="absolute left-full top-0 mt-0 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                              <div className="py-1">
                                {subItem.submenu.map((nestedItem) => (
                                  <Link
                                    key={nestedItem.name}
                                    href={nestedItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {nestedItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/apply" className="btn btn-primary">
            Apply Now
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">UAP University</span>
                <Image
                  src="/logo.png"
                  alt="University of Asia Pacific"
                  width={120}
                  height={60}
                  className="h-10 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 flex-none transition-transform ${openDropdowns[item.name] ? 'rotate-180' : ''}`} />
                          </button>
                          {openDropdowns[item.name] && (
                            <div className="mt-2 space-y-2 pl-4">
                              {item.submenu.map((subItem) => (
                                <div key={subItem.name}>
                                  {subItem.submenu ? (
                                    <div>
                                      <button
                                        onClick={() => toggleDropdown(`${item.name}-${subItem.name}`)}
                                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                                      >
                                        {subItem.name}
                                        <ChevronDown className={`h-4 w-4 flex-none transition-transform ${openDropdowns[`${item.name}-${subItem.name}`] ? 'rotate-180' : ''}`} />
                                      </button>
                                      {openDropdowns[`${item.name}-${subItem.name}`] && (
                                        <div className="mt-2 space-y-2 pl-4">
                                          {subItem.submenu.map((nestedItem) => (
                                            <Link
                                              key={nestedItem.name}
                                              href={nestedItem.href}
                                              className="block rounded-lg py-2 pl-3 pr-3.5 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {nestedItem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <Link
                                      href={subItem.href}
                                      className="block rounded-lg py-2 pl-3 pr-3.5 text-sm leading-7 text-gray-700 hover:bg-gray-50"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/apply"
                    className="btn btn-primary w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
