const codes = [
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
];

let index = 0

function init() {
  // your code here
  const bodyEl = document.body
  bodyEl.addEventListener('keyup', event => {
    const key = event.key
    console.log(index)
    if (key === codes[index]) {
      index++
      if(index === codes.length) {
        return alert("Hip Hip Hooray")
        index = 0
      }
    } else if (key !== codes[index]) {
      index = 0
    }
  })
}

// init()
