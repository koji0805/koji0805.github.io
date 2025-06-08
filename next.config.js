/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'export', // 静的エクスポートを有効化
  trailingSlash: true, // URLの末尾にスラッシュを追加
  skipTrailingSlashRedirect: true,
  distDir: 'out', // 出力ディレクトリを指定
  images: {
    unoptimized: true, // GitHub Pagesでは画像最適化を無効化
  },
  // assetPrefixとbasePathは削除（ユーザーサイトの場合は不要）
}