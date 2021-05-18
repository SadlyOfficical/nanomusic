![logo](https://i.imgur.com/Mgfzf2X.jpg)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/SadlyOfficical/nanomusic)


# Adivise Music (Discord Music Bot)
> Adivise-Music is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**
3. (Optional) Soundcloud Client ID **[Guild](https://github.com/zackradisic/node-soundcloud-downloader#client-id)**
4. Node.js v12.0.0 or newer

## Installation

```
git clone https://github.com/Synyanize/Adivise-Music
cd Adivise-Music
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## Configuration

Copy or Rename `config.json.example` to `config.json` and fill out the values:

```json
{
  "TOKEN": "TOKEN_HERE",
  "YOUTUBE_API_KEY": "YTAPI_HERE",
  "SOUNDCLOUD_CLIENT_ID": "SOUNDCLOUD_ID_HERE",
  "MAX_PLAYLIST_SIZE": 100,
  "PREFIX": "#",
  "PRUNING": false
}
```

## Features & Commands

> Note: The default prefix is '#'

* 🎶 Play music from YouTube via url
  * `#play https://www.youtube.com/watch?v=GLvohMXgcBo`
* 🔎 Play music from YouTube via search query
  * `#play under the bridge red hot chili peppers`
* 🔎 Search and select music to play
  * `#search Pearl Jam`
* 📃 Play youtube playlists via url
  * `#playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`
* 🔎 Play youtube playlists via search query
  * `#playlist linkin park meteora`
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Now Playing (#np)
* Queue system (#queue, #q)
* Loop / Repeat (#loop)
* Shuffle (#shuffle)
* Volume control (#volume, #v)
* Pause (#pause)
* Resume (#resume, #r)
* Skip (#skip, #s)
* Skip to song # in queue (#skipto, #st)
* Toggle pruning of bot messages (#pruning)
* Help (#help, #h)
* Media Controls via Reactions


![reactions](https://i.imgur.com/xKy6y0k.png)

## Credits

[@eritislami](https://github.com/eritislami) For the queue system used in this application which was adapted from [@eritislami/evobot](https://github.com/eritislami/evobot)
