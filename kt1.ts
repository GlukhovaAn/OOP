class User {
  name: string;
  private _password: string;
  private _grade: number;
  readonly login: string;
  private static _countUser: number = 0;

  constructor(name: string, login: string, password: string, grade: number) {
    this._password = password;
    this.name = name;
    this.login = login;
    this._grade = grade > 0 ? grade : 1;
    User._countUser++;
  }

  get password(): string {
    return "********";
  }

  set password(password: string) {
    this._password = password;
  }

  private getGrade(): number {
    console.log("Неизвестное свойство grade");
    return -1;
  }

  showInfo() {
    console.log(`name: ${this.name}, login: ${this.login}`);
  }

  static get count(): number {
    return this._countUser;
  }

  eq(otherUser: User): boolean {
    return this._grade === otherUser._grade;
  }

  lt(otherUser: User): boolean {
    return this._grade < otherUser._grade;
  }

  gt(otherUser: User): boolean {
    return this._grade > otherUser._grade;
  }
}

class SuperUser extends User {
  private _role: string;
  private static _countSuperUser: number = 0;

  constructor(
    login: string,
    password: string,
    name: string,
    role: string,
    grade: number
  ) {
    super(login, password, name, grade);
    this._role = role;
    SuperUser._countSuperUser++;
  }

  get role(): string {
    return this._role;
  }

  set role(role: string) {
    this._role = role;
  }

  static get count(): number {
    return this._countSuperUser;
  }

  showinfo(): void {
    console.log(`SuperUser login: ${this.login}, Role: ${this._role}`);
  }
}

const user1 = new User("Paul McCartney", "paul", "1234", 3);
const user2 = new User("George Harrison", "george", "5678", 2);
const user3 = new User("Richard Starkey", "ringo", "8523", 3);
const admin = new SuperUser("John Lennon", "john", "0000", "admin", 5);

user1.showInfo();
admin.showInfo();

const users = User.count;
const admins = SuperUser.count;

console.log(`Всего обычных пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

console.log(user1.lt(user2));
console.log(admin.gt(user3));
console.log(user1.eq(user3));

user3.name = "Ringo Star";
user1.password = "Pa$$w0rd";

console.log(user3.name);
console.log(user2.password);
console.log(user2.login);

// user2.login = 'geo'

// console.log(user3.grade)
// admin.grade = 10
