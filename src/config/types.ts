type Book = {
  id_book: number;
  id_user: number;
  title: string;
  author: string;
  photo: string;
  type: string;
};

type User = {
  user_id: number;
  userName: string;
  email: string;
  photo: string;
  password: string;
  repeatPassword: string;
};

export type { Book, User };