import Head from 'next/head'

interface HeadLayoutProps {
  title: string,
  description?: string
}

export const HeadLayout = ({ title, description } : HeadLayoutProps) => {
  const defaultDescription = 'Bienvenidos a mi blog, aquí encontrarás artículos sobre tecnología, programación y desarrollo web. También encontrarás mi portafolio con algunos proyectos recientes desarrollados por mi.'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={`${description !== undefined ? description : defaultDescription}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
