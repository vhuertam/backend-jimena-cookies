import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Order, OrderData, OrderDataEdit } from 'src/graphql';
import { Repository } from 'typeorm';
import { Orders, Users } from '../../entities';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<Orders>,
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<Users>,
  ) {}

  async getOrders(): Promise<Orders[]> {
    try {
        return this.orderRepository.find({
            relations: ['user', 'user.role'],
            where: { deleteAt: null }
        });
    } catch (error) {
        throw error;        
    }
  }

  async getOrderById( id: string ): Promise<Orders> {
    try {
        return this.orderRepository.findOne({
            relations: ['user', 'user.role'],
            where: { id: id, deleteAt: null }
        })
    } catch (error) {
        throw error;
    }
  }

  async getOrderByClient( client: string ): Promise<Orders> {
    try {
        return this.orderRepository.findOne({
            relations: ['user', 'user.role'],
            where: { client: client , deleteAt: null }
        })
    } catch (error) {
        throw error;
    }
  }
    
  async createOrder( OrderData: OrderData ): Promise<Order> {
    try {
        const { client, dateDelivery, hourDelivery, idUser, totalPrice } = OrderData;

        if (!client) {
          throw new HttpException(
              'Parametro cliente es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        if (!dateDelivery) {
          throw new HttpException(
              'Parametro dateDelivery es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        if (!hourDelivery) {
          throw new HttpException(
              'Parametro hourDelivery es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        if (!idUser) {
          throw new HttpException(
              'Parametro idUser es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }

        if (!totalPrice) {
          throw new HttpException(
              'Parametro totalPrice es indefinido',
              HttpStatus.BAD_REQUEST,
          );
        }
 
        const orderByClient = await this.getOrderByClient(client);

        if (orderByClient) {
          throw new HttpException(
              `Order con cliente ${client} existe`,
              HttpStatus.BAD_REQUEST, 
          );
        }

        const userById = await this.userRepository.findOne({
            where:{ id: idUser, deletedAt: null }
        });

        if (!userById) {
            throw new HttpException(
                `User con id ${userById} no existe`,
                HttpStatus.BAD_REQUEST, 
            );
        }

        const order = new Orders();

        order.client = client;
        order.dateDelivery = dateDelivery;
        order.hourDelivery = hourDelivery;
        order.totalPrice = totalPrice;
        order.user = userById; 

        await this.orderRepository.save(order);

        const orderDone = await this.getOrderById(order.id);

        return orderDone;

    } catch (error) {
        throw error;
        
    }
  }

  async editOrder( id: string, OrderDataEdit: OrderDataEdit ): Promise<Orders> {
    try {

        const order = await this.getOrderById(id);

        if (!order) {
            throw new HttpException(`Order con id=${id} no existe`, HttpStatus.BAD_REQUEST);
        }

        const { client, dateDelivery, hourDelivery, idUser, totalPrice } = OrderDataEdit;

        const userById = await this.userRepository.findOne({
            relations: ['role'],
            where:{ id: idUser, deletedAt: null }
        })

        order.client = client;
        order.dateDelivery = dateDelivery;
        order.hourDelivery = hourDelivery;
        order.user = userById;
        order.totalPrice = totalPrice;

        return this.orderRepository.save(order);

    } catch (error) {
        throw error;
    }
  }

  async deleteOrder( id: string ): Promise<Orders> {
    try {

        const order = await this.getOrderById(id);

        if (!order) {
            throw new HttpException(`Order con id=${id} no existe`, HttpStatus.BAD_REQUEST);
        }

        order.deleteAt = new Date();

        return this.orderRepository.save(order);
        
    } catch (error) {
        throw error;
    }
  }
}