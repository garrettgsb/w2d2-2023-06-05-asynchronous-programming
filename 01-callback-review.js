// The Setup: countTimesRan * 100
{
  let count = 0;
  function countTimesRan() {
    console.log(`countTimesRan has run ${++count} times!`);
  }

  function maybeRun(probability, callback) {
    if (Math.random() < probability) {
      callback();
    }
  }

  for (let i = 0; i < 100; i++) {
    maybeRun(0.7, countTimesRan);
  }
}

let snowflakePosition = 450; // pixels
function jitterSnowflake() {
  snowflakePosition += Math.random() * 20; // pixels
}

maybeRun(0.3, jitterSnowflake);
