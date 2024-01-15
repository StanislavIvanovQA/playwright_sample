export const GET_BOOKS = 'https://demoqa.com/BookStore/v1/Books'

export type BookListMockProps = {
    books: BookMock[]
}

export type BookMock = {
    isbn: string
    title: string
    subTitle: string
    author: string
    publish_date: string
    publisher: string
    pages: number
    description: string
    website: string
}

export const ONE_BOOK_MOCK: BookListMockProps = {
    books: [{
        isbn: '9781449325862',
        title: 'The Darkness That Come Before',
        subTitle: 'The Prince of Nothing, Book One',
        publish_date: "2008-09-02T08:48:39.000Z",
        author: 'Scott Bakker',
        publisher: 'Orbit',
        pages: 350,
        description: 'The Darkness That Comes Before is the first book in R. Scott Bakker’s epic fantasy trilogy The Prince of Nothing. Set in a world scarred by an apocalyptic past, four people are swept up in the launch of an imminent crusade, during which they are ensnared by mysterious traveler Anasûrimbor Kellhus, whose magical, philosophical, and military talents have origins in a distant time.',
        website: 'https://www.amazon.com/Darkness-that-Comes-Before-Nothing/dp/1590201183'
    }]
}