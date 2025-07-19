import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import NewsAchievements from '@/components/NewsAchievements'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <NewsAchievements />
      </main>
      <Footer />
    </div>
  )
}
