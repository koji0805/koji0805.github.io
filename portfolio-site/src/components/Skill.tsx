'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Skill() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skill')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // 星評価コンポーネント
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', icon: '/images/skills/html5.svg', rating: 5 },
        { name: 'CSS3', icon: '/images/skills/css3.svg', rating: 4 },
        { name: 'JavaScript', icon: '/images/skills/javascript.svg', rating: 4 },
        { name: 'TypeScript', icon: '/images/skills/typescript.svg', rating: 4 },
        { name: 'React', icon: '/images/skills/react.svg', rating: 4 },
        { name: 'Next.js', icon: '/images/skills/nextjs.svg', rating: 4 },
        { name: 'Vue.js', icon: '/images/skills/vuejs.svg', rating: 3 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Python', icon: '/images/skills/python.svg', rating: 5 },
        { name: 'FastAPI', icon: '/images/skills/fastapi.svg', rating: 4 },
        { name: 'Django', icon: '/images/skills/django.svg', rating: 4 },
        { name: 'Ruby', icon: '/images/skills/ruby.svg', rating: 4 },
        { name: 'Ruby on Rails', icon: '/images/skills/rails.svg', rating: 3 },
        { name: 'Node.js', icon: '/images/skills/nodejs.svg', rating: 3 },
        { name: 'Go', icon: '/images/skills/go.svg', rating: 3 }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'PostgreSQL', icon: '/images/skills/postgresql.svg', rating: 4 },
        { name: 'MySQL', icon: '/images/skills/mysql.svg', rating: 4 },
        { name: 'MongoDB', icon: '/images/skills/mongodb.svg', rating: 3 },
        { name: 'Redis', icon: '/images/skills/redis.svg', rating: 3 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Docker', icon: '/images/skills/docker.svg', rating: 4 },
        { name: 'AWS', icon: '/images/skills/aws.svg', rating: 4 },
        { name: 'Git', icon: '/images/skills/git.svg', rating: 5 },
        { name: 'GitHub', icon: '/images/skills/github.svg', rating: 5 },
        { name: 'Vercel', icon: '/images/skills/vercel.svg', rating: 3 },
        { name: 'VS Code', icon: '/images/skills/vscode.svg', rating: 5 }
      ]
    }
  ]

  return (
    <section id="skill" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">SKILL</h2>
          <div className="w-16 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={skillGroup.category}
              className={`transition-all duration-1000 delay-${groupIndex * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="text-xl font-medium text-gray-900 mb-8 text-center">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Skill Icon */}
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      
                      {/* Skill Name */}
                      <span className="text-lg font-medium text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Star Rating */}
                    <StarRating rating={skill.rating} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}