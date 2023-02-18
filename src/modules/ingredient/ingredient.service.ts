import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Ingredients } from 'src/entities';
import { Ingredient, IngredientData, IngredientDataEdit } from 'src/graphql';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
    constructor(
        @Inject('INGREDIENT_REPOSITORY')
        private ingredientRepository: Repository<Ingredients>
    ) {}

    async getIngredients(): Promise<Ingredients[]> {
        try {
            return this.ingredientRepository.find({
                where: { deletedAt: null }
            });
            
        } catch (error) {
            throw error;
        }
    }

    async getIngredientById( id: string ): Promise<Ingredients> {
        try {
            return this.ingredientRepository.findOne({
                where: { id: id, deletedAt: null }
            });
            
        } catch (error) {
            throw error;
        }
    }

    async createIngredient( ingredientData: IngredientData ): Promise<Ingredient> {
        try {

            const { name, quantity } = ingredientData;

            if(!name) {
                throw new HttpException(
                    'Parametro description es indefinido',
                    HttpStatus.BAD_REQUEST,
                );
            }

            if(!quantity) {
                throw new HttpException(
                    'Parametro description es indefinido',
                    HttpStatus.BAD_REQUEST,
                );
            }

            const ingredient = new Ingredients();

            ingredient.name = name;
            ingredient.quantity = quantity;

            await this.ingredientRepository.save(ingredient);

            const ingredientDone = await this.getIngredientById(ingredient.id);

            return ingredientDone;

        } catch (error) {
            throw error;
        }
    }

    async editIngredient( id: string, ingredientDataEdit: IngredientDataEdit ): Promise<Ingredients> {
        try {

            const ingredient = await this.getIngredientById(id);

            if(!ingredient) {
                throw new HttpException(
                    `El Ingredient con id=${id} no existe`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            const { name, quantity } = ingredientDataEdit;

            ingredient.name = name;
            ingredient.quantity = quantity;
            
            await this.ingredientRepository.save(ingredient);

            const ingredientEdit = await this.getIngredientById(id);

            return ingredientEdit;
            
        } catch (error) {
            throw error;       
        }
    }

    async deleteIngredient( id: string ): Promise<Ingredients> {

        const ingredient = await this.getIngredientById(id);

        if(!ingredient) {
            throw new HttpException(
                `El Ingredient con id=${id} no existe`,
                HttpStatus.BAD_REQUEST,
            )
        }

        ingredient.deletedAt = new Date();

        return this.ingredientRepository.save(ingredient);

    }
}