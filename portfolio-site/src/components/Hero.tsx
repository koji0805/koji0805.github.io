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
          // サブタイトルのタイピング開始
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
          }, 500)
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
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-12">
              <a href="#profile" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">PROFILE</a>
              <a href="#skill" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">SKILL</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">PORTFOLIO</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium">CONTACT</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Dynamic Background */}
      <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
        {/* Dynamic Background - Continuously Moving Squares and Triangles */}
        <div className="absolute inset-0">
          {/* Floating Squares with continuous movement */}
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-300 rotate-45 animate-spin opacity-30" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/3 left-20 w-12 h-12 border-2 border-purple-300 animate-pulse opacity-40" style={{animationDuration: '1.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border border-gray-300 rotate-45 animate-bounce opacity-20" style={{animationDuration: '2s'}}></div>
          <div className="absolute top-1/2 right-10 w-8 h-8 bg-blue-100 rotate-45 animate-pulse opacity-50" style={{animationDuration: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-14 h-14 border-2 border-pink-300 animate-spin opacity-30" style={{animationDuration: '6s'}}></div>
          <div className="absolute top-3/4 left-10 w-10 h-10 bg-purple-100 rotate-12 animate-bounce opacity-40" style={{animationDuration: '1.8s'}}></div>
          
          {/* Fast Moving Squares */}
          <div className="absolute top-10 left-1/2 w-6 h-6 border border-blue-200 rotate-45 animate-pulse opacity-30" style={{animationDuration: '1.2s'}}></div>
          <div className="absolute bottom-10 left-1/3 w-18 h-18 border-2 border-purple-200 animate-spin opacity-25" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-8 h-8 bg-pink-50 rotate-12 animate-bounce opacity-40" style={{animationDuration: '1.6s'}}></div>
          
          {/* Floating Triangles with faster animations */}
          <div 
            className="absolute top-1/4 left-1/3 w-0 h-0 animate-pulse opacity-30"
            style={{
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderBottom: '26px solid #93c5fd',
              animationDuration: '1.3s'
            }}
          ></div>
          <div 
            className="absolute bottom-20 right-1/4 w-0 h-0 animate-bounce opacity-40"
            style={{
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderTop: '20px solid #c4b5fd',
              animationDuration: '1.7s'
            }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-0 h-0 animate-spin opacity-20"
            style={{
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: '17px solid #fda4af',
              animationDuration: '5s',
              transform: 'translateX(-50%) translateY(-50%)'
            }}
          ></div>
          <div 
            className="absolute top-3/4 right-1/2 w-0 h-0 animate-pulse opacity-35"
            style={{
              borderLeft: '18px solid transparent',
              borderRight: '18px solid transparent',
              borderBottom: '31px solid #d1d5db',
              animationDuration: '2s'
            }}
          ></div>
          <div 
            className="absolute bottom-1/2 left-1/5 w-0 h-0 animate-bounce opacity-25"
            style={{
              borderTop: '14px solid transparent',
              borderBottom: '14px solid transparent',
              borderRight: '24px solid #bfdbfe',
              animationDuration: '2.2s'
            }}
          ></div>
          
          {/* Additional small moving elements */}
          {Array.from({length: 8}).map((_, i) => (
            <div
              key={`square-${i}`}
              className="absolute w-4 h-4 border border-gray-200 rotate-45 animate-pulse"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${1 + (i % 3)}s`,
                opacity: 0.2
              }}
            ></div>
          ))}
          
          {Array.from({length: 6}).map((_, i) => (
            <div
              key={`triangle-${i}`}
              className="absolute w-0 h-0 animate-bounce"
              style={{
                left: `${70 + (i * 5)}%`,
                top: `${15 + (i * 12)}%`,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '10px solid #e5e7eb',
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${1.5 + (i % 2)}s`,
                opacity: 0.3
              }}
            ></div>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="text-center relative z-10">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-4 text-gray-900 transition-all duration-1000 ${
            nameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {nameText}
            <span className="animate-pulse text-blue-600">|</span>
          </h1>
          
          <p className={`text-lg lg:text-xl font-light tracking-wide text-gray-600 transition-all duration-1000 ${
            subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {subtitleText}
            {subtitleVisible && subtitleText.length < fullSubtitle.length && (
              <span className="animate-pulse text-blue-600">|</span>
            )}
          </p>
        </div>
      </section>
    </>
  )
}