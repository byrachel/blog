import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {

    private users: User[] = [
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            coursePreference: 'coding',
            hobbies: ['Angular', 'TypeScript']
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
        // crée une copie du tableau users
        // next est une méthode de subject -> rxjs
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}