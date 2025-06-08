'use client'

import { portfolios } from '../data/portfolios'
import { WorkCard } from './WorkCard'

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-4">PORTFOLIO</h2>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            These are some of the projects I've worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio, index) => (
            <WorkCard key={portfolio.id} portfolio={portfolio} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}