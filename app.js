const _ = require('lodash')

const exerciseOne = () => {
  const loggerFix = () => {
    const line = console.log;
    line('Hello')
    line('World')
    line('Hope')
    line('You\'re')
    line('Listening')

  }
  const debugMode = () => {
    const DEBUG_MODE = false
    let debug
    if (DEBUG_MODE) {
      debug = console.log
    } else {
      debug = () => {}
    }

    debug('Hi buddy')
  }

}

exerciseOne()
