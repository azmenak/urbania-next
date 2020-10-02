module.exports = {
  trailingSlash: true,
  exportPathMap: function () {
    const paths = {
      "/": { page: "/" },
      "/features": { page: "/features" },
      "/sublime": { page: "/sublime" },
      "/gallery": { page: "/gallery" },
      "/linear-chic": { page: "/linear-chic" },
    };

    return paths;
  },
};
