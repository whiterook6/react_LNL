module.exports = {
  presets: [
    "@babel/react",
    "@babel/env"
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
