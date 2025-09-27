module.exports = {
  root: true,
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  settings: {
    "import/resolver": {
      typescript: { project: "./tsconfig.json" },
      node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
    },
  },
};
