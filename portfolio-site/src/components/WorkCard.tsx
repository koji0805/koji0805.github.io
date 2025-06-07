'use client'

import { Portfolio } from '../types'
import Image from 'next/image'

interface Props {
  portfolio: Portfolio
  index: number
}

export function WorkCard({ portfolio, index }: Props) {
  return (
    <div className="group cursor-pointer">
      {/* Work Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-light text-gray-600 mb-2">
              {portfolio.category.toUpperCase()}
            </div>
            <div className="text-sm text-gray-500">{portfolio.title}</div>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Work Info */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {portfolio.title}
        </h3>
        <p className="text-sm text-gray-500 font-light">
          {portfolio.category} / {portfolio.technologies.slice(0, 2).join(', ')}
        </p>
      </div>
    </div>
  )
}