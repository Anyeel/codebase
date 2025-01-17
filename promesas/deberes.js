fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data => {

    //quote
    create("h1", data.quote, "body")

    //author of quote
    const author = data.author
    const p = document.createElement("p")
    p.innerText = author
    document.body.appendChild(p)

});

function create(element,data,destination){
    const e = document.createElement(element)
    e.innerText = data
    dest_element = document.querySelector(destination)
    dest_element.appendChild(e)
}