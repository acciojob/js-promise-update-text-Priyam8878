//your JS code here. If required.
let res = document.getElementById("output")
function greetings() {
	return new Promise ((resolve,reject) => {
		setTimeout(() => {
			resolve("Hello, world")
		})
	})
	
}
let p = greetings().then((value) => {
    console.log(value)
})
res.innerHTML = p;
