import { IdGenerator } from './../services/Generate';
import { Authenticator } from './../services/Authenticator';
import { Request, Response } from "express";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { Recipe } from '../Model/recipeTypes';

export default async function createRecipe(req:Request, res: Response) {
    try {
        const {title, description } = req.body


        if(!title || !description){
            throw new Error("Preencha corretamente as informações!")
        }

        const token = req.headers.authorization;
        const authenticator = new Authenticator();
        const data = token !== undefined? authenticator.getTokenData(token):""

        if (!data) {
            throw new Error("É preciso enviar o seu Token para cadastrar Receitas")
        }

        const idGenerator = new IdGenerator()
        const recipe = new Recipe(
            idGenerator.generate(),
            title,
            description,
            new Date(),
            data.id
        )

        const recipeDatabase = new RecipesDatabase()
        await recipeDatabase.createRecipe(recipe)
        
        res.status(201).send({
            message: "Receita criada com sucesso",
            recipe 
        })

    } catch (error: any) {
        res.status(400).send(error.message);
      }
    
}