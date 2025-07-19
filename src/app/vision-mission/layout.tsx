import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vision & Mission - University of Asia Pacific',
  description: 'Learn about UAP\'s vision to enhance opportunities for higher education and our mission to provide world-class education in Bangladesh.',
}

export default function MissionVisionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
