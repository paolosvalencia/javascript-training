const tests = [
  // [a, b, expected]
  ["01:00:00", "01:00:59", "02:00:59"],
  ["00:01:30", "00:01:30", "00:03:00"],
  ["45:30:01", "00:29:59", "46:00:00"],

  // Feel free to add more test cases.
  ["50:00:00", "50:00:00", "hours is over 100"]
];

export default tests;
