import { Injectable } from '@nestjs/common';
import { Args, Int } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book as BookModel } from '../graphql';
import { AddBookArgs } from './args/add.book.args';
import { UpdateBookArgs } from './args/update.book.args';
import { BookEntity } from './entity/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectRepository(BookEntity) private readonly bookRespository:Repository<BookEntity>){}

  async getAllBooks() : Promise<BookEntity[]> {
    return await this.bookRespository.find();
  }

  async getBookById(@Args({name:"bookId",type : ()=>Int }) id :number) : Promise<BookEntity> {
    return await this.bookRespository.findOne({where: {id:id}});
  }

  async deleteBookById(@Args({name:"bookId",type : ()=>Int }) id :number) : Promise<string> {
     await this.bookRespository.delete(id);
     return "Deleted Successfully"
  }

  async addBook(addBookArgs:AddBookArgs) : Promise<string> {
    let book : BookEntity = new BookEntity()
    book.price = addBookArgs.price;
    book.title = addBookArgs.title;

    await this.bookRespository.save(book);
    return "Added Successfully"
 }

 async updateBook(updateBookArgs:UpdateBookArgs) : Promise<string> {
  let updateBook : BookEntity = await this.bookRespository.findOne({where: {id:updateBookArgs.id}});
  updateBook.price = updateBookArgs.price;
  updateBook.title = updateBookArgs.title;

  await this.bookRespository.save(updateBook);
  return "Updated Successfully"
}
}
