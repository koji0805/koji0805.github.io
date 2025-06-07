'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Profile() {
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

    const element = document.getElementById('profile')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="profile" className="py-20 bg-white">
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
              <div className="w-full h-[740px] bg-gray-100 overflow-hidden">
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
              <h3 className="text-2xl font-medium text-gray-900 mb-6">KOJI FUJIWARA</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="font-light">
                  フリーランスエンジニアとして、Python・JavaScript・Rubyを使用したWebアプリケーション開発を専門としています。
                </p>
                <p className="font-light">
                  特にAIを活用したシステム開発や、スケーラブルなWebアプリケーションの構築に情熱を注いでいます。
                  クライアントのビジネス課題を技術で解決することを使命として、日々新しい技術の習得に励んでいます。
                </p>
                <p className="font-light">
                  これまでに多数のプロジェクトを手がけ、スタートアップから大企業まで幅広いクライアントとの協業実績があります。
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="border-l-2 border-gray-200 pl-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">PERSONAL INFO</h4>
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-sm text-gray-500 w-20 font-medium">Name:</span>
                  <span className="text-sm text-gray-700">藤原 弘司 (Koji Fujiwara)</span>
                </div>
                <div className="flex">
                  <span className="text-sm text-gray-500 w-20 font-medium">Location:</span>
                  <span className="text-sm text-gray-700">東京, 日本</span>
                </div>
                <div className="flex">
                  <span className="text-sm text-gray-500 w-20 font-medium">Email:</span>
                  <span className="text-sm text-gray-700">koji.fujiwara@example.com</span>
                </div>
                <div className="flex">
                  <span className="text-sm text-gray-500 w-20 font-medium">Status:</span>
                  <span className="text-sm text-green-600 font-medium">Available for work</span>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">EXPERIENCE</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gray-900 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2020 - Present</div>
                    <div className="text-sm text-gray-600">フリーランスエンジニア</div>
                    <div className="text-xs text-gray-500 mt-1">AI・Web開発を中心とした技術コンサルティング</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2018 - 2020</div>
                    <div className="text-sm text-gray-600">Web系スタートアップ シニアエンジニア</div>
                    <div className="text-xs text-gray-500 mt-1">フルスタック開発・チームリード</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">2016 - 2018</div>
                    <div className="text-sm text-gray-600">SIer バックエンドエンジニア</div>
                    <div className="text-xs text-gray-500 mt-1">エンタープライズシステム開発</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}