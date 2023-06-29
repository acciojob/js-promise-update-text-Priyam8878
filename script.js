//your JS code here. If required.
//let res = document.getElementById("output")
function greetings() {
	return new Promise ((resolve,reject) => {
		setTimeout(() => {
			resolve("Hello, world!")
		})
	})
	
}
greetings().then(message => {
    document.getElementById("output").innerHTML = message;
  });
