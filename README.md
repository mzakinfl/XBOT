<div align="center">
<img src="https://images5.alphacoders.com/911/911614.png" alt="BocchiBot" width="500" />

# BocchiBot

> BocchiBot is a multipurpose WhatsApp bot using wa-automate-nodejs library!
>
>

<h3 align="center">Made with ❤️ by</h3>
<p align="center">
  <a href="https://github.com/SlavyanDesu"><img src="https://avatars3.githubusercontent.com/u/28254882?s=400&u=25765902db0b709938966cf4127ac11af5eafb5d&v=4" height="128" width="128" /></a>
  <a href="https://github.com/Pahri123"><img src="https://avatars1.githubusercontent.com/u/66406056?s=400&v=4" height="128" width="128" /></a>
  <a href="https://github.com/LeviathanH"><img src="https://avatars3.githubusercontent.com/u/75152820?s=400&u=8934104bf58533111f2f4cef7be5d72ebb79d75c&v=4" height="128" width="128" /></a>
  <a href="https://github.com/AlvioAdjiJanuar"><img src="https://avatars2.githubusercontent.com/u/68207798?s=400&u=29439908cd661d11443391cb74f5b07267b71117&v=4" height="128" width="128" /></a>
  <a href="https://github.com/VideFrelan"><img src="https://avatars1.githubusercontent.com/u/76523793?s=400&u=365f732cd3fc09ce75f6556715a00386005db57c&v=4" height="128" width="128" /></a>
</p>

<p align="center">
  <a href="https://github.com/SlavyanDesu"><img title="Author" src="https://img.shields.io/badge/Author-SlavyanDesu-purple.svg?style=for-the-badge&logo=github" /></a>
</p>

<p align="center">
  <a href="https://github.com/SlavyanDesu/BocchiBot"><img title="Stars" src="https://img.shields.io/github/stars/SlavyanDesu/BocchiBot?color=red&style=flat-square" /></a>
  <a href="https://github.com/SlavyanDesu/BocchiBot/network/members"><img title="Forks" src="https://img.shields.io/github/forks/SlavyanDesu/BocchiBot?color=red&style=flat-square" /></a>
  <a href="https://github.com/SlavyanDesu/BocchiBot/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/SlavyanDesu/BocchiBot?label=watchers&color=blue&style=flat-square" /></a> <br>
  <a href="https://www.npmjs.com/package/@open-wa/wa-automate"><img src="https://img.shields.io/npm/v/@open-wa/wa-automate.svg?color=green" /></a>
  <img src="https://img.shields.io/node/v/@open-wa/wa-automate" />
  <img src="https://img.shields.io/badge/maintained%3F-yes-green.svg?style=flat" />
  <img src="https://img.shields.io/github/repo-size/SlavyanDesu/BocchiBot" /> <br>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_shield" alt="FOSSA Status"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=shield"/></a>
  <a href="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot"><img src="https://www.codefactor.io/repository/github/SlavyanDesu/BocchiBot/badge" /></a>
</p>

<p align="center">
  <a href="https://github.com/SlavyanDesu/BocchiBot#requirements">Requirements</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#installation">Installation</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#features">Features</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#thanks-to">Thanks to</a> •
  <a href="https://github.com/SlavyanDesu/BocchiBot#license">License</a>
</p>

<h4 align="center">
  <a href="https://chat.whatsapp.com/KSG5C4SGlT2IpRtFm05owk">Join WA BOT DEV Indonesia!</a>
</h4>
</div>

# Requirements
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://www.gyan.dev/ffmpeg/builds/)
* [libwebp](https://developers.google.com/speed/webp/download)
* Any text editor

# Installation
## 📝 Cloning this repo
```cmd
> git clone https://github.com/SlavyanDesu/BocchiBot.git
> cd BocchiBot
```

## ✍️ Editing the file
Edit the required value in `config.json`.
```json
{
    "ownerBot": "62812xxxxxxxx@c.us",
    "prefix": "$",
    "uaOverride": "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    "token": "api-key",
    "nao": "api-key",
    "vhtear": "api-key",
    "melodic": "administrator"
}
```

`ownerBot`: your WhatsApp number.  
`prefix`: bot's prefix.  
`uaOverride`: your user agent.  
`token`: API token. You can get it [here](https://api.i-tech.id) by creating an account. After that, set your server/host static IP in [here](https://api.i-tech.id/settings/profile).  
`nao`: SauceNAO API token. You can get it [here](https://saucenao.com/user.php) by creating an account.  
`vhtear`: VHTear API token. You can get it [here](https://api.vhtear.com/) by purchasing his API key.  
`melodic`: MelodicXT API token. You can use `administrator` key.  

## 🗣️ Changing language
If you want to change the language, replace all `ind` function to `eng`.   
Example:
```js
ind.wrongFormat()
```
To:
```js
eng.wrongFormat()
```

## 🛠️ Installing the FFmpeg
* Download one of the available versions of FFmpeg by clicking [this link](https://www.gyan.dev/ffmpeg/builds/).
* Extract the file to `C:\` path.
* Rename the extracted folder to `ffmpeg`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've FFmpeg installed, verify that it's working by running this command to see version number:
```cmd
> ffmpeg -version
```

## 📷 Installing the libwebp
The installation is same as you install FFmpeg but whatever. I will make it clear.
* Download the file according to the OS you are using by clicking [this link](https://developers.google.com/speed/webp/download).
* Extract the file to `C:\` path.
* Rename the extracted file to `libwebp`.
* Run Command Prompt as Administrator.
* Run this command:
```cmd
> setx /m PATH "C:\libwebp\bin;%PATH%"
```
It will give us a callback like `SUCCESS: specified value was saved`.
* Now that you've libwebp installed, verify that it's installed by running this command to see version number:
```cmd
> webpmux -version
```

## 🔍 Installing the dependencies
```cmd
> npm install
```

## 🆗 Running the bot
Regular node:
```cmd
> npm start
```

PM2:
```cmd
> pm2 start index.js
> pm2 monit
```

PM2 with cron job (restart after 5 hours):
```cmd
> pm2 start index.js --cron "* */5 * * *"
> pm2 monit
```

After that scan the QR code using your WhatsApp in your phone!

# Features
If you want to unlock premium commands, please buy me a coffee at least 1 on Ko-fi platform.

|     Leveling     |  Availability  |
| :--------------: | :------------: |
| Leveling         |       ✔️       |
| Set background   |       ✔️       |
| Set status color |      Soon      |
| Set level color  |      Soon      |
| Set XP color     |      Soon      |
| Set bar color    |      Soon      |

|     Sticker Maker     | Availability |
| :-------------------: | :----------: |
| Send/reply image      |      ✔️      |
| Send/reply GIF        |      ✔️      |
| Send/reply MP4        |      ✔️      |
| Text to sticker       |      ✔️      |
| Text to sticker GIF   |      ✔️      |
| Sticker to image      |      ✔️      |
| Sticker WM            |      ✔️      |
| Take sticker          |      ✔️      |

|      Downloader     | Availability |
| :-----------------: | :----------: |
| Facebook video      |      ✔️      |
| YouTube audio/video |      ✔️      |
| Joox                |      ✔️      |
| TikTok              |      ✔️      |
| TikTok pic          |      ✔️      |
| Twitter             |      ✔️      |
| Instagram post      |      ✔️      |
| Instagram story     |      ✔️      |
| LayarKaca21 film    |      ✔️      |
| TikTok no WM        |      ✔️      |

|         Misc        | Availability |
| :-----------------: | :----------: |
| Say                 |      ✔️      |
| Lyric finder        |      ✔️      |
| Shortlink maker     |      ✔️      |
| Wikipedia           |      ✔️      |
| KBBI search         |      ✔️      |
| IG stalk            |      ✔️      |
| GSMArena            |      ✔️      |
| Food receipt finder |      ✔️      |
| YouTube search      |      ✔️      |
| TTS                 |      ✔️      |
| AFK                 |      ✔️      |
| Distance calculator |      ✔️      |
| Find sticker        |      ✔️      |
| List surah          |      ✔️      |
| Math                |      ✔️      |
| Surah               |      ✔️      |
| Random contact      |      ✔️      |
| Play YouTube        |      ✔️      |
| Whois               |      ✔️      |
| SMS gateway         |      ✔️      |
| Tafsir Al-Qur'an    |      ✔️      |
| Al-Kitab search     |      ✔️      |
| LK21                |      ✔️      |
| Reminder            |      ✔️      |
| Image to URL        |      ✔️      |
| Jadwal sholat       |      ✔️      |
| Line sticker latest |      ✔️      |
| Cek ongkir          |      ✔️      |
| Read more           |      ✔️      |

|          Fun          | Availability |
| :-------------------: | :----------: |
| Harta tahta maker     |      ✔️      |
| Weton jodoh           |      ✔️      |
| Zodiac                |      ✔️      |
| Write on paper        |      ✔️      |
| Glitch text maker     |      ✔️      |
| SimSimi               |      ✔️      |
| Blackpink logo maker  |      ✔️      |
| Pornhub logo maker    |      ✔️      |
| Galaxy text maker     |      ✔️      |
| Truth or dare         |      ✔️      |
| TikTok asupan         |      ✔️      |
| PH comment maker      |      ✔️      |
| Triggered effect      |      ✔️      |
| Deep fry effect       |      ✔️      |
| Kiss someone          |      ✔️      |
| 3D Text               |      ✔️      |
| Freefire logo         |      ✔️      |
| Freefire banner       |      ✔️      |
| Sliding text          |      ✔️      |
| Hero ML maker         |      ✔️      |
| Fire maker            |      ✔️      |
| Couple balloon maker  |      ✔️      |
| Wasted image          |      ✔️      |
| Caklontong quiz       |      ✔️      |

|      Weeb Zone     | Availability |
| :----------------: | :----------: |
| Random neko girl   |      ✔️      |
| Random wallpaper   |      ✔️      |
| Random kemonomimi  |      ✔️      |
| Kusonime scrapper  |      ✔️      |
| Komiku scrapper    |      ✔️      |
| Anime tracer       |      ✔️      |
| Source finder      |      ✔️      |
| Random waifu       |      ✔️      |
| Anitoki latest     |      ✔️      |

|        Bot       | Availability |
| :--------------: | :----------: |
| Toogle NSFW      |      ✔️      |
| Bot usage status |      ✔️      |
| Blocked list     |      ✔️      |
| Ping             |      ✔️      |
| Delete message   |      ✔️      |
| Report bug       |      ✔️      |
| Join group       |      ✔️      |
| Serial check     |      ✔️      |

|        Owner       | Availability |
| :----------------: | :----------: |
| Broadcast          |      ✔️      |
| Clear all messages |      ✔️      |
| Leave all groups   |      ✔️      |
| Get snapshot       |      ✔️      |
| Ban                |      ✔️      |
| Eval               |      ✔️      |
| Shutdown           |      ✔️      |
| Add premium user   |      ✔️      |
| Set bot's info     |      ✔️      |

|    Moderation    | Availability |
| :--------------: | :----------: |
| Add              |      ✔️      |
| Kick             |      ✔️      |
| Promote          |      ✔️      |
| Demote           |      ✔️      |
| Leave bot        |      ✔️      |
| Everyone         |      ✔️      |
| Toogle NSFW      |      ✔️      |
| Set group icon   |      ✔️      |
| Anti-group link  |      ✔️      |
| Toogle welcome   |      ✔️      |
| Auto-sticker     |      ✔️      |
| Mute group       |      ✔️      |
| Anti-NSFW link   |      ✔️      |

|        NSFW        | Availability |
| :----------------: | :----------: |
| Lewds              |      ✔️      |
| nHentai lookup     |      ✔️      |
| Fetish             |      ✔️      |
| Latest Nekopoi     |      ✔️      |
| Waifu NSFW         |      ✔️      |
| Pornhub downloader |      ✔️      |
| Waifu 18+          |      ✔️      |
| Yuri               |      ✔️      |
| Femdom             |      ✔️      |
| Avatar lewd        |      ✔️      |
| nHentai search     |      ✔️      |
| nHentai downloader |    Premium   |
| Multi lewds        |    Premium   |
| Multi fetish       |    Premium   |

# Thanks to
* [`open-wa/wa-automate-nodejs`](https://github.com/open-wa/wa-automate-nodejs)
* [`YogaSakti/imageToSticker`](https://github.com/YogaSakti/imageToSticker)
* [`uukina`](https://github.com/uukina)
* [`MrPawNO`](https://github.com/MrPawNO)
* [`Pahri123`](https://github.com/Pahri123)
* [`LeviathanH`](https://github.com/LeviathanH)
* [`ferlitopym`](https://github.com/ferlitopym)
* [`AlvioAdjiJanuar`](https://github.com/AlvioAdjiJanuar)
* [`VideFrelan`](https://github.com/VideFrelan)
* [`VirusLauncher`](https://github.com/VirusLauncher)
* [`shansekai`](https://github.com/shansekai)
* [`Baguettou`](https://github.com/Baguettou)

# License
**BocchiBot** © [SlavyanDesu](https://github.com/SlavyanDesu), released under the MIT License.
Authored and maintained by SlavyanDesu.

<p align="center">
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot?ref=badge_large"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FSlavyanDesu%2FBocchiBot.svg?type=large" />
</p>
