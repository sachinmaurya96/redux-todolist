export const getTodo = ()=>{
    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:8080/todos/")
        const data = await response.json()
        resolve({data})
    })
}
export const addTodo = (value)=>{
    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:8080/todos/",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({text:value})
        })
        const data = await response.json()
        resolve({data})
    })
}

export const editTodo = (update)=>{
    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:8080/todos/"+update.id,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({text:update.text})
        })
        const data = await response.json()
        resolve({data})
    })
}

export const deleteTodo = (id)=>{
    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:8080/todos/"+id,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        const data = await response.json()
        resolve({data})
    })
}