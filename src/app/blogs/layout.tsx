import { Metadata } from "next"

export const metadata:Metadata = {
    title: 'Blog list',
    description: 'Blog',
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
