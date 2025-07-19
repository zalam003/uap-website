import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MissionVisionHero from '@/components/mission-vision/MissionVisionHero'
import VisionSection from '@/components/mission-vision/VisionSection'
import MissionSection from '@/components/mission-vision/MissionSection'
import ValuesSection from '@/components/mission-vision/ValuesSection'
import CommitmentSection from '@/components/mission-vision/CommitmentSection'

export default function MissionVisionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <MissionVisionHero />
        <VisionSection />
        <MissionSection />
        <ValuesSection />
        <CommitmentSection />
      </main>
      <Footer />
    </div>
  )
}
