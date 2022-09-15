import app from "./app"
import createRecipe from "./endpoints/createRecipe"
import getProfile from "./endpoints/getProfile"
import login from "./endpoints/login"
import signup from "./endpoints/signup"

app.post('/user/signup', signup)
app.post('/user/login', login )
app.get('/user/profile', getProfile)



app.post('/recipe', createRecipe)

