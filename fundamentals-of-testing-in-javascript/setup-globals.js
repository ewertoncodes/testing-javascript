async function test (title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}

function expect (actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    }
  }
}

global.test = test;
global.expect = expect;