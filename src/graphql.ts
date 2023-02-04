
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class OrderProductData {
    idOrder?: Nullable<string>;
    idProduct?: Nullable<string>;
    idOrderEdit?: Nullable<string>;
    idProductEdit?: Nullable<string>;
}

export class OrderData {
    client?: Nullable<string>;
    dateDelivery?: Nullable<string>;
    hourDelivery?: Nullable<string>;
    totalPrice?: Nullable<number>;
    idUser?: Nullable<string>;
}

export class OrderDataEdit {
    client?: Nullable<string>;
    dateDelivery?: Nullable<string>;
    hourDelivery?: Nullable<string>;
    totalPrice?: Nullable<number>;
    idUser?: Nullable<string>;
}

export class ProductData {
    name?: Nullable<string>;
    idRecipe?: Nullable<string>;
}

export class ProductDataEdit {
    name?: Nullable<string>;
    idRecipe?: Nullable<string>;
}

export class RoleData {
    name?: Nullable<string>;
}

export class RoleDataEdit {
    name?: Nullable<string>;
}

export class UserData {
    rut?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    idRole?: Nullable<string>;
}

export class UserDataEdit {
    rut?: Nullable<string>;
    username?: Nullable<string>;
    idRole?: Nullable<string>;
}

export abstract class IQuery {
    abstract getOrdersProducts(): Nullable<Nullable<OrderProduct>[]> | Promise<Nullable<Nullable<OrderProduct>[]>>;

    abstract getOrders(): Nullable<Nullable<Order>[]> | Promise<Nullable<Nullable<Order>[]>>;

    abstract getProducts(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract getRoles(): Nullable<Nullable<Role>[]> | Promise<Nullable<Nullable<Role>[]>>;

    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract createOrderProduct(input?: Nullable<OrderProductData>): Nullable<OrderProduct> | Promise<Nullable<OrderProduct>>;

    abstract editOrderProduct(id?: Nullable<string>, input?: Nullable<OrderProductData>): Nullable<OrderProduct> | Promise<Nullable<OrderProduct>>;

    abstract deleteOrderProduct(id?: Nullable<string>): Nullable<OrderProduct> | Promise<Nullable<OrderProduct>>;

    abstract createOrder(input?: Nullable<OrderData>): Nullable<Order> | Promise<Nullable<Order>>;

    abstract editOrder(id?: Nullable<string>, input?: Nullable<OrderDataEdit>): Nullable<Order> | Promise<Nullable<Order>>;

    abstract deleteOrder(id?: Nullable<string>): Nullable<Order> | Promise<Nullable<Order>>;

    abstract createProduct(input?: Nullable<ProductData>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract editProduct(id?: Nullable<string>, input?: Nullable<ProductDataEdit>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract deleteProduct(id?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract createRole(input?: Nullable<RoleData>): Nullable<Role> | Promise<Nullable<Role>>;

    abstract editRole(id?: Nullable<string>, input?: Nullable<RoleDataEdit>): Nullable<Role> | Promise<Nullable<Role>>;

    abstract deleteRole(id?: Nullable<string>): Nullable<Role> | Promise<Nullable<Role>>;

    abstract createUser(input?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract editUser(id?: Nullable<string>, input?: Nullable<UserDataEdit>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export class OrderProduct {
    order?: Nullable<Order>;
    product?: Nullable<Product>;
}

export class Order {
    id: string;
    client?: Nullable<string>;
    dateDelivery?: Nullable<string>;
    hourDelivery?: Nullable<string>;
    totalPrice?: Nullable<number>;
    user?: Nullable<User>;
}

export class Product {
    id: string;
    name?: Nullable<string>;
}

export class Role {
    id: string;
    name?: Nullable<string>;
}

export class User {
    id: string;
    rut?: Nullable<string>;
    username?: Nullable<string>;
    password?: Nullable<string>;
    state?: Nullable<boolean>;
    role?: Nullable<Role>;
}

type Nullable<T> = T | null;
