import { Injectable } from '@nestjs/common';
import { User, Users, CreateUserDto, FindOneUserDto } from '@app/common';
import { data } from './data';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto) {
    return {} as User;
  }
  findOneUser(findOneUserDto: FindOneUserDto) {
    return {} as User;
  }
  findAllUsers() {
    return data;
  }
  updateUser(userDto: User) {
    return {} as User;
  }

  deleteUser(userDto: User) {
    return {} as User;
  }
}
