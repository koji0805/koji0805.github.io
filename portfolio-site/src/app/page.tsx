import { Hero } from '../components/Hero'
import { Profile } from '../components/Profile'
import { Skill } from '../components/Skill'
import { WorksGrid } from '../components/WorksGrid'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <Skill />
      <WorksGrid />
      <About />
      <Contact />
    </main>
  )
}