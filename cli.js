const meow = require('meow')
const slackmojis = require('./index')

const cli = meow(`
    Usage
      $ slackmojis [destination]

    Options
      --destination, -d  Destination path to download emojis to

    Examples
      $ slackmojis -d emojis
`, {
  flags: {
    destination: {
      type: 'string',
      alias: 'd'
    }
  }
})

const destination = cli.flags.destination || cli.input[0]

slackmojis.download({
  destination
})
