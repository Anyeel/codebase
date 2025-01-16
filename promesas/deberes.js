fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data => {

    //quote
    create("p", data.quote, "body")

    //author of quote
    const author = data.author
    const h1 = document.createElement("h1")
    h1.innerText = author
    document.body.appendChild(h1)

});

function create(element,data,destination){
    const e = document.createElement(element)
    e.innerText = data
    dest_element = document.querySelector(destination)
    dest_element.appendChild(e)
}