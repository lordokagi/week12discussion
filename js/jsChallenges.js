// Challenge 1 Part 1
document.querySelector("#subscribe").addEventListener("click", function () {
    if (this.checked) {
        document.querySelector("#emailDiv").computedStyleMap.display = "block"
    }
    else {
        document.querySelector("#emailDiv").computedStyleMap.display = "none"
    }
});

// // Challenge 1 Part 2
document.addEventListener("click", function () {
    let currentTime = new Date();
    alert("Current time:" + currentTime);
})

// Challenge 2
document.querySelector("#sameAddress").addEventListener("click", function () {
    if (this.checked) {
        document.querySelector("#home").value = document.querySelector("#bill").value
        document.querySelector("#home").disabled = true
        console.log("this works")
    }
    else {
        document.querySelector("#home").value = ""
        document.querySelector("#home").disabled = false
        console.log("else works")
    }
})

// Challenge 3 (not working)
var standing = null
var grad_date = null

var standing = document.querySelector("input[name='standing']:checked")
var grad_date = document.querySelector("input[name='grad_date']:checked")

document.querySelector("#submit").addEventListener("click", function () {
    if (standing == null || grad_date == null) {
        alert("You must select a choice from each set of radio buttons")
    }
    else {
        console.log("else works")
    }
})