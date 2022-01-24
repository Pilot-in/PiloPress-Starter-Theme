module.exports = {
    'content': [
        './safelist.txt',
        './pilopress/layouts/**/*.{html,php,css,js,json}',
        './**/*.{php,css}'
    ],
    'safelist': [
        {
            pattern: /text-/,
            variants: ['hover', 'group-hover'],
        },
        {
            pattern: /bg-/,
            variants: ['hover', 'group-hover'],
        },
        {
            pattern: /(m|p)(x|y)-/,
            variants: ['md', 'lg'],
        },
        {
            pattern: /(w|h)-/,
            variants: ['sm', 'md', 'lg'],
        },
        {
            pattern: /group/,
            variants: ['sm', 'md', 'lg'],
        },
        {
            pattern: /(block|flex|grid)/,
            variants: ['sm', 'md', 'lg', 'hover', 'lg:hover', 'group-hover', 'lg:group-hover'],
        },
        {
            pattern: /(top|left|right|bottom|inset)-/,
            variants: ['lg', 'hover', 'lg:hover'],
        },
    ],
}
