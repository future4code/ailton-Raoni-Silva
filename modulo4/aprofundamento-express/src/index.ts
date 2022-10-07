import express, { Request, Response } from "express";
import cors from "cors";

const app = express();


app.use(express.json());
app.use(cors())



  app.get("/ping", (req,res ) => {
    res.status(200).send({
        message: "Pong!"
    });
});



type aFazer = {
  userId: number
  id: number
  title: string
  completed: boolean
};

let listDeAfazeres: aFazer[] = [
  {
      userId: 1,
      id: 1,
      title: "tomar banho",
      completed: true
  },
  {
      userId: 1,
      id: 2,
      title: "Ir a academia",
      completed: false
  },
  {
      userId: 2,
      id: 3,
      title: "almoçar fora",
      completed: true
  },
  {
      userId: 2,
      id: 4,
      title: "limpar a casa",
      completed: false
  },
  {
      userId: 3,
      id: 5,
      title: "jogar video game",
      completed: true
  },
];

app.get("/all/user/:userId", (
  req: Request,
  res: Response
) => {
  const userId: number = Number(req.params.userId);
  if (!userId) {
    return res.status(400).send({
        message: "Id de usuário inválido"
    });
};

const userListaAFazer = listDeAfazeres.filter((aFazer) => {
    return aFazer.userId === userId;
});

res.status(200).send({
    aFazeres: userListaAFazer
});
});

app.post("/all", (req, res) => {
  const { userId, title} = req.body;

  if (!userId || !title) {
      return res.status(400).send({
          message: "É preciso passar os parâmetros corretos."
      });
  };

   const novaTarefa: aFazer = {
      userId,
      id: Date.now(),
      title,
      completed: false
  };

  listDeAfazeres.push(novaTarefa);

  res.status(201).send({
      message: "Tarefa criada!",
      toDos: listDeAfazeres
  });
});

app.put("/all/:id", (req, res) => {
  
  const idTarefa = Number(req.params.id);

  if (!idTarefa) {
      return res.status(400).send({
          message: "Id da tarefa inválida"
      });
  };

  const lista = listDeAfazeres.map((aFazer) => {
      if (aFazer.id === idTarefa) {
          aFazer.completed = !aFazer.completed;
      };

      return aFazer;
  });

 
  res.status(201).send({
      message: "Atualizado com sucesso!",
      aFazer: lista
  });
});


app.delete("/all/:id", (req, res) => {
  const idTarefa = Number(req.params.id);
  
    if (!idTarefa) {
      return res.status(400).send({
          message: "Id da tarefa inválida"
      });
  };

  const newList = listDeAfazeres.filter((tarefa) => {
      return tarefa.id !== idTarefa;
  });

  listDeAfazeres = newList;

  res.status(200).send({
      message: "Tarefa deletada com sucesso!"
  });
});


app.get("/all", (req,res) => {
  const completed = req.query.status as string;

  if (!completed) {
      return res.status(200).send({
          tarefas: listDeAfazeres
      });
  };

    const filtroTarefas = listDeAfazeres.filter((tarefa) => {
    
      if (completed === "true" || completed === "false") {
          return tarefa.completed.toString() === completed;
      };
  });

  res.status(200).send({
      toDos: filtroTarefas
  });
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});