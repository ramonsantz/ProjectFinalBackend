import { Request, Response } from 'express';
import { getAllBooks, addBook } from '../../controllers/bookController';
import { BookRepository } from '../../repositories/bookRepository';

jest.mock('../../repositories/bookRepository');
const mockGetAllBooks = BookRepository.prototype.getAllBooks as jest.Mock;
const mockAddBook = BookRepository.prototype.addBook as jest.Mock;

describe('Book Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    mockGetAllBooks.mockClear();
    mockAddBook.mockClear();
  });

  test('should get all books', async () => {
    const books = [
      { id: 1, title: 'Book 1', author: 'Author 1', price: 20 },
      { id: 2, title: 'Book 2', author: 'Author 2', price: 25 },
    ];

    mockGetAllBooks.mockResolvedValue(books);

    await getAllBooks(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    console.log('Mock res.json called with:', books);
    expect(res.json).toHaveBeenCalledWith(books);
  });

  test('should add a book', async () => {
    const newBook = { id: 1, title: 'New Book', author: 'New Author', price: 25 };

    mockAddBook.mockResolvedValue(newBook);

    req.body = newBook;

    await addBook(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(201);
    console.log('Mock res.json called with:', newBook);
    expect(res.json).toHaveBeenCalledWith(newBook);
  });
});
