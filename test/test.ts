function importTest(name: string, path: string) {
  describe(name, function () {
    require(path);
  });
}

describe("The `medium` model", () => {
  importTest("generate", "./generate.ts");
  importTest("embed", "./embed.ts");
  importTest("classify", "./classify.ts");
  importTest("tokenize", "./tokenize.ts");
});
