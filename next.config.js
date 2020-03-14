module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    const paths = {
      "/": { page: "/" },
      "/features": { page: "/features" },
      "/sublime": { page: "/sublime" },
      "/gallery": { page: "/gallery" }
    };

    return paths;
  }
};
