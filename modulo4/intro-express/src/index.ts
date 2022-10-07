import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

type Posts = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

type Users = {
  id: string;
  name: string;
  phone: number;
  email: string;
  website: string;
};

const posts: Posts[] = [
  {
    id: "o01",
    title: "feliz",
    body: "Ótimo dia hoje!",
    userId: "912821ibamz",
  },
  {
    id: "o02",
    title: "Triste",
    body: "Dia ficou ruim!",
    userId: "912821ibamz",
  },
  {
    id: "o03",
    title: "Correndo",
    body: "Correr é bom!",
    userId: "99887727shaiSq",
  },
  {
    id: "o04",
    title: "Nadando",
    body: "Nadar é vida",
    userId: "99887727shaiSq",
  },
  {
    id: "o05",
    title: "Trabalho",
    body: "Vivo pra trabalhar",
    userId: "76615Dxks12",
  },
  {
    id: "o06",
    title: "Folgando",
    body: "Folgando, que ninguém é de ferro",
    userId: "76615Dxks12",
  },
  {
    id: "o07",
    title: "Party time",
    body: "Curtir um pouco!",
    userId: "663746AScosS293",
  },
  {
    id: "o08",
    title: "Trip",
    body: "Viajar é bom demais",
    userId: "663746AScosS293",
  },
  {
    id: "o09",
    title: "Video Game me acalma",
    body: "Não me canso de jogar!",
    userId: "766433oozmixA09",
  },
  {
    id: "o10",
    title: "GamePlay",
    body: "Final de Semana online",
    userId: "766433oozmixA09",
  },
];

const users: Users[] = [
  {
    id: "912821ibamz",
    name: "João Carlos",
    phone: 7299889900,
    email: "joaocarlos@joao.com",
    website: "www.joaocarlos.com.br",
  },
  {
    id: "99887727shaiSq",
    name: "Maria Janaina",
    phone: 8899829172,
    email: "mariajanaina@maria.com",
    website: "www.mariajanaina.com.br",
  },
  {
    id: "76615Dxks12",
    name: "Pedro Antônio",
    phone: 1192563242,
    email: "pedro@pedro.com",
    website: "www.pedro.com.br",
  },
  {
    id: "663746AScosS293",
    name: "Fernanda Silva",
    phone: 1397281111,
    email: "fernanda@fernanda.com",
    website: "www.fernanda.com.br",
  },
  {
    id: "766433oozmixA09",
    name: "Felipe Marcos",
    phone: 3491525534,
    email: "felipe@felipe.com",
    website: "www.felipe.com.br",
  },
];

app.get("/hello", (req, res) => {
  res.send("Hello from Express");
});

app.get("/allUsers", (req, res) => {
  res.send(users);
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) =>{
    const idUser = req.params.id

    const findPosts = posts.filter((postId) =>{
        return postId.userId === idUser
    })
    res.send(findPosts)
})

app.delete("/deletepost/:id",(req, res) =>{
    const postID = req.params.id

    const deletePost: Posts[] = posts.filter((post) =>{
        return post.id !== postID
    })

       res.send(deletePost) 
})


app.delete("/deleteuser/:id",(req, res) =>{
    const userID = req.params.id

    const deleteUser: Users[] = users.filter((user) =>{
        return user.id !== userID
    })

       res.send(deleteUser) 
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
