# slackmojis

> [Slackmojis](https://slackmojis.com/) downloader

## Install

```bash
npm install -g slackmojis
```

## Getting started

```bash
$ slackmojis --help

  Download all slackmojis

  Usage
    $ slackmojis [destination]

  Options
    --destination, -d  Destination path to download emojis to

  Examples
    $ slackmojis -d emojis
```

Download all scraped emojis to the folder *emojis/*

```
$ slackmojis emojis
```

Using the module:

```javascript
const slackmojis = require('slackmojis')

slackmojis.download({
  destination: 'emojis'
})
```

## Adding to Slack

Use the [Neutral Face Emoji Tools](https://chrome.google.com/webstore/detail/neutral-face-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej) browser extension to batch upload emojis to Slack.

# License

[MIT](LICENSE)
