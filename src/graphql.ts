
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface UpdateBookArgs {
    id: number;
    title: string;
    price: number;
}

export interface Book {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    findBookById(bookId: number): Book | Promise<Book>;
}

export interface IMutation {
    deleteBookById(bookId: number): Book | Promise<Book>;
    addBook(addBookArgs: AddBookArgs): Book | Promise<Book>;
    updateBook(updateBookArgs: UpdateBookArgs): Book | Promise<Book>;
}

type Nullable<T> = T | null;
