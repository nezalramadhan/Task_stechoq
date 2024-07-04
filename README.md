# Petunjuk dan penggunaan 

cara menjalankan project : 
1. install modules
2. jalankan "npm run dev"

cara Hit endpoint CRUD di postman :
1. get (getAllTask) = http://localhost:3000/tasks
2. get (getTaskById) = http://localhost:3000/tasks/:id
3. post (createTask) = http://localhost:3000/tasks {
    "id" : "2",
    "title" : "asdf",
    "description": "qwertyu",
    "completed": true
}
4. put (UpdateTask) = http://localhost:3000/tasks/:id {
    "id" : "2",
    "title" : "asdfuasd",
    "description": "qwertyu",
    "completed": true
}
5. delete (deleteTask) = http://localhost:3000/tasks/:id
