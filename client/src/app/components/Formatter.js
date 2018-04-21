// export function millisecondsToHHMMSS(number) {
//   const date = new Date(number * 1000);
//   return (
//     date.getHours() - 1 + ":" + date.getMinutes() + ":" + date.getSeconds()
//   );
// }

/// <summary>Takes a number of seconds and returns a string in the format HHMMSS </summary>
/// <param name="seconds" type="Number">Number of seconds</param>
/// <returns type="string">The formatted string</returns>
export function secondsToHHMMSS(seconds) {
  const minutes = (seconds - seconds % 60) / 60;
  const hours = (minutes - minutes % 60) / 60;
  return hours + "h " + minutes % 60 + "m " + seconds % 60 + "s";
}
/// <summary>Takes a number of seconds and returns a string in the format DDHHMM </summary>
/// <param name="seconds" type="Number">Number of seconds</param>
/// <returns type="string">The formatted string</returns>
export function secondsToDDHHMM(seconds) {
  const minutes = (seconds - seconds % 60) / 60;
  const hours = (minutes - minutes % 60) / 60;
  const days = (hours - hours % 24) / 24;
  return days + "d " + hours % 24 + "h " + minutes % 60 + "m";
}

/// <summary>Validates a string to contain only lowercase/uppercase letters or digits </summary>
/// <param name="str" type="string">String to validate</param>
/// <returns type="boolean">true if the string validated</returns>
export function validateString(str) {
  const regex = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
  return regex.test(str);
}
