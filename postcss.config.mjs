export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./src/app/[locale]/media.css'],
    },
    'postcss-custom-media': {},
    'postcss-nested': {},
  },
};
