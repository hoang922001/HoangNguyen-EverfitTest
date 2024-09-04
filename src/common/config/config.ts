import developmentConfig from './development.config';

export const config = () => {
  // if (process.env.NODE_ENV === 'production') return productionConfig;

  // if (process.env.NODE_ENV === 'staging') return stagingConfig;

  return developmentConfig;
};
