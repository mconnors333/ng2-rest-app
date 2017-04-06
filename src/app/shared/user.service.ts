import { User } from "./user.model"

export class UsersService {
  selectedUser: User;

  users: User[] = [
    {
      id: 1,
      name: 'Matthew',
      description: 'Awesome coder'
    },
    {
      id: 2,
      name: 'Taylor',
      description: 'Awesome Health Professional'
    },
    {
      id: 3,
      name: 'Rucker',
      description: 'Awesome dog'
    },
  ]

  setSelectedUser(user:User) {
    this.selectedUser = user;
  }
}
