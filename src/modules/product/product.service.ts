import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Products, Recipes } from 'src/entities';
import { Product, ProductData, ProductDataEdit } from 'src/graphql';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @Inject('PRODUCT_REPOSITORY')
        private productRepository: Repository<Products>,
        @Inject('RECIPE_REPOSITORY')
        private recipeRepository: Repository<Recipes>
    ) {}

    async getProducts(): Promise<Products[]> {
        try {
            return this.productRepository.find({
                relations: ['recipe'],
                where: { deleteAt: null }
            });
            
        } catch (error) {
            throw error;
        }
    }

    async getProductById( id: string ): Promise<Products> {
        try {
            return this.productRepository.findOne({
                relations: ['recipe'],
                where: { id: id, deleteAt: null }
            });
            
        } catch (error) {
            throw error;
        }
    }

    async createProduct( productData: ProductData ): Promise<Product> {
        try {

            const { name, idRecipe } = productData;

            if(!name) {
                throw new HttpException(
                    'Parametro name es indefinido',
                    HttpStatus.BAD_REQUEST,
                );
            }

            if(!idRecipe) {
                throw new HttpException(
                    'Parametro idRecipe es indefinido',
                    HttpStatus.BAD_REQUEST,
                );
            }

            const recipe = await this.recipeRepository.findOne({
                where: { id: idRecipe, deleteAt: null }
            })

            if(!recipe){
                throw new HttpException(
                    `El recipe con id=${idRecipe} no existe`,
                    HttpStatus.BAD_REQUEST,
                )
            }

            const product = new Products();

            product.name = name;
            product.recipe = recipe;

            await this.productRepository.save(product);

            const productDone = await this.getProductById(product.id);

            return productDone;

        } catch (error) {
            throw error;
        }
    }

    async editProduct( id: string, productDataEdit: ProductDataEdit ): Promise<Products> {
        try {

            const product = await this.getProductById(id);

            if(!product) {
                throw new HttpException(
                    `El product con id=${id} no existe`,
                    HttpStatus.BAD_REQUEST,
                );
            }

            const { name, idRecipe } = productDataEdit;

            const recipe = await this.recipeRepository.findOne({
                where: { id: idRecipe, deleteAt: null }
            })

            if(!recipe){
                throw new HttpException(
                    `El recipe con id=${idRecipe} no existe`,
                    HttpStatus.BAD_REQUEST,
                )
            }

            product.name = name;
            product.recipe = recipe;
            
            await this.productRepository.save(product);

            const productEdit = await this.getProductById(id);

            return productEdit;
            
        } catch (error) {
            throw error;       
        }
    }

    async deleteProduct( id: string ): Promise<Products> {

        const product = await this.getProductById(id);

        if(!product) {
            throw new HttpException(
                `El product con id=${id} no existe`,
                HttpStatus.BAD_REQUEST,
            )
        }

        product.deleteAt = new Date();

        return this.productRepository.save(product);

    }
}
