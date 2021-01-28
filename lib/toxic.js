module.exports = toxic = () => {
    const kata = [
        'babi',
        'monyet',
        'anjing',
        'tolol',
        'jembut',
        'memek',
        'kontol',
        'tempik',
        'bangsat',
        'ngentot',
        'goblog',
        'pepek'
    ]
    const randKata = kata[Math.floor(Math.random() * kata.length)]
    const list = [
      `muka lo kek ${randKata}`, `anda tau ${randKata} ?`,`sini lo ${randKata}`,`${randKata} Lo ${randKata}`,
      `ngapa ${randKata} ga seneng?`,`ribut sini lo ${randKata}`,`jangan ngakak lo ${randKata}`,
      `woy ${randKata}!!`,`aku sih owh aja ya ${randKata}`,`ga seneng send lokasi lo ${randKata}`,
      `capek w ${randKata}`, `coli bareng ayo ${kata[7]} ?`, `w tw lo itu ${randKata}`,
      `gw ganteng lo kek ${randKata}`,`bucin lo ${randKata}`,
      `najis baperan kek ${randKata}`,
      `nge-teh ${randKata}`,`gaya lo sok iye, mukalo kek ${randKata}`,`${randKata} awokwowkok`
    ]
    return list[Math.floor(Math.random() * list.length)]
}

//created by piyo
