import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Vicente Jorquera</title>
      </Head>
      <main className=' w-screen h-screen flex flex-col items-center justify-center bg-zinc-900'>
        <h2 className='text-2xl font-bold text-teal-800'>Hola mundo</h2>
      </main>
    </>
  )
}
