import { Portfolio } from '../types'

export const portfolios: Portfolio[] = [
  {
    id: '1',
    title: 'AIチャットツール',
    category: 'python',
    description: 'OpenAI APIを活用したインテリジェントなチャットアプリケーション',
    role: 'フルスタック開発',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'React'],
    thumbnail: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    github_url: 'https://github.com/example/chat-tool',
    featured: true
  },
  {
    id: '2',
    title: '音声文字起こしシステム',
    category: 'python',
    description: '音声ファイルを高精度でテキスト化するシステム',
    role: 'バックエンド開発',
    technologies: ['Python', 'Whisper API', 'Django'],
    thumbnail: '/images/placeholder.jpg',
    images: ['/images/placeholder.jpg'],
    github_url: 'https://github.com/example/transcription'
  },
  // 新しいプロジェクトをここに追加
  {
    id: "new-project",
    title: "新しいプロジェクト",
    category: "python",
    description: "プロジェクトの説明",
    role: "開発者",
    technologies: ["Python", "FastAPI"],
    thumbnail: "/images/new-project.jpg",
    images: ["/images/new-project.jpg"],
    github_url: "https://github.com/example/new-project"
  }
]