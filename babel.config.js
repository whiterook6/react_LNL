module.exports = {
  presets: [
    "@babel/react",
    ["@babel/env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ]
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: "./src",
      },
    ],
  ],
  exclude: ["node_modules"]
};
