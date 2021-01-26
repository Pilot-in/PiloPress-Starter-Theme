module.exports = {
    plugins: [
        require( 'tailwindcss' ),
        require( 'postcss-nested' ),
        require( 'autoprefixer' ),
        require( 'cssnano' )( { preset: 'default' } )
    ]
}
