import { Injectable } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book as BookModel } from '../graphql';
import { UserEntity } from './entity/user.entity';


@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRespository:Repository<UserEntity>){}


  async findUserByEmail(@Args({name:"email",type : ()=>String }) email :string) : Promise<UserEntity> {
    return await this.userRespository.findOne({where : {email}})
 }
}
