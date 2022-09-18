import app from "./app"
import createRecipe from "./endpoints/createRecipe"
import getAnotherProfile from "./endpoints/getAnotherProfile"
import getProfile from "./endpoints/getProfile"
import searchRecipe from "./endpoints/getRecipeById"
import login from "./endpoints/login"
import signup from "./endpoints/signup"

app.post('/user/signup', signup)
app.post('/user/login', login )
app.get('/user/profile', getProfile)
app.get("/user/:id",getAnotherProfile)



app.post('/recipe', createRecipe)
app.get('/recipe/:id',searchRecipe)

