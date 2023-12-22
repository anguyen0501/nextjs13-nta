import type { Metadata} from 'next'


export const metadata:Metadata = {
    title: 'View Detail Blog',
    description: 'Blog NTA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
