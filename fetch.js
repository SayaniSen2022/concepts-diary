let getData = fetch("https://en.wikipedia.org/w/api.php", {
  method: "GET", // *GET, POST, PUT, DELETE, etc.
  mode: "no-cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  // redirect: "follow", // manual, *follow, error
  // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  // body: JSON.stringify(data), // body data type must match "Content-Type" header
}).then((data) => {
  console.log("got response", data);
});
