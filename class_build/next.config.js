module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "rea-freemarket",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
