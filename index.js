function count(string) {
  return string.split("").reduce((acc, el) => {
    if (acc.hasOwnProperty(el)) acc[el]++;
    else acc[el] = 1;
    return acc;
  }, {});
}
var data = count("people");
console.log(data);
