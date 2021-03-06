'use strict'

const router = require('express').Router()
// const config = require('../config/config.js')
const debug = require('debug')('NC:auth-router')

debug('loading the node-core authentication router.')
module.exports = (args) => {
  const config = args.config
  const db = args.db

  return router
}
