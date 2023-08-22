/* eslint-disable camelcase */
export const rollbarConfig = {
  accessToken: '609b92e59bab4cd3857dd1e06d3e93e4',
  environment: 'development',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: '1.0.0',
        source_map_enabled: true
      }
    }
  }
};
