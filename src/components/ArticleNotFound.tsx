
interface NotFoundArticleProps {
  text?: string,
  visibility?: boolean
}

export const NotFoundArticle = ({ text, visibility } : NotFoundArticleProps) => {
  return (
    <div className={`h-40 3xl:h-64 flex flex-col justify-center items-center ${visibility ? 'visible' : 'hidden'}`}>
      <h3 className='font-bold text-lg'>No se encontraron artículos con la categoría: <span className='text-teal-800 dark:text-teal-400'>{text}</span></h3>
    </div>
  )
}