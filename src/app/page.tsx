import LogIn from '@/Components/login/page'
// import LogIn from '@/Components/login/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <LogIn/>
    </main>
  )
}


{/*
Use this one instead

<main className="">
<LogIn/>
</main> */}