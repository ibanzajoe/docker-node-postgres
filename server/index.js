const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const Sequalize = require('sequelize')
const models = require('../models')

// Initialize connection with postgres
const sequalize = new Sequalize('postgres://ibanza:asdfasdf@localhost:5432/listicledb', {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequalize
  .authenticate()
  .then(() => {
    console.log('Connection to postgres listicledb successful')
  })
  .catch(err => {
    console.error('Unable to connect to database: ', err)
  })

models.site_settings.findOne().then(function(order) {
  console.log(order)
})

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
