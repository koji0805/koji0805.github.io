/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export',           // 静的サイトとして出力
  trailingSlash: true,        // URLの末尾にスラッシュを追加
  skipTrailingSlashRedirect: true,
  distDir: 'out',            // 出力ディレクトリを指定
  images: {
    unoptimized: true,       // GitHub Pagesでは画像最適化を無効化
  },
}