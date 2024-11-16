import { Book } from "../config/types"


const bookArray: Book[] = [
    {
        id_book: 1, 
        id_user: 1,
        title: 'Dime quien soy',
        author: 'Julia Navarro', 
        photo: 'https://http2.mlstatic.com/D_NQ_NP_707573-MLM49187855321_022022-O.webp',
        type: 'Histórica',
        rating: 5, 
    },

    {
        id_book: 2, 
        id_user: 1,
        title: 'Patria',
        author: 'Fernando Aramburu', 
        photo: 'https://m.media-amazon.com/images/I/71P6414BRDL._AC_UF894,1000_QL80_.jpg',
        type: 'Histórica',
        rating: 5, 
    },

    {
        id_book: 3, 
        id_user: 1,
        title: 'Las Vulnerabilidades',
        author: 'Elvira Sastre', 
        photo: 'https://www.planetadelibros.com/usuaris/libros/fotos/391/original/portada_las-vulnerabilidades_elvira-sastre_202401121104.jpg',
        type: 'Ficción',
        rating: 4, 
    },

    {
        id_book: 4, 
        id_user: 1,
        title: 'Harry Potter y la piedra filosofal',
        author: 'JK Rowling', 
        photo: 'https://m.media-amazon.com/images/I/81fS9LRN29L._AC_UF894,1000_QL80_.jpg',
        type: 'Ficción',
        rating: 4, 
    }, 

    {
        id_book: 5, 
        id_user: 1,
        title: 'Una luz timida',
        author: 'Africa Alonso', 
        photo: 'https://teatromadrid.com/wp-content/uploads/2022/04/Teatro-Madrid-una_luz_timida_cartel.jpg',
        type: 'LGTB',
        rating: 4, 
    }
]

export default bookArray