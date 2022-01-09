module.exports = {
    'content': [
        './../layouts/**/*.{html,php,css,js,json}',
        './../../../**/*.php',
        './safelist.txt'
    ],
    'safelist': [
        {
            pattern: /text-/,
            variants: ['hover', 'lg:hover', 'group-hover'],
        },
        {
            pattern: /bg-/,
            variants: ['hover', 'lg:hover', 'group-hover'],
        }
    ]
}
