const { siteConfig } = require('./siteConfig')

const config = {
  backend: {
    name: 'git-gateway',
    branch: 'master'
  },
  media_folder: 'static/img',
  public_folder: '/img',
  publish_mode: 'editorial_workflow',
  collections: [
    // pages,
    siteConfig,
    // blog,
    // extraPages
  ]
}

module.exports = config