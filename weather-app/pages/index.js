

import homeStyles from '@/pages/Home.module.css'
import { BodyWA } from './components/bodyWA/BodyWA'
import { HeaderWA } from './components/headerWA/HeaderWA'



export default function Home() {
  return (
    <>
      <main className={homeStyles.main}>
        <HeaderWA></HeaderWA>
        <BodyWA></BodyWA>
      </main>
    </>
  )
}
