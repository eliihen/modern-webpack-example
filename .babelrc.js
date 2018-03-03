const env = process.env.BABEL_ENV || process.env.NODE_ENV;

const config = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: 'usage',
        targets: {
          browsers: ['last 3 major versions', 'ie 11'],
        },
      }
    ]
  ],
  plugins: [
    "react-hot-loader/babel"
  ]
};

module.exports = config;
