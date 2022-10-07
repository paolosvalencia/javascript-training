import "./styles.css";
import { sumDurations } from "./sum";
import tests from "./testCases";

const output = document.getElementById("output");
const buffer = ["Summing Durations", "=================", ""];

for (let i = 0; i < tests.length; i++) {
  const sum = sumDurations(tests[i][0], tests[i][1]);
  buffer.push(`Case ${i + 1}:`);
  buffer.push(`${tests[i][0]} + ${tests[i][1]}:`);
  buffer.push(`Expected: ${tests[i][2]}`);
  buffer.push(`${tests[i][2] === sum ? "✔" : "❌"} Actual: ${sum}`);
  buffer.push("");
}

output.innerHTML = buffer.join("\n");
