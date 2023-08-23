import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import {
  User,
  Users,
  CreateUserDto,
  UserServiceController,
  UserServiceControllerMethods,
  FindOneUserDto,
} from '@app/common';

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  findOneUser(findOneUserDto: FindOneUserDto) {
    return this.userService.findOneUser(findOneUserDto);
  }
  findAllUsers() {
    return this.userService.findAllUsers();
  }
  updateUser(userDto: User) {
    return this.userService.updateUser(userDto);
  }

  deleteUser(userDto: User) {
    return this.userService.deleteUser(userDto);
  }
}
