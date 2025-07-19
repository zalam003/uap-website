import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply Now - University of Asia Pacific',
  description: 'Apply for admission to UAP. Start your journey towards academic excellence with our Bachelor\'s and Master\'s programs.',
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
