const { defineTmHeader } = require('@himeka/vite-userscript')
const { sites } = require('@himeka/booru')

const blackList = new Set(['e621.net', 'e926.net', 'hypnohub.net', 'derpibooru.org'])

module.exports = defineTmHeader({
  "name": "Booru Mobile Safari",
  "name:zh": "Booru 手机瀑布流",
  "name:en": "Booru Mobile Safari",
  "namespace": "me.aiza2a.boorumobilesafari",
  "author": "asadahimeka, aiza2a",
  "description": "面向 iPhone Safari 的 Yande.re、Konachan、Danbooru、Gelbooru 瀑布流与快速分享",
  "description:zh": "面向 iPhone Safari 的 Yande.re、Konachan、Danbooru、Gelbooru 瀑布流与快速分享",
  "description:en": "Mobile-first masonry browsing and native sharing for Yande.re, Konachan, Danbooru and Gelbooru.",
  "homepage": "https://github.com/aiza2a/yandere-masonry",
  "source": "https://github.com/aiza2a/yandere-masonry",
  "icon": "https://img.nagi.xx.kg/file/github:github_1783748006551_qtg8z0.png",
  "license": "MIT",
  "match": [
    ...Object.entries(sites).filter(([e]) => !blackList.has(e)).map(([k, v]) => `http${v.insecure ? '' : 's'}://${k}/*`),
    'https://e-shuushuu.net/*',
    'https://www.zerochan.net/*',
    'https://sankaku.app/*',
    'https://chan.sankakucomplex.com/*',
    'https://www.sankakucomplex.com/*',
    'https://www.idolcomplex.com/*',
    'https://anime-pictures.net/*',
    'https://allgirl.booru.org/*',
    'https://booru.eu/*',
    'https://kusowanka.com/*',
    'https://anihonetwallpaper.com/*',
    'https://nozomi.la/*',
    'https://rule34hentai.net/*'
  ],
  "supportURL": "https://github.com/aiza2a/yandere-masonry/issues",
  "run-at": "document-end",
})
