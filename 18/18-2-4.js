//13-3-1 的 Fetch 使用 await 的作法

let res = await fetch('https://randomuser.me/api/')
let json = await res.json()
console.log(json.results[0])