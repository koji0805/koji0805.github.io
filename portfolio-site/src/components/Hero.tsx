'use client'

import { useState, useEffect } from 'react'

export function Hero() {
  const [nameVisible, setNameVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [nameText, setNameText] = useState('')
  const [subtitleText, setSubtitleText] = useState('')
  
  const fullName = 'KOJI FUJIWARA'
  const fullSubtitle = 'ENGINEER PORTFOLIO.'

  useEffect(() => {
    // 最初のフェードイン
    const timer1 = setTimeout(() => {
      setNameVisible(true)
    }, 500)

    // 名前のタイピングエフェクト
    const timer2 = setTimeout(() => {
      let index = 0
      const nameTyping = setInterval(() => {
        if (index <= fullName.length) {
          setNameText(fullName.slice(0, index))
          index++
        } else {
          clearInterval(nameTyping)
          // サブタイトルの表示開始
          setTimeout(() => {
            setSubtitleVisible(true)
            let subIndex = 0
            const subtitleTyping = setInterval(() => {
              if (subIndex <= fullSubtitle.length) {
                setSubtitleText(fullSubtitle.slice(0, subIndex))
                subIndex++
              } else {
                clearInterval(subtitleTyping)
              }
            }, 50)
          }, 300)
        }
      }, 100)
    }, 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-center">
            <div className="flex items-center space-x-12">
              <a href="#profile" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">PROFILE</a>
              <a href="#skill" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">SKILL</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">PORTFOLIO</a>
              <a href="#certification" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">CERTIFICATION</a>
              <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">WORK</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">CONTACT</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Animated Text */}
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 text-gray-900 transition-all duration-1000 ${
            nameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {nameText}
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className={`text-lg lg:text-xl font-light tracking-wide text-gray-600 transition-all duration-1000 ${
            subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {subtitleText}
            {subtitleVisible && subtitleText.length < fullSubtitle.length && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        </div>
      </section>
    </>
  )
}