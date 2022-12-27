
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserData {
    username?: Nullable<string>;
    password?: Nullable<string>;
}

export class UserDataEdit {
    username?: Nullable<string>;
    password?: Nullable<string>;
}

export abstract class IQuery {
    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract createUser(input?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract editUser(id?: Nullable<string>, input?: Nullable<UserDataEdit>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    username?: Nullable<string>;
    password?: Nullable<string>;
}

type Nullable<T> = T | null;
