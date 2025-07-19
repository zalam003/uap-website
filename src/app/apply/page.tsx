import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ApplyHero from '@/components/apply/ApplyHero'
import ApplicationOptions from '@/components/apply/ApplicationOptions'
import AdmissionProcess from '@/components/apply/AdmissionProcess'
import Requirements from '@/components/apply/Requirements'
import ContactInfo from '@/components/apply/ContactInfo'

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ApplyHero />
        <ApplicationOptions />
        <AdmissionProcess />
        <Requirements />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
