const http = require('http');
const puppeteer = require('puppeteer');

const blockedWebsites = ['youtube.com', 'tiktok.com'];

async function monitorTabs(browser) {
  browser.on('targetcreated', async target => {
    const page = await target.page();
    if (page) {
      page.on('framenavigated', async frame => {
        const url = frame.url();
        if (blockedWebsites.some(site => url.includes(site))) {
          console.log(`Closing tab with URL: ${url}`);
          await page.close();
        }
      });
    }
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  await monitorTabs(browser);

  const server = http.
  createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running and monitoring browser tabs.\n');
  });

  console.log('Proxy server running on port 8000');
  server.listen(9000);
})();
