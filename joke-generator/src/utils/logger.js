import Debug from 'debug'

const logger = {
  info: Debug('dev'),
  warn: Debug('warn'),
  error: Debug('error'),
}

export default logger
