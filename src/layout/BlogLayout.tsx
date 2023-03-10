import { Footer } from '@/components/Footer'
import { HeadLayout } from '@/components/HeadLayout'
import { SidebarNav } from '@/components/SidebarNav'
import { SidebarRight } from '@/components/SidebarRight'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

interface BlogProps {
  children: any,
  title: string,
  description?: string
}

export const BlogLayout = ({ children, title, description }: BlogProps) => {
  return (
    <>
      <HeadLayout title={title} description={description} /> {/* html head */}
      <section className={`min-h-screen w-full pl-4 md:pl-36 pr-4 lg:pr-72 py-8 dark:bg-zinc-900 ${poppins.className}`}>
        <SidebarNav />
        <SidebarRight />
        <div className='children-container px-1 md:pr-6 md:pl-3 dark:bg-zinc-900 dark:text-white text-zinc-900'>
          {children}
          <Footer />
        </div>
      </section>
    </>
  )
}
