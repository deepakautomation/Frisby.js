//console.log("hello")



















fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res =>{
                console.log(`Status of is : ${res.status}`)
            })

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    console.log(res.status)
    return res.json();
})
.then(data =>{
    console.log(data[0].title)
})
.catch(error =>{
    console.log(error)
})



async function testFn(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data)
}
testFn();