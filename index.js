#!/usr/bin/env node

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', ( err, data ) => {
  if ( err ) {
    console.log( err )
  }

  console.log( data )
})
