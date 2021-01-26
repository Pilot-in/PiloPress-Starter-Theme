module.exports = {
    plugins: [
        require( 'tailwindcss' ),
        require( 'postcss-nested' ),
        require( 'autoprefixer' ),
        require( 'postcss-prefix-selector' )( { prefix: '.-preview' } ),
        require( 'cssnano' )( { preset: 'default' } )
    ]
}