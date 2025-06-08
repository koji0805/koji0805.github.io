import { Hero } from '../components/Hero'
import { Profile } from '../components/Profile'
import { Skill } from '../components/Skill'
import { PortfolioGrid } from '../components/PortfolioGrid'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <Skill />
      <PortfolioGrid />
      <Contact />
    </main>
  )
}