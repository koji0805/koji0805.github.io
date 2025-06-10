'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export function Profile() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="profile" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">PROFILE</h2>
          <div className="w-16 h-px bg-gray-900 mx-auto"></div>
        </div>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="w-full h-[460px] bg-gray-100 overflow-hidden">
                <Image
                  src="/images/kojipthoto.jpeg"
                  alt="Koji Fujiwara Profile"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right: Profile Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">藤原 浩司</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="font-light">
                  Python・JavaScript・Rubyを使用したWebアプリケーション開発を専門とするフリーランスエンジニア。
                  特にAIを活用したシステム開発や、スケーラブルなWebアプリケーションの構築に注力しています。
                </p>
              </div>
            </div>

            {/* Career Summary */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-gray-900">経歴</h4>
              
              <div className="space-y-4">
                <div className="border-l-2 border-blue-600 pl-4">
                  <div className="text-sm text-gray-500 mb-1">2020年 - 現在</div>
                  <div className="font-medium text-gray-900">フリーランスエンジニア</div>
                  <div className="text-sm text-gray-600">AI・Web開発を中心とした開発業務</div>
                </div>
                
                <div className="border-l-2 border-gray-300 pl-4">
                  <div className="text-sm text-gray-500 mb-1">2008年 - 2020年</div>
                  <div className="font-medium text-gray-900">株式会社マルハン</div>
                  <div className="text-sm text-gray-600">本社マーケティング・経営企画・DX部門を歴任</div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div className="border-l-2 border-gray-200 pl-6">
              <div className="space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-500 w-24 font-medium">居住地：</span>
                  <span className="text-gray-700">大阪府</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-500 w-24 font-medium">専門分野：</span>
                  <span className="text-gray-700">AI開発、フルスタックWeb開発</span>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <span className="text-gray-500 w-24 font-medium">使用言語：</span>
                  <span className="text-gray-700">日本語（ネイティブ）、英語（ビジネスレベル）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}