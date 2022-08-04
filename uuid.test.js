const fs = require("fs");
const filesEN = fs.readdirSync("./content/en/careers/positions/");
const filesFR = fs.readdirSync("./content/fr/careers/positions/")
const archFalse = /archived: false/i;
const UUIDRegex =/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/;

test("UUID in correct format EN", () => {
  filesEN.forEach((element) => {
    let data = fs.readFileSync(
      `./content/en/careers/positions/${element}`,
      "utf8"
    );
    if (archFalse.test(data)) {
      const found = data.match(UUIDRegex);
      expect(found).not.toBeNull();
    }
  });
});

test("UUID in correct format FR", () => {
    filesFR.forEach((element) => {
    let data = fs.readFileSync(
      `./content/fr/careers/positions/${element}`,
      "utf8"
    );
    if (archFalse.test(data)) {
      const found = data.match(UUIDRegex);
      expect(found).not.toBeNull();
    }
  });
});