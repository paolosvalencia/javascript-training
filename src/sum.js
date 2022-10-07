export function sumDurations(a, b) {
  // TODO Implement sumDurations

  var asplit = a.split(":");
  var bsplit = b.split(":");

  for (var i = 0; i < asplit.length; i++) {
    asplit[i] = parseInt(asplit[i], 10);
    bsplit[i] = parseInt(bsplit[i], 10);
  }

  // Sum of durations in seconds
  var totalsec =
    (asplit[0] + bsplit[0]) * 3600 +
    (asplit[1] + bsplit[1]) * 60 +
    asplit[2] +
    bsplit[2];

  //Conversion of totalsec into hours minutes and seconds
  var hours = Math.floor(totalsec / 3600);
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = Math.floor((totalsec % 3600) / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var seconds = (totalsec % 3600) % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours > 99) {
    return "hours is over 100";
  }

  let sumDuration = hours + ":" + minutes + ":" + seconds;
  return sumDuration;
}
