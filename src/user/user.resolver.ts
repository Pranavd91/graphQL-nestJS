import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Context } from '@nestjs/graphql';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from './user.schema';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
import { JwtGuard } from 'src/auth/jwt.guard';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userservice: UserService) {}

  @Query((returns) => String, { name: 'login' })
  @UseGuards(AuthGuard)
  login(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Context('user') user: User,
  ) {
    let payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    return jwt.sign(payload, 'key');
  }


  @Query((returns)=>String)
  @UseGuards(JwtGuard)
  securedResource(): string{
    return "This is Secured Route"
  }
}
