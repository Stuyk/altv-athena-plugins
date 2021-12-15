const glob = require('glob');
const fs = require('fs')
const fm = require('front-matter')
const path = require('path');

const KEYWORDS = {
    CLIENT: 'client',
    DATA: 'data',
    FREE: 'free',
    INTERFACE: 'interface',
    ITEM: 'item',
    PLAYER: 'player',
    PREMIUM: 'premium',
    SERVER: 'server',
    STREAMER: 'streamer',
    SYSTEM: 'system',
    TOOL: 'tool',
    UTILITY: 'utility',
    VEHICLE: 'vehicle',
    VOICE: 'voice',
}

const pages = [];

glob('src/pages/content/plugins/**/*.md', (err, _files) => {
    for(let i = 0; i < _files.length; i++) {
        const matter = fm(fs.readFileSync(_files[i], 'utf-8'));
        const attributes = matter.attributes;

        attributes.path = _files[i].replace('src/pages/', '').replace('src\\pages\\', '').replace('.md', '');

        if (attributes.layout !== '../../../../layouts/Main.astro') {
            console.warn(`Failed to specify 'layout' for: ${_files[i]}`);
            process.exit(1);
        }

        if (!attributes.title) {
            console.warn(`Failed to specify 'title' for: ${_files[i]}`);
            process.exit(1);
        }

        if (!attributes.description) {
            console.warn(`Failed to specify 'description' for: ${_files[i]}`);
            process.exit(1);
        }

        if (!attributes.author) {
            console.warn(`Failed to specify 'author' for: ${_files[i]}`);
            process.exit(1);
        }

        if (!attributes.version) {
            console.warn(`Failed to specify 'version' for: ${_files[i]}`);
            process.exit(1);
        }

        if (!attributes.images || !Array.isArray(attributes.images) || attributes.images.length <= 0) {
            console.warn(`Failed to specify 'images' or no images for: ${_files[i]}`);
            process.exit(1);
        }

        if (!attributes.url) {
            console.warn(`Failed to specify 'url' for: ${_files[i]}`);
            process.exit(1);
        }

        if (!attributes.keywords || !Array.isArray(attributes.keywords) || attributes.keywords.length <= 0) {
            console.warn(`Failed to specify 'keywords' or no keywords for: ${_files[i]}`);
            process.exit(1);
        }

        const values = Object.values(KEYWORDS);
        let validKeywords = true;

        for(let i = 0; i < attributes.keywords.length; i++) {
            attributes.keywords[i] = attributes.keywords[i].toLowerCase();
            if (!values.includes(attributes.keywords[i])) {
                console.warn(`Invalid keyword ${attributes.keywords[i]} for: ${_files[i]}`);
                validKeywords = false;
                continue;
            }
        }

        if (!validKeywords) {
            process.exit(1);
        }

        if (attributes.keywords.includes(KEYWORDS.PREMIUM) && !attributes.price) {
            console.warn(`Failed to specify 'price' for premium plugin in: ${_files[i]}`);
            process.exit(1);
        }

        if (attributes.keywords.includes(KEYWORDS.FREE) && attributes.price) {
            console.warn(`Remove 'price' from free plugin: ${_files[i]}`);
            process.exit(1);
        }

        pages.push(attributes);
    }

    fs.writeFileSync(path.join(process.cwd(), 'src/pages.json'), JSON.stringify(pages, null, '\t'));
});