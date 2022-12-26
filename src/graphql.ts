/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
  id: string;
  username?: Nullable<string>;
  password?: Nullable<string>;
}

export abstract class IQuery {
  abstract ping(): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
