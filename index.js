// in a new folder be sure to run "npm init -y" and "npm install puppeteer"
const puppeteer = require("puppeteer")
const fs = require("fs/promises")

async function start() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://www.espn.com/nfl/player/stats/_/id/2580/drew-brees")
  
  const saintsTotalsString = await page.evaluate(() => {
    // DEEP SEEDED DESCENDENT PROPERTY INDICATES AVENUE TO DESIRED OBJECT
let fleurDeLis = document.querySelector('img[Title=NO]'); // DESCENDENT

// OVERSHOOT DESIRED ASCENDENT TO REPELL FROM HIGHER ASCENDENT'S ARRAY OF CHILDREN
let column = Array.from(fleurDeLis.closest('table').rows); // ANCESTOR AVENUE

// REPELL FROM HIGHER ASCENDENT TO DESIRED OBJECT'S VALUE
let saintsRow = column.indexOf(fleurDeLis.closest('tr')); // ASCENDENT 

// SELECT ASSOCIATED DATA IN SIBLING COLGROUP
let gpTh = document.querySelector('th[Title="Games Played"]'); // DESCENDENT

let gpThead = gpTh.closest('thead'); // ANCESTOR

let gpTheadChildren = Array.from(gpThead.firstChild.children); // ANCESTOR AVENUE

let gpIndex = gpTheadChildren.indexOf(gpTh); // ASCENDENT 

// SELECT DATA RANGE IN COLGROUP'S SIBLING TBODY
  
let relativeTbody = Array.from(gpThead.nextSibling.children); // PROVIDES ARRAY OF TR ELEMENTS

// ENTER EACH TR AND SELECT DESIRED TD
let relativeTbodyColumn = relativeTbody.map((row) => +row.firstChild.innerText) // firstChild WILL BE REPLACED VARIABLE THAT'S SET TO THE INDEX OF THE DESIRED COLUMN

// MAKE AN ARRAY OF THE DESIRED TR TD'S
let saintsRows = relativeTbodyColumn.slice(saintsRow-1, -1)

// ADD 'EM ALL UP
let saintsTotals = saintsRows.reduce((previous, current) => previous + current);
console.log(saintsTotals);
let saintsTotalsString = saintsTotals.toString();
return saintsTotalsString
  })
  await fs.writeFile("saintsTotals.txt", saintsTotalsString)

  /*
  await page.click("#clickme")
  const clickedData = await page.$eval("#data", el => el.textContent)
  console.log(clickedData)

  const photos = await page.$$eval("img", imgs => {
    return imgs.map(x => x.src)
  })

  await page.type("#ourfield", "blue")
  await Promise.all([page.click("#ourform button"), page.waitForNavigation()])
  const info = await page.$eval("#message", el => el.textContent)

  console.log(info)

  for (const photo of photos) {
    const imagepage = await page.goto(photo)
    await fs.writeFile(photo.split("/").pop(), await imagepage.buffer())
  }
*/
  await browser.close()
}

start()