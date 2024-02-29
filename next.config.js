/** @type {import('next').NextConfig} */
// const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    // shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    next1: `next1@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {}
// {
//   webpack(config, options) {
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: "next2",
//         filename: 'static/chunks/remoteEntry.js',
//         remotes: remotes(options.isServer),
//         exposes: {
//           "./button": "./components/system/ToggleMode.tsx",
//         },
//         shared: {
//           react: { singleton: true, requiredVersion: '^18.2.0' },
//           'react-dom': { singleton: true, requiredVersion: '^18.2.0' }, 
//         },
//         extraOptions: {
//           exposePages: true,
//           automaticAsyncBoundary: true,
//         },
//       })
//     );
//     return config;
//   },
// }

module.exports = nextConfig
