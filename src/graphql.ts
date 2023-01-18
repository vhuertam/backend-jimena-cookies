
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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
    abstract getRoles(): Nullable<Nullable<Role>[]> | Promise<Nullable<Nullable<Role>[]>>;

    abstract getUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract createRole(input?: Nullable<RoleData>): Nullable<Role> | Promise<Nullable<Role>>;

    abstract editRole(id?: Nullable<string>, input?: Nullable<RoleDataEdit>): Nullable<Role> | Promise<Nullable<Role>>;

    abstract deleteRole(id?: Nullable<string>): Nullable<Role> | Promise<Nullable<Role>>;

    abstract createUser(input?: Nullable<UserData>): Nullable<User> | Promise<Nullable<User>>;

    abstract editUser(id?: Nullable<string>, input?: Nullable<UserDataEdit>): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
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
    role?: Nullable<Role>;
}

type Nullable<T> = T | null;
