import { Resolver, Query } from "@nestjs/graphql";
import { Book } from "./book.schema";


@Resolver((of) => Book)
export class BookResolver{

    @Query((returns) => [Book],{name:"books"})
    getAllBooks(){
        return [
            {id:1,title:"hi",price:9},
            {id:2,title:"hdddi",price:19},
            {id:3,title:"hicdcd",price:39}
        ]
    }

}