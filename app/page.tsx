import { getHeroInfo } from '@/sanity-frontend/sanity.query'
import urlFor from '@/sanity-frontend/urlFor'
import Link from 'next/link'

export default async function Home() {
  const heroInfo = await getHeroInfo()

  const imageLink = heroInfo[0].HeroImage
  const title = heroInfo[0].HeroTitle

  return (
    <main style={{backgroundImage: `url(${imageLink})`}} className="relative  bg-no-repeat bg-center bg-cover  flex min-h-screen flex-col items-center ">
      <div className="absolute gap-6 w-full h-full flex flex-col justify-center items-start text-slate-300 px-8 backdrop-blur-sm backdrop-brightness-50">
        <p className='font-medium tracking-wider'>Welcome to <span className='px-2 py-1 bg-red-600'>Moga Charity Association,</span></p>
        <span className="font-extrabold text-2xl md:text-4xl w-3/4 py-5 tracking-wider leading-relaxed">{ title}</span>
        <Link href='/donate' className='px-8 py-2 bg-slate-700 hover:scale-105 hover:bg-slate-800'>Donate</Link>
      </div>
    </main>
  )
}
