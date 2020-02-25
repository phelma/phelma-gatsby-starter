console.time('WRITING NCMS CONFIG')
const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')

const config = require('./index')
const yamlOpts = { noRefs: true }

const outputPath = path.resolve(__dirname, '../static/admin/config.yml')
const yamlConfig = yaml.safeDump(config, yamlOpts)
fs.writeFileSync(outputPath, yamlConfig)
console.timeEnd('WRITING NCMS CONFIG')
