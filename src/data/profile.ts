import { Profile } from '../types'

export const profile: Profile = {
  bio: 'フリーランスエンジニアとして、Python・Ruby・JavaScriptを駆使したWebアプリケーション開発を得意としています。特にAIを活用したシステム開発に情熱を注いでいます。',
  skills: [
    {
      category: 'プログラミング言語',
      items: ['Python', 'Ruby', 'JavaScript', 'TypeScript', 'Go']
    },
    {
      category: 'フレームワーク',
      items: ['FastAPI', 'Django', 'Ruby on Rails', 'React', 'Next.js', 'Vue.js']
    },
    {
      category: 'データベース',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      category: 'インフラ・ツール',
      items: ['Docker', 'AWS', 'Vercel', 'Git', 'GitHub Actions']
    }
  ],
  experience: [
    '2020年〜 フリーランスエンジニア（AI・Web開発）',
    '2018年〜2020年 Web系スタートアップ シニアエンジニア',
    '2016年〜2018年 SIer バックエンドエンジニア'
  ],
  social: {
    github: 'https://github.com/yourusername',
    x: 'https://x.com/yourusername',
    qiita: 'https://qiita.com/yourusername'
  }
}