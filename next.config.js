/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  output: 'export', // 静的エクスポートを有効化
  trailingSlash: true, // URLの末尾にスラッシュを追加
  skipTrailingSlashRedirect: true,
  distDir: 'out', // 出力ディレクトリを指定
  images: {
    unoptimized: true, // GitHub Pagesでは画像最適化を無効化
  },
  assetPrefix: isProd ? '/portfolio-site/' : '', // リポジトリ名を指定
  basePath: isProd ? '/portfolio-site' : '', // ベースパスを設定
}