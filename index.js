document.addEventListener("DOMContentLoaded", ()=>{
    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        createToDo(e.target.new_todo.value)
        form.reset()
    })
})

function createToDo(toDo){
    const p = document.createElement("p")
    const btn = document.createElement("button")
    btn.addEventListener("click", handleDelete)
    btn.textContent = "x"
    p.textContent = `${toDo} `
    p.appendChild(btn)
    document.querySelector("#todo_container").appendChild(p)
}

function handleDelete(e){
    e.target.parentNode.remove()
}