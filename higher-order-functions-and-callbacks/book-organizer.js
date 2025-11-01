const books = [
    {
        title: "Echoes of the Forgotten Sky",
        authorName: "Celeste Marlowe",
        releaseYear: 2026
    },

    {
        title: "The Cartographer's Paradox",
        authorName: "Elias Finch",
        releaseYear: 2024
    },

    {
        title: "Beneath the Willow's Spell",
        authorName: "Mira Thorne",
        releaseYear: 1925
    }
];

function sortByYear(book1, book2) {

    if(book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1
    } else {
        return 0;
    }
}

const filteredBooks = books.filter(book => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);