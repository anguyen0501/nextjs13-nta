
import Link from 'next/link'
import x from '@/styles/app.module.css'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Home',
  description: 'This is Home page',
  keywords: 'Home, Home page',
}

export default function Home() {
  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href="/admin">
            Admin
          </Link>
        </li>
        <li>
          <Link href="/youtube">
            YouTube Hello
          </Link>
        </li>
        <li>
          <Link href="/facebook">
            Facebook  
          </Link>
        </li>
        <li>
          <Link href="/tiktok">
            Tiktok
          </Link>
        </li>
      </ul>
    </div>
  )
}
