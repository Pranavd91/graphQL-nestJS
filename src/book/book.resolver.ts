import { Resolver, Query, Args, Int, Mutation } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as BookModel } from '../graphql';
import { BookService } from "./book.service";
import { AddBookArgs } from "./args/add.book.args";
import { UpdateBookArgs } from "./args/update.book.args";
import { BookEntity } from "./entity/book.entity";

@Resolver((of) => Book)
export class BookResolver{

    constructor(private readonly bookservice: BookService){}

    @Query((returns) => [Book],{name:"books"})
    getAllBooks()  {
        return this.bookservice.getAllBooks();
    }

    @Query((returns) => Book,{name:"findBookById"})
    getBookById(@Args({name:"bookId",type : ()=>Int }) id :number) {
        return this.bookservice.getBookById(id)
    }

    @Mutation((returns) => Book,{name:"deleteBookById"})
    deleteBookById(@Args({name:"bookId",type : ()=>Int }) id :number) {
        return this.bookservice.deleteBookById(id)
    }

    
    @Mutation((returns) => Book,{name:"addBook"})
    addBook(@Args("addBookArgs") addBookArgs :AddBookArgs) {
        return this.bookservice.addBook(addBookArgs)
    }

    
    @Mutation((returns) => Book,{name:"updateBook"})
    updateBook(@Args("updateBookArgs") updateBookArgs :UpdateBookArgs){
        return this.bookservice.updateBook(updateBookArgs)
    }
}