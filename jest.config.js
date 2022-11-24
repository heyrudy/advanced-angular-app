// const { defaults } = require("jest-config");

globalThis.ngJest = {
  skipNgcc: true,
  tsconfig: "tsconfig.spec.json", // this is the project root tsconfig
};

module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  moduleNameMapper: {
    "@angular/common/locales/(.*)$":
      "<rootDir>/node_modules/@angular/common/locales/$1.mjs",
  },
};
