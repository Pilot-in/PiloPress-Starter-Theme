module.exports = {
    assets: {
        path: '/',
        css: '!(*.min).css',
        cssMin: '*.min.css',
        js: '!(*.min).js',
        jsMin: '*.min.js',
    },
    layouts: {
        path: '../layouts/',
        css: '../layouts/**/!(*.min).css',
        cssMin: '../layouts/**/*.min.css',
        js: '../layouts/**/!(*.min).js',
        jsMin: '../layouts/**/*.min.js'
    },
    site: {
        url: 'installer-test.test'
    },
    watchFiles: {
        php: [ '../../includes/**.php', '../layouts/**/*.php' ],
        css: [ '!(*.min).css', '../layouts/**/!(*.min).css' ],
        js: [ '!(*.min).js', '../layouts/**/!(*.min).js' ],
    }
}
