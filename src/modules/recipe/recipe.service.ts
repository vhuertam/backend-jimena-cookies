import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Recipes } from 'src/entities';
import { Recipe, RecipeData, RecipeDataEdit } from 'src/graphql';
import { Repository } from 'typeorm';

@Injectable()
export class RecipeService {
    constructor(
        @Inject('RECIPE_REPOSITORY')
        private recipeRepository: Repository<Recipes>
    ) {}

    async getRecipes(): Promise<Recipes[]> {
        try {
            return this.recipeRepository.find({
                where: { }
            });
            
        } catch (error) {
            throw error;
        }
    }

    async getRecipeById( id: string ): Promise<Recipes> {
        try {
            return this.recipeRepository.findOne({
                where: { id: id }
            });
            
        } catch (error) {
            throw error;
        }
    }

    async createRecipe( recipeData: RecipeData ): Promise<Recipe> {
        try {

            const { description } = recipeData;

            if(!description) {
                throw new HttpException(
                    'Parametro description es indefinido',
                    HttpStatus.BAD_REQUEST,
                );
            }

            const recipe = new Recipes();

            recipe.description = description;

            await this.recipeRepository.save(recipe);

            const recipeDone = await this.getRecipeById(recipe.id);

            return recipeDone;

        } catch (error) {
            throw error;
        }
    }

    async editRecipe( id: string, recipeDataEdit: RecipeDataEdit ): Promise<Recipes> {
        try {

            const recipe = await this.getRecipeById(id);

            if(!recipe) {
                throw new HttpException(
                    `El recipe con id=${id} no existe`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            const { description } = recipeDataEdit;

            recipe.description = description;
            
            await this.recipeRepository.save(recipe);

            const recipeEdit = await this.getRecipeById(id);

            return recipeEdit;
            
        } catch (error) {
            throw error;       
        }
    }

    async deleteRecipe( id: string ): Promise<Recipes> {

        const recipe = await this.getRecipeById(id);

        if(!recipe) {
            throw new HttpException(
                `El recipe con id=${id} no existe`,
                HttpStatus.BAD_REQUEST,
            )
        }

        return this.recipeRepository.remove(recipe);

    }
}
