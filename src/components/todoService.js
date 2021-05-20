import axios from "axios";


export const addTodo = (todo, cb) => {
    console.log(todo)

    axios.post('http://localhost:8080/todo', todo)
        .then(res => {
            console.log(res.data)
            cb(res.data)
        })
}

export const getPage =  async (pageNum) => {

    return await axios.get('http://localhost:8080/todo/pages?page='+pageNum)
}