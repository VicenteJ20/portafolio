import Image from 'next/image'
import Link from 'next/link'

interface ArticleProps {
  title: string,
  description: string,
  image: string
}

export const Article = ({ title, description, image } : ArticleProps) => {
  return (
    <Link href={`/articles/${title}`} className='flex hover:border-teal-500 dark:bg-zinc-900 transition-all duration-500 flex-col gap-3 p-2 border border-gray-500 rounded-md text-start'>
        <Image width={500} height={500} alt={title} src={image} className='h-44 3xl:h-60 rounded-md' />
        <h3 className='font-semibold'>{title}</h3>
        <p className='text-sm leading-6 dark:text-gray-300'>{description}</p>
      </Link>
  )
}
