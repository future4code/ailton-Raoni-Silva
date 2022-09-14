import app from "./app"
import login from "./endpoints/login"
import signup from "./endpoints/signup"

app.post('/user/signup', signup)
app.post('/user/login', login )
// app.put('/user/edit', editUser)
// app.get('/user/profile', getProfile)