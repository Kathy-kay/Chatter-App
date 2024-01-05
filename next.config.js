const removeImports = require("next-remove-imports")();
module.exports = removeImports({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  ...removeImports,
};

module.exports = nextConfig;
