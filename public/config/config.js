function getCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    return currentPage || 'index';
}

const createMetaElements = (metaArray) => {
    metaArray.forEach(({ name, content }) => {
        const metaElement = Object.assign(document.createElement('meta'), { name, content });
        document.head.appendChild(metaElement);
    });
};

const createLinkElements = (linkArray) => {
    linkArray.forEach(({ rel, href, options = {} }) => {
        const linkElement = Object.assign(document.createElement('link'), { rel, href, ...options });
        document.head.appendChild(linkElement);
    });
};

const pageConfig = {
    common: {
        links: [
            { rel: 'manifest', href: '/src/manifest.json' },
            { rel: 'canonical', href: page_url}, //page_url must be set in every created page and should be placed above <script src="./config/config.js"></script>
            { rel: 'icon', href: '/src/image/icon.svg'},
            { rel: 'stylesheet', href: '/src/css/style.css'},
            // Add other elements here
        ],
        meta: [
            { name: 'theme-color', content:'#4285F4'},
            { name: 'msapplication-navbutton-color', content:'#4285F4'},
            { name: 'keywords', content:'Youtube, Youtube Count Playlist, Playviews View Count, How To count all video on youtube playlist?'},
            // Add other elements here
        ],
    },
    index: {
        title: 'Fast & Easy YouTube Playlist Counter - playV',
        meta: [
            { name: 'robots', content: 'index,follow' },
            { name: 'description', content: 'Counting all the videos in a YouTube playlist quickly'},
            // Add other elements here
        ],
        links: [
            // Add other elements here
        ],
    },
    about: {
        title: 'About PlayV',
        meta: [
            { name: 'robots', content: 'noindex' },
            { name: 'description', content: 'Counting all the videos in a YouTube playlist quickly'},
            // Add other elements here
        ],
        links: [
            // Add other elements here
        ],
    },
    help: {
        title: 'PlayV Help Center',
        meta: [
            { name: 'robots', content: 'noindex' },
            { name: 'description', content: 'Counting all the videos in a YouTube playlist quickly'},
            // Add other elements here
        ],
        links: [
            // Add other elements here
        ],
    },
    contact: {
        title: 'PlayV Contact',
        meta: [
            { name: 'robots', content: 'noindex' },
            { name: 'description', content: 'Counting all the videos in a YouTube playlist quickly'},
            // Add other elements here
        ],
        links: [
            // Add other elements here
        ],
    },
};

const currentPage = getCurrentPage();
const currentConfig = pageConfig[currentPage];

if (currentConfig && currentConfig.title) {
    const titleElement = document.createElement('title');
    titleElement.innerText = currentConfig.title;
    document.head.appendChild(titleElement);
}

createMetaElements(pageConfig.common.meta);
createLinkElements(pageConfig.common.links);

createMetaElements(currentConfig.meta);
createLinkElements(currentConfig.links);
