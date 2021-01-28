const { fetchText, fetchJson } = require('../tools/fetcher')
const config = require('../config.json')

/**
 * Get hilih text.
 */
const hilihteks = (query) => new Promise((resolve, reject) => {
    console.log(`Getting Hilih teks from: ${query}...`)
    fetchJson(`https://videfikri.com/api/hilih?query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Get Shopee search results.
 * @param {String} query
 * @param {String} count
 * @returns {Object}
 */
const shopee = (query, count) => new Promise((resolve, reject) => {
    console.log(`Get Shopee search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/shopee?query=${query}&count=${count}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Fortune-telling about you and your partner.
 * @param {String} name
 * @param {String} partner
 * @returns {Object}
 */
const pasangan = (name, partner) => new Promise((resolve, reject) => {
    console.log(`Checking fortune for ${name} and ${partner}...`)
    fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${name}&pasangan=${partner}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weekly zodiac fortune.
 * @param {String} zodiac
 * @returns {Object}
 */
const zodiak = (zodiac) => new Promise((resolve, reject) => {
    console.log(`Get weekly zodiac fortune for ${zodiac}...`)
    fetchJson(`https://api.vhtear.com/zodiak?query=${zodiac}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Chat with SimiSimi.
 * @param {String} chat
 * @returns {Object}
 */
const simi = (chat) => new Promise((resolve, reject) => {
    console.log('Get response from SimSumi...')
    fetchJson(`https://videfikri.com/api/simsimi?teks=${chat}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get truth.
 * @returns {String}
 */
const truth = () => new Promise((resolve, reject) => {
    console.log('Get random truth...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get dare.
 * @returns {String}
 */
const dare = () => new Promise((resolve, reject) => {
    console.log('Get random dare...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get weton fortune.
 * @param {String} date
 * @param {String} month
 * @param {String} year
 * @returns {Object}
 */
const weton = (date, month, year) => new Promise((resolve, reject) => {
    console.log('Get weton data...')
    fetchJson(`https://api.vhtear.com/ramalweton?tgl=${date}&bln=${month}&thn=${year}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Get fresh videos from TikTok.
 * @returns {String}
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
* GET VIDEO CHIKA FROM TIKTOK
* @returns {String}
*/
const chika = () => new Promise((resolve, reject) => {
    console.log('Sedang Mengambil data video..')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/chika/main/chika.txt')
    .then((result) => resolve(result))
    .catch((err) => reject(err))
})

/**
 * Get random cita-cita meme.
 * @returns {String}
 */
const cita = () => new Promise((resolve, reject) => {
    console.log('Get random cita-cita...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Getting caklontong quiz.
 */
const caklontong = () => new Promise((resolve, reject) => {
    console.log('Getting caklontong quiz...')
    fetchJson(`https://api.vhtear.com/funkuis&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * branly search
 * @param {String} query
 * @returns {Object}
 */
const brainly = (query) => new Promise((resolve, reject) => {
    console.log(`Get answer brainly for ${query}...`)
    fetchJson(`https://api.vhtear.com/branly?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * get random pantun
 * @returns {Object}
 */
const pantun = () => new Promise((resolve, reject) => {
    console.log('Get random pantun')
    fetchJson(`https://api.vhtear.com/random_pantun&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * get random pantun
 * @returns {Object}
 */
const quotesid = () => new Promise((resolve, reject) => {
    console.log('Get random pantun id')
    fetchJson(`https://api.vhtear.com/quoteid&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * get random pantun
 * @returns {Object}
 */
const quotesen = () => new Promise((resolve, reject) => {
    console.log('Get random quotes en ')
    fetchJson(`https://api.vhtear.com/quotes?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * get asci text
 *
 * @returns {Object}
 */
const asci = () => new Promise((resolve, reject) => {
    console.log('Get asci text ')
    fetchJson(`https://api.vhtear.com/textscreen?query=VHtear&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Get tebakgambar quiz.
 */
const tbkgmbr = () => new Promise((resolve, reject) => {
    console.log('Getting tebakgambar quiz...')
    fetchJson(`http://videfikri.com/api/tebakgambar/`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Getting family quiz.
 */
const family = () => new Promise((resolve, reject) => {
    console.log('Getting family quiz...')
    fetchJson(`https://api.vhtear.com/family100&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Get Indonesian word definition from KBBI (Kamus Besar Bahasa Indonesia).
 * @param {String} word
 * @returns {Object}
 */
const ramalnama = (word) => new Promise((resolve, reject) => {
    console.log(`ramal arti nama...${word}`)
    fetchJson(`https://api.vhtear.com/artinama?nama=${word}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})
/**
 * Getting family quiz.
 */
const cersex = () => new Promise((resolve, reject) => {
    console.log('Getting cersex')
    fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
    pasangan,
    zodiak,
    simi,
    truth,
    brainly,
    dare,
    chika,
    weton,
    asupan,
    cita,
    caklontong,
    quotesid,
    quotesen,
    pantun,
    asci,
    tbkgmbr,
    family,
    ramalnama,
    hilihteks,
    cersex,
    shopee
}
