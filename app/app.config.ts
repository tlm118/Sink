export default defineAppConfig({
  title: '7GE.TOP',
  email: 'admin@7ge.top',
  github: '',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: '棋哥资源库旗下网站',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
