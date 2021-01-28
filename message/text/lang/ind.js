/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix } = JSON.parse(fs.readFileSync('config.json'))

exports.wait = (pushname) => {
    return `Sabar yaa *${pushname}*, Permintaan Sedang Diproses`
}

exports.ok = (pushname) => {
    return `Sudah Selesai ${pushname} 🥰`
}

exports.wrongFormat = () => {
    return `Format Salah! Silakan Cek Cara Penggunaan Di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, pushname) => {
    return `Maaf *${pushname}* Command *${prefix}${cmd}* Tidak Ada Didalam *${prefix}menu*`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Lu Siapa Nyuruh-Nyuruh Gua?`
}

exports.doneOwner = () => {
    return `Misi Sudah Selesai, Boss`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.addedGroup = (chat) => {
    return `Terima Kasih Telah Mengundangku, Para Member Laknat *${chat.contact.name}*!\n\nSilakan Daftar Dengan Cara Ketik:\n*${prefix}daftar* nama | umur`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------

Total Diblokir: *${blockNumber.length}* user\n`
}

exports.notPremium = () => {
    return `Lu Siapa Nyuruh-Nyuruh Gua? Bayar Dlu Ajg`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}

exports.ytFound = (res) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${res.title}\n➸ *Deskripsi*:\n${res.desc}\n➸ *Durasi*: ${res.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.notRegistered = () => {
    return `Kamu Belum Terdaftar Sebagai Teman XBot! ^_^\n\nSilahkan Daftar Dengan Format:\n*${prefix}daftar* Nama | Umur`
}

exports.registered = (name, age, userId, time, serial) => {
    return `*「 PENDAFTARAN 」*\n\nAkun Kamu Telah Terdaftar Dengan Data:\n\n➸ *Nama Kamu*: ${name}\n➸ *Umur Kamu*: ${age}\n➸ *ID Kamu*: ${userId}\n➸ *Waktu Pendaftaran*: ${time}\n➸ *Serial*: ${serial}\n\nCatatan:\nBot Ini Hanya Hiburan Klo Baperan Skip AJA\n\nKetik *${prefix}peraturan* Terlebih Dahulu yaa ^_^`
}

exports.registeredAlready = () => {
    return `Kamu Sudah Terdaftar ^_^`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.limit = (time) => {
    return `Maaf, tetapi kamu telah mencapai limit menggunakan command ini.\nSilakan tunggu *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik lagi.`
}

exports.videoLimit = () => {
    return `Ukuran Video Terlalu Besar!`
}

exports.joox = (result) => {
    return `*Lagu Ditemukan!*\n\n➸ *Penyanyi*: ${result[0].penyanyi}\n➸ *Judul*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Durasi*: ${result[0].duration}\n\nMedia Sedang Dikirim, Mohon Tunggu...`
}

exports.gsm = (result) => {
    return `➸ *Model HP*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Bahan*: ${result.bahan}\n\n*Cara membuat*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `-----[ *USER INFO* ]-----\n\n➸ *Username*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${level}\n➸ *XP*: ${xp} / ${requiredXp}`
}

exports.detectorOn = (name, formattedTitle) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `*「 ANTI NSFW LINK 」*\n\nPerhatian untuk penghuni grup ${(name || formattedTitle)}\nGrup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(name || formattedTitle)}`
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan*!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nKamu Mengirim Link Group Chat!\nMaaf Tapi Kami Harus Mengeluarkan Mu...\nSayonaraa`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.levelNull = () => {
    return `Kamu Belum Memiliki Level!`
}

exports.welcome = (event) => {
    return `*Selamat Datang* @${event.who.replace('@c.us', '')}!\n\nSemoga Betah Ya Tod`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Perlu setidaknya *10* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* Telah Kembali Dari AFK! Selamat Datang Kembali ^_^`
}

exports.gcMute = () => {
    return `*「 MUTED 」*\n\nHanya admin yang dapat mengirim pesan ke grup ini.`
}

exports.gcUnmute = () => {
    return `*「 UNMUTED 」*\n\nSekarang semua anggota dapat mengirim chat di grup ini.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.playstore = (app_id, title, developer, description, price, free) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nKamu Berhasil Terdaftar! Silakan Cek Pesan Ku Di Private Chat Mu yah ^_^ ${pushname}\n\nNote:\nJika Kamu Tidak Menerima Pesan, Artinya Kamu Belum Save Nomor Bot.`
}

exports.registeredFound = (name, age, time, serial, userId) => {
    return `*「 REGISTERED 」*\n\nAkun ditemukan!\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Judul*: ${result.title}\n➸ *Durasi*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia sedang dikirim, mohon tunggu...`
}
exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat saja!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nKamu telah mengirim link NSFW!\nMaaf, tapi aku harus mengeluarkan mu...`
}
exports.ageOld = () => {
    return `Kamu Terlalu Tua Untuk Menggunakan XBot`
}
exports.ageMuda = () => {
    return `Kamu Belum Cukup Umur Untuk Menggunakan XBot`
}
exports.fakeLink = () => {
    return `Ow, this link looks kinda suspicious, for the security of the members of this group I'm gonna kick you./nBye~.`
}
exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
╭─────「 INFO 」────
│ *XBOT*
│ *2.0*
│ *Owner:* *${prefix}contactowner*
╰─────「 XBOT 」──────
❉──────────────────❉
➸ *Nama Kamu*: ${pushname}
➸ *Level Kamu*: ${level}
➸ *XP Kamu*: ${xp} / ${requiredXp}
➸ *Role Kamu*: ${role}
➸ *Premium*: ${premium}
❉──────────────────❉
Total Pendaftar: *${jumlahUser}*
❉──────────────────❉
Berikut Adalah Menu Yang Tersedia:
╭────「 LIST MENU 」──
│➸ *[1]* Menu Downloader
│➸ *[2]* Menu Bot
│➸ *[3]* Menu Maker
│➸ *[4]* Menu Media
│➸ *[5]* Menu Sticker
│➸ *[6]* Menu Weeaboo
│➸ *[7]* Menu Fun
│➸ *[8]* Menu Admin
│➸ *[9]* Menu NSFW (+18)
│➸ *[10]* Menu Owner
│➸ *[11]* Menu Leveling
╰─────「 XBOT 」──

Ketik *${prefix}menu* angka_index Untuk Membuka Menu Page Yang Dipilih.
Contoh: .menu 1

Catatan:
Owner Akan Bertindak Tegas Apabila User Melanggar Rules.
Bot Ini Terdapat Anti-Spam Yang Berupa Cooldown Command Selama *5 Detik* Setiap Kali Pemakaian.

*「 XBOT 」*
    `
}

exports.menuDownloader = () => {
    return `
-----[ MENU DOWNLOADER ]-----

1. *${prefix}facebook*
Download Facebook video.
Aliases: *fb*
Usage: *${prefix}facebook* link_video

2. *${prefix}ytmp3*
Download YouTube audio.
Aliases: -
Usage: *${prefix}ytmp3* link

3. *${prefix}ytmp4*
Download YouTube video.
Aliases: -
Usage: *${prefix}ytmp4* link

4. *${prefix}joox*
Mencari dan men-download lagu dari Joox.
Aliases: -
Usage: *${prefix}joox* judul_lagu

5. *${prefix}tiktok*
Mendownload video TikTok.
Aliases: -
Usage: *${prefix}tiktok* link_video

6. *${prefix}twitter*
Download Twitter media.
Aliases: *twt*
Usage: *${prefix}twiter* link

7. *${prefix}tiktokpic*
Download profile pic user
Aliases: -
Usage: *${prefix}tiktokpic* username

8. *${prefix}tiktoknowm*
Download video TikTok tanpa WM.
Aliases: *tiktoknowm*
Usage: *${prefix}tiktoknowm* link_video

9. *${prefix}igstory*
Download story instagram
Aliases: -
Usage: *${prefix}igstory* username

10. *${prefix}tomp3*
Untuk mengconvert Video to MP3
Aliases: -
Usage:  upload video dengan caption ${prefix}tomp3
atau Reply video dengan perintah ${prefix}tomp3

_Halaman [1]_
    `
}

exports.menuBot = () => {
    return `
-----[ MENU BOT ]-----

1. *${prefix}rules*
Wajib baca.
Aliases: *peraturan bot*
Usage: *${prefix}peraturan*

2. *${prefix}profile*
Menampilkan user info anda
Aliases: *profil*
Usage: *${prefix}profile*

3. *${prefix}menu*
Menampilkan commands yang tersedia.
Aliases: *help*
Usage: *${prefix}menu* angka_index

4. *${prefix}status*
Menampilkan status bot.
Aliases: *stats*
Usage: *${prefix}status*

5. *${prefix}listblock*
Cek nomor yang diblokir.
Aliases: -
Usage: *${prefix}listblock*

6. *${prefix}ping*
Cek speed bot.
Aliases: *p*
Usage: *${prefix}ping*

7. *${prefix}delete*
Hapus pesan dari bot.
Aliases: *del*
Usage: Reply pesan yang dihapus dengan caption *${prefix}delete*.

8. *${prefix}report*
Laporkan bug ke dev.
Aliases: -
Usage: *${prefix}report* pesan

9. *${prefix}tos*
Syarat dan ketentuan. (TOS)
Aliases: -
Usage: *${prefix}tos*

10. *${prefix}join*
Join grup via link.
Aliases: -
Usage: *${prefix}join* link_group

11. *${prefix}contactowner*
Mengirim kontak owner.
Aliases: -
Usage: *${prefix}contactowner*

12. *${prefix}igowner*
Mengirim instagram owner.
Aliases: -
Usage: *${prefix}igowner*

13. *${prefix}getpic*
Mengirim foto profil user.
Aliases: -
Usage: *${prefix}getpic* @user/62812xxxxxxxx

14. *${prefix}premiumcheck*
Cek masa aktif premium.
Aliases: *cekpremium*
Usage: *${prefix}premiumcheck*

15. *${prefix}premiumlist*
Cek list user premium.
Aliases: *listpremium*
Usage: *${prefix}premiumlist*

_Halaman [2]_
    `
}

exports.menuMaker = () => {
    return `
-----[ MENU MAKER ]-----
1. *${prefix}phcomment*
Membuat capton ala PH comment.
Aliases: -
Usage: *${prefix}phcomment* username | teks

2. *${prefix}water*
Membuat gambar water teks
Aliases: water text
Usage: *${prefix}waterr* teks_nya

3. *${prefix}metal*
Membuat gambar metal teks.
Aliases: *metaltext*
Usage: *${prefix}metal* teks_nya

4. *${prefix}thunder*
Membuat gambar thunder teks.
Aliases: *petirtext*
Usage: *${prefix}thunder* teks_nya

5. *${prefix}silk*
Membuat gambar kain sutra teks.
Aliases: *silktext*
Usage: *${prefix}silk* teks_nya

6. *${prefix}romantis*
Membuat gambar romantis teks.
Aliases: *romantistext*
Usage: *${prefix}romantis* teks_nya

7. *${prefix}glow*
Membuat gambar glow teks.
Aliases: *glowtext*
Usage: *${prefix}glow* teks_nya

8. *${prefix}love*
Membuat gambar love teks.
Aliases: *lovetext*
Usage: *${prefix}love* teks_nya

9. *${prefix}padlock*
Membuat gambar gembok cinta.
Aliases: *gemboktext*
Usage: *${prefix}padlock* teks1 | teks2

10. *${prefix}gugel*
Membuat gambar gugel search.
Aliases: *gugeltext*
Usage: *${prefix}gugel* teks_atas | teks_tengah | teks_bawah

11. *${prefix}readmore*
Generate teks baca selengkapnya.
Aliases: -
Usage: *${prefix}readmore* teks1 | teks2

12. *${prefix}gamelogo*
Membuat gambar teks game logo random.
Aliases: -
Usage: *${prefix}gamelogo* teks

13. *${prefix}firemaker*
Membuat gambar teks fire.
Aliases: -
Usage: *${prefix}firemaker* teks

14. *${prefix}party*
Membuat gambar party teks.
Aliases: *partytext*
Usage: *${prefix}party* teks

15. *${prefix}balloonmaker*
Membuat gambar couple balloon.
Aliases: *blmaker*
Usage: *${prefix}balloonmaker* nama1 | nama2

16. *${prefix}sliding*
Membuat GIF sliding text.
Aliases: -
Usage: *${prefix}sliding* teks

17. *${prefix}wasted*
Membuat gambar Wasted GTA V.
Aliases: -
Usage: Upload foto dengan caption *${prefix}wasted*

18. *${prefix}hartatahta*
Membuat gambar Harta Tahta Nama.
Aliases: -
Usage: *${prefix}hartatahta* nama

19. *${prefix}nulis*
Membuat catatan tulisan di buku.
Aliases: -
Usage: *${prefix}nulis* teks

20. *${prefix}glitchtext*
Membuat gambar teks glitch.
Aliases: *glitext*
Usage: *${prefix}glitchtext* teks1 | teks2

21. *${prefix}blackpink*
Membuat teks dengan style logo Blackpink.
Aliases: -
Usage: *${prefix}blackpink* teks

22. *${prefix}phmaker*
Membuat teks dengan style logo Pornhub.
Aliases: -
Usage: *${prefix}phmaker* teks_kiri | teks_kanan

23. *${prefix}galaxy*
Membuat gambar teks galaxy.
Aliases: -
Usage: *${prefix}galaxy* teks

24. *${prefix}triggered*
Membuat efek triggered.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}triggered* atau reply gambar dengan *${prefix}triggered* atau bisa gunakan command *${prefix}triggered* langsung.

25. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}kiss* atau reply gambar dengan *${prefix}kiss*.

26. *${prefix}mlmaker*
Membuat gambar karakter hero ML dengan teks.
Aliases: -
Usage: *${prefix}mlmaker* nama_hero | teks

27. *${prefix}ffbanner*
Membuat banner Free Fire.
Aliases: -
Usage: *${prefix}ffbanner* teks1 | teks2

28. *${prefix}fflogo*
Membuat logo karakter Free Fire.
Aliases: -
Usage: *${prefix}fflogo* teks1 | teks2

_Halaman [3]_
    `
}

exports.menuMedia = () => {
    return `
-----[ MENU MEDIA ]-----

1. *${prefix}lirik*
Mencari lirik lagu.
Aliases: -
Usage: *${prefix}lirik* judul_lagu

2. *${prefix}wikipedia*
Mengirim Wikipedia dari teks yang diberikan.
Aliases: *wiki*
Usage: *${prefix}wikipedia* teks

3. *${prefix}kbbi*
Mengirim definisi kata dari KBBI.
Aliases: -
Usage: *${prefix}kbbi* teks

4. *${prefix}igstalk*
Stalk akun Instagram.
Aliases: -
Usage: *${prefix}igstalk* username

5. *${prefix}gsmarena*
Mengirim info spesifikasi HP dari GSMArena.
Aliases: -
Usage: *${prefix}gsmarena* model_hp

6. *${prefix}receipt*
Mengirim resep makanan.
Aliases: *resep*
Usage: *${prefix}receipt* nama_makanan

7. *${prefix}ytsearch*
Mengirim hasil pencarian di YouTube.
Aliases: *yts*
Usage: *${prefix}ytsearch* query

8. *${prefix}distance*
Untuk mengetahui jarak dari kotamu ke kota yang kamu tuju
Aliases: -
Usage: *${prefix}distance* kota_asal | kota_tujuan

9. *${prefix}findsticker*
Untuk mencari sticker yang kamu cari
Aliases: *findstiker*
Usage: *${prefix}findsticker* teks

10. *${prefix}math*
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian
Aliases: -
Usage: *${prefix}math* 12*12

11. *${prefix}listsurah*
Melihat list surah Al-Qur'an.
Aliases: -
Usage: *${prefix}listsurah*

12. *${prefix}surah*
Mengirim surah Al-Qur'an.
Aliases: -
Usage: *${prefix}surah* nomor_surah

13. *${prefix}js*
Mengetahui jadwal shalat di daerah kalian
Aliases: -
Usage: *${prefix}js* namadaerah

14. *${prefix}whois*
IP look-up.
Aliases: -
Usage: *${prefix}whois* ip_address

15. *${prefix}play*
Play audio dari YouTube.
Aliases: -
Usage: *${prefix}play* judul_video

16. *${prefix}sms*
Mengirim SMS secara anonymous. (SMS gateway)
Aliases: -
Usage: *${prefix}sms* pesan | nomor_penerima

17. *${prefix}tafsir*
Tafsir ayat surah Al-Qur'an.
Aliases: -
Usage: *${prefix}tafsir* Al-Mulk 10

18. *${prefix}alkitab*
Al-Kitab search.
Aliases: -
Usage: *${prefix}alkitab* nama_injil

19. *${prefix}cekongkir*
Cek ongkos kirim.
Aliases: -
Usage: *${prefix}ongkir* kurir | asal | tujuan

20. *${prefix}movie*
Cari film.
Aliases: -
Usage: *${prefix}movie* judul

21. *${prefix}infohoax*
Cek update info hoax.
Aliases: -
Usage: *${prefix}infohoax*

22. *${prefix}trending*
Cek trending di Twitter.
Aliases: -
Usage: *${prefix}trending*

23. *${prefix}jobseek*
Mencari info lowongan kerja.
Aliases: -
Usage: *${prefix}jobseek*

24. *${prefix}playstore*
Mencari aplikasi di playstore
Aliases: -
Usage: *${prefix}playstore* nama_game

25. *${prefix}gempa*
Info gempa terbaru
Aliases: -
Usage: *${prefix}gempa*

26. *${prefix}brainly*
Car jawaban di brainly
Aliases: -
Usage: *${prefix}brainly* teks

27. *${prefix}call*
call nomer.
Aliases: -
Usage: *${prefix}call* 812xxxxxxxx

28. *${prefix}spamsms*
Spam SMS.
Aliases: -
Usage: *${prefix}spamsms* 0812xxxxxxxx jumlah_pesan

29. *${prefix}email*
Mengirim email secara anonymous.
Aliases: -
Usage: *${prefix}email* email_target | subjek | pesan_email

30. *${prefix}shortlink*
Membuat shortlink.
Aliases: -
Usage: *${prefix}shortlink* link

31. *${prefix}imagetourl*
Image uploader.
Aliases: *imgtourl*
Usage: Kirim gambar dengan caption *${prefix}imagetourl* atau reply gambar dengan caption *${prefix}imagetourl*.

32. *${prefix}pinterestsearch*
Search image from pinterest
Aliases: -
Usage: *${prefix}pinterest* naruto

33. *${prefix}pinterestdl*
Mendownload image from pinterest
Aliases: -
Usage: *${prefix}pinterestdl* link

33. *${prefix}prediksicuaca*
prediksi cuaca kota
Aliases: -
Usage: *${prefix}prediksicuaca* nama_kota

34. *${prefix}shopee*
mencari barang di shoope
Aliases: -
Usage: *${prefix}shopee* nama_barang | 3

35. *${prefix}jadwaltvnow*
mencari jadwal tv sekarang
Aliases: -
Usage: *${prefix}jadwaltvnow*

36. *${prefix}jadwaltv channel*
mencari jadwal tv channel
Aliases: -
Usage: *${prefix}jadwaltv* mnctv

37. *${prefix}corona*
info corona virus
Aliases: -
Usage: *${prefix}corona* negara

38. *${prefix}translate*
Terjemahkan text.
Aliases: *trans*
Usage: *${prefix}translate* teks | kode_bahasa

_Halaman [4]_
    `
}

exports.menuSticker = () => {
    return `
-----[ MENU STICKER ]-----

1. *${prefix}sticker*
Membuat stiker dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}sticker* atau reply gambar dengan caption *${prefix}sticker*.

2. *${prefix}stickergif*
Membuat stiker dari video MP4 atau GIF yang dikirim atau di-reply.
Aliases: *stikergif*
Usage: Kirim video/GIF dengan caption *${prefix}stickergif* atau reply video/GIF dengan caption *${prefix}stickergif*.

4. *${prefix}takestick*
Merubah watermark sticker.
Aliases: -
Usage: Reply stiker dengan caption *${prefix}takestick* pack_name | author

5. *${prefix}ttg*
Membuat stiker text to GIF.
Aliases: -
Usage: *${prefix}ttg* teks

6. *${prefix}stickertoimg*
Konversi stiker ke foto.
Aliases: *stikertoimg toimg*
Usage: Reply sticker dengan caption *${prefix}stickertoimg*.

7. *${prefix}emojisticker*
Konversi emoji ke stiker.
Aliases: *emojistiker*
Usage: *${prefix}emojisticker* emoji

8. *${prefix}stickerwm*
Buat stiker dengan WM.
Aliases: *stcwm*
Usage: Kirim gambar dengan caption *${prefix}stickerwm* pack_name | author_name atau reply gambar dengan caption *${prefix}stickerwm* pack_name | author_name.

9. *${prefix}stickermeme*
Buat sticker meme.
Aliases: *stcmeme*
Usage: Kirim gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah atau reply gambar dengan caption *${prefix}stickermeme* teks_atas | teks_bawah.

10. *${prefix}stickerp*
Membuat stiker full layar dari gambar yang dikirim atau di-reply.
Aliases: *stiker*
Usage: Kirim gambar dengan caption *${prefix}stickerp* atau reply gambar dengan caption *${prefix}stickerp*.

11. *${prefix}linesticker*
Sticker Line terbaru.
Aliases: *linestiker*
Usage: *${prefix}linesticker*

_Halaman [5]_
    `
}

exports.menuWeeaboo = () => {
    return `
-----[ MENU WEEABOO ]-----

1. *${prefix}neko*
Mengirim foto neko girl.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Mengirim wallpaper anime.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Mengirim foto kemonomimi girl.
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}kusonime*
Mencari info anime dan link download batch di Kusonime.
Aliases: -
Usage: *${prefix}kusonime* judul_anime

5. *${prefix}komiku*
Mencari info manga dan link download di Komiku.
Aliases: -
Usage: *${prefix}komiku* judul_manga

6. *${prefix}wait*
Mencari source anime dari screenshot scene.
Aliases: -
Usage: Kirim screenshot dengan caption *${prefix}wait* atau reply screenshot dengan caption *${prefix}wait*.

7. *${prefix}source*
Mencari source dari panel doujin, ilustrasi, dan gambar yang berhubungan dengan anime.
Aliases: *sauce*
Usage: Kirim gambar dengan caption *${prefix}source* atau reply gambar dengan caption *${prefix}source*.

8. *${prefix}waifu*
Mengirim random foto waifu.
Aliases: -
Usage: *${prefix}waifu*

9. *${prefix}anitoki*
Cek update terbaru Anitoki.
Aliases: -
Usage: *${prefix}anitoki*

10. *${prefix}neonime*
Cek update terbaru Neonime.
Aliases: -
Usage: *${prefix}neonime*

11. *${prefix}anoboy*
Cek on-going anime dari Anoboy.
Aliases: -
Usage: *${prefix}anoboy*

12. *${prefix}randomloli*
Random image loli
Aliases: -
Usage: *${prefix}randomloli*

_Halaman [6]_
    `
}

exports.menuFun = () => {
    return `
-----[ MENU FUN ]-----
1. *${prefix}ngomong*
Bot akan mengulang pesan mu.
Aliases: -
Usage: *${prefix}ngomong* teks

3. *${prefix}partner*
Weton jodoh.
Aliases: *pasangan*
Usage: *${prefix}partner* nama | pasangan

4. *${prefix}zodiac*
Ramalan zodiak Mingguan.
Aliases: *zodiak*
Usage: *${prefix}zodiac* zodiak

5. *${prefix}tts*
Membuat Text to Speech. Kalian perlu kode bahasa setiap menggunakan, cek di sini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2
Aliases: -
Usage: *${prefix}tts* kode_bahasa | teks

6. *${prefix}simi*
Chat dengan simi
Aliases: -
Usage: *${prefix}simi* teks

7. *${prefix}tod*
Bermain truth or dare.
Aliases: -
Usage: *${prefix}tod*

8. *${prefix}weton*
Kirim ramalan weton.
Aliases: -
Usage: *${prefix}weton* tanggal | bulan | tahun

9. *${prefix}asupan*
Asupan video cewek-cewek.
Aliases: -
Usage: *${prefix}asupan*

10. *${prefix}chika*
Asupan video chika.
Aliases: -
Usage: *${prefix}chika*

11. *${prefix}citacita*
Meme cita-cita.
Aliases: -
Usage: *${prefix}citacita*

12. *${prefix}afk*
Set akun kamu ke mode AFK, aku akan mengirim pesan ke orang yang me-mention kamu.
Aliases: -
Usage: *${prefix}afk* alasan. Kirim pesan ke grup untuk menonaktifkan mode AFK.

13. *${prefix}toxic*
Random toxic.
Aliases: -
Usage: *${prefix}toxic*

14. *${prefix}caklontong*
Kuis bersama caklontong
Aliases: -
Usage: *${prefix}caklontong*

15. *${prefix}mutual*
Dapatkan kontak WA random.
Aliases: -
Usage: *${prefix}mutual*

16. *${prefix}reminder*
Pengingat.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}reminder* 10s | pesan_pengingat

17. *${prefix}motivasi*
Kata-kata motivasi.
Aliases: -
Usage: *${prefix}motivasi*

18. *${prefix}tebakgambar*
Kuis tebak gambar
Aliases: -
Usage: *${prefix}tebakgambar*

19. *${prefix}family100*
Kuis bersama mister tukul
Aliases: survei membuktikan.
Usage: *${prefix}family100*

20. *${prefix}randompantun*
Random pantun
Aliases: -
Usage: *${prefix}randompantun*

21. *${prefix}randomquotesid*
Random quotes indonesia
Aliases: -
Usage: *${prefix}randomquotesid*

22. *${prefix}randomquotes*
Random quotes English
Aliases: -
Usage: *${prefix}randomquotes*

23. *${prefix}puisigambar*
Random puisi gambar
Aliases: -
Usage: *${prefix}puisigambar*

24. *${prefix}asci*
Random text ASCI
Aliases: -
Usage: *${prefix}asci*

25. *${prefix}cersex*
Random cerita sex
Aliases: -
Usage: *${prefix}cersex*

26. *${prefix}ramalnama*
Meramal nama
Aliases: -
Usage: *${prefix}ramalnama* zaki

27. *${prefix}hilih*
Replace beberapa huruf menjadi i.
Aliases: -
Usage: *${prefix}hilih* teks

28. *${prefix}trash*
image manipulation sampah
Aliases: -
Usage: *${prefix}trash* @tagmember

29. *${prefix}hitler*
image manipulation masuk berita
Aliases: -
Usage: *${prefix}hitler* @tagmember

30. *${prefix}gaul*
Replace huruf menjadi teks gaul.
Aliases: -
Usage: *${prefix}gaul* gua ganteng

31. *${prefix}cerpen*
Random cerpen
Aliases: -
Usage: *${prefix}cerpen*

32. *${prefix}creepyfact*
Random creepyfact
Aliases: -
Usage: *${prefix}creepyfact*

33. *${prefix}puisi*
Random puisi
Aliases: -
Usage: *${prefix}puisi*

34. *${prefix}genshininfo*
Kirim info karakter Genshin Impact.
Aliases: *genshin*
Usage: *${prefix}genshininfo* nama_karakter

_Halaman [7]_
    `
}

exports.menuModeration = () => {
    return `
-----[ MENU ADMIN ]-----

1. *${prefix}add*
Menambah user ke dalam group.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Mengeluarkan member dari grup.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member menjadi admin.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member dari admin.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
Bot akan meninggalkan grup.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}tagall*
tag semua member group.
Aliases: -
Usage: *${prefix}everyone*

7. *${prefix}nsfw*
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: *${prefix}nsfw* enable/disable

8. *${prefix}groupicon*
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption *${prefix}groupicon* atau reply gambar dengan caption *${prefix}groupicon*.

9. *${prefix}antilink*
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: *${prefix}antilink* enable/disable

10. *${prefix}welcome*
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: *${prefix}welcome* enable/disable

11. *${prefix}autosticker*
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

12. *${prefix}antinsfw*
Mematikan/menyalakan fitur anti-NSFW link.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

13. *${prefix}admin*
list admin group
Aliases: -
Usage: *${prefix}admin*

_Halaman [8]_
    `
}

exports.menuNsfw = () => {
    return `
-----[ MENU NSFW (+18) ]-----

1. *${prefix}lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nhentai*
Mengirim info doujinshi dari nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* kode

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* kode

5. *${prefix}nekopoi*
Mengirim video link Nekopoi terbaru.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Mengirim fetish pics.
Aliases: -
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download video dari Pornhub.
Aliases: -
Usage *${prefix}phdl* link

10. *${prefix}yuri*
Mengirim random foto lewd yuri.
Aliases: -
Usage: *${prefix}yuri*

11. *${prefix}lewdavatar*
Mengirim random avatar lewd.
Aliases: -
Usage: *${prefix}lewdavatar*

12. *${prefix}femdom*
Mengirim random foto ero femdom.
Aliases: -
Usage: *${prefix}femdom*

13. *${prefix}nhsearch*
nHentai search.
Aliases: -
Usage: *${prefix}nhsearch* query

14. *${prefix}nekosearch*
Nekopoi search.
Aliases: -
Usage: *${prefix}nekosearch* query

15. *${prefix}xxxsearch*
xtube search.
Aliases: -
Usage: *${prefix}xxxsearch* query

16. *${prefix}xxxdl*
xxx download.
Aliases: -
Usage: *${prefix}xxxdl* link_video

_Halaman [9]_
    `
}

exports.menuOwner = () => {
    return `
-----[ OWNER ]-----
Halo *Owner-XBot*

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks>

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Mengambil screenshot sesi dari akun bot.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate kode JavaScript.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

10. *${prefix}serial*
Cek pendaftaran akun via serial.
Aliases: -
Usage: *${prefix}serial* serial_user

11. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute semua user.
Aliases: -
Usage: Gunakan *${prefix}mute* untuk mute dan gunakan *${prefix}mute* kembali untuk unmute.

13. *${prefix}setname*
Mengganti username bot. Maksimal 25 huruf.
Aliases: -
Usage: *${prefix}name* username_baru

_Halaman [10]_
    `
}

exports.menuLeveling = () => {
    return `
-----[ MENU LEVELING ]-----

1. *${prefix}level*
Untuk melihat level kamu.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

3. *${prefix}setbackground*
Set background level card.
Aliases: *setbg*
Usage: Kirim gambar dengan caption *${prefix}setbackground* atau reply gambar dengan caption *${prefix}setbackground*.

_Halaman [11]_
    `
}

exports.rules = () => {
    return `
-----[ RULES ]-----

1. Jangan Spam Bot.
Sanksi: *WARN/SOFT BLOCK*

2. Jangan Telepon Bot.
Sanksi: *SOFT BLOCK*

3. Jangan Mengeksploitasi Bot.
Sanksi: *PERMANENT BLOCK*

Jika Sudah Dipahami Peraturan-nya, Silahkan Ketik *${prefix}menu* Untuk Memulai!

    `
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
-----[ TERMS OF SERVICE ]-----


Contact Person:
wa.me/628501098371 (Owner)
wa.me/6281294958473 (Dev)

Kalian Juga Bisa Mendukung Saya Agar Bot Ini Tetap Up To Date Dengan:
089501098371 (OVO/DANA/GoPay)

Terima Kasih!

XBot.
    `
}
