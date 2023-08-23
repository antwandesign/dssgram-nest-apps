import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  USER_SERVICE_NAME,
  UserServiceClient,
  CreateUserDto,
} from '@app/common';
import { AUTH_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersService: UserServiceClient;

  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc) {}

  onModuleInit() {
    this.usersService =
      this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  create(createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  findAll() {
    return this.usersService.findAllUsers({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
