require('dotenv').config()
const micro = require('micro')

const run = require('./lib/server')

const server = micro(run)
async function ServerRun(){
    await server
}
ServerRun()