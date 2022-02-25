module.exports = {
  presets: [''],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          components: './src/components/',
          constants: './src/constants/',
          mockup: './src/mockup/',
          assets: './src/assets/',
          screen: './src/screens/',
          reducer: './src/reducers',
        },
      },
    ],
  ],
}
