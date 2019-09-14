module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [
            "Explorer >= 11",
            "Edge >= 12",
            "Firefox >= 38",
            "Chrome >= 43",
            "Safari >= 8"
          ]
        },
        useBuiltIns: "entry",
        modules: false,
        corejs: 3
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
};
