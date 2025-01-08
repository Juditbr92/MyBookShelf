type Book = {
  book_id: number;
  id_user: number;
  title: string;
  author: string;
  photo: string;
  type: string;
  rating: number;
};

type User = {
  user_id?: number;
  username: string;
  email?: string;
  photo: string;
  password: string;
  repeatPassword?: string;
};

type UpdateUser = {
  user_id?: number;
  username: string;
  photo: string;
  password: string;
};

type UserGreeting = {
  username: string;
  photo?: string;
};

export type { Book, User, UserGreeting, UpdateUser };
