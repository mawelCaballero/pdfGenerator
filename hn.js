const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await 
page.goto('http://mawel.name/', 
{waitUntil: 'networkidle2'});
  await page.pdf({path: 'ManuelCaballeroCV.pdf', format: 'A4', printBackground : true, margin: { top: 30 , bottom: 30 },
  pageRanges: '1-5'});

  await browser.close();
})();
