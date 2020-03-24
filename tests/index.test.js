const devLib = require("../lib/dev");
const prodLib = require("../lib/dev");

const dictionary = {
  words: [
    {
      translations: [
        { language: "foo", word: "foo" },
        { language: "bar", word: "bar" }
      ]
    },
    {
      translations: [
        { language: "foo", word: "foo1" },
        { language: "bar", word: "bar1" }
      ]
    }
  ]
};

test("Translate word 'foo' to language 'bar'", () => {
  expect(devLib(dictionary)("bar")("foo")).toBe("bar");
});

test("Translate word 'bar' to language 'foo'", () => {
  expect(devLib(dictionary)("foo")("bar")).toBe("foo");
});

test("Translate word 'foo' to language 'foo'", () => {
  expect(devLib(dictionary)("foo")("foo")).toBe("foo");
});

test("Translate word 'bar' to language 'bar'", () => {
  expect(devLib(dictionary)("bar")("bar")).toBe("bar");
});

test("Translate word 'foo1' to language 'bar1'", () => {
  expect(devLib(dictionary)("bar")("foo1")).toBe("bar1");
});

test("Translate word 'bar1' to language 'foo1'", () => {
  expect(devLib(dictionary)("foo")("bar1")).toBe("foo1");
});

test("Translate word 'foo1' to language 'foo1'", () => {
  expect(devLib(dictionary)("foo")("foo1")).toBe("foo1");
});

test("Translate word 'bar1' to language 'bar1'", () => {
  expect(devLib(dictionary)("bar")("bar1")).toBe("bar1");
});

// Prod lib

test("Translate word 'foo' to language 'bar'", () => {
  expect(prodLib(dictionary)("bar")("foo")).toBe("bar");
});

test("Translate word 'bar' to language 'foo'", () => {
  expect(prodLib(dictionary)("foo")("bar")).toBe("foo");
});

test("Translate word 'foo' to language 'foo'", () => {
  expect(prodLib(dictionary)("foo")("foo")).toBe("foo");
});

test("Translate word 'bar' to language 'bar'", () => {
  expect(prodLib(dictionary)("bar")("bar")).toBe("bar");
});

test("Translate word 'foo1' to language 'bar1'", () => {
  expect(prodLib(dictionary)("bar")("foo1")).toBe("bar1");
});

test("Translate word 'bar1' to language 'foo1'", () => {
  expect(prodLib(dictionary)("foo")("bar1")).toBe("foo1");
});

test("Translate word 'foo1' to language 'foo1'", () => {
  expect(prodLib(dictionary)("foo")("foo1")).toBe("foo1");
});

test("Translate word 'bar1' to language 'bar1'", () => {
  expect(prodLib(dictionary)("bar")("bar1")).toBe("bar1");
});

// Failing tests
test("Translate word 'xyz' to language 'foo'", () => {
  expect(devLib(dictionary)("foo")("xyz")).toBe(null);
});

test("Translate word 'xyz' to language 'bar'", () => {
  expect(prodLib(dictionary)("foo")("xyz")).toBe(null);
});

test("Translate word 'foo' to language 'xyz'", () => {
  expect(devLib(dictionary)("xyz")("foo")).toBe(null);
});

test("Translate word 'foo' to language 'xyz'", () => {
  expect(prodLib(dictionary)("xyz")("foo")).toBe(null);
});
