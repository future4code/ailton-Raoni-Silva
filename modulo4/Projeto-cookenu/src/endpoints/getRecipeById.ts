import { IdGenerator } from './../services/Generate';
import { Authenticator } from './../services/Authenticator';
import { Request, Response } from "express";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { Recipe } from '../Model/recipeTypes';
import moment from "moment"



export default async function searchRecipe(req: Request, res: Response) {
    try {

        const token = req.headers.authorization
        const id = req.params.id

        if (!token) {
            throw new Error("O token deve ser passado!")
        }

        // verificar se o token é valido
        new Authenticator().getTokenData(token)

        const recipeData = new RecipesDatabase()

        const recipeById = await recipeData.getRecipeById(id)

        if (!recipeById) {
            throw new Error("Receita não encontrada")
        }

        console.log(recipeById)
        recipeById.setData(moment(recipeById.getRecipeCreated(), "YYYY-MM-DD").format("DD/MM/YYYY"))

        res.status(200).send(recipeById)

    } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message })
    }
}