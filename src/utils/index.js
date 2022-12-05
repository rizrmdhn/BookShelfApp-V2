const getDummyBooks = () => ([
    {
        author: "ini author",
        finished: false,
        id: "-rWH6xXv3_MGBT8F",
        insertedAt: "2022-12-05T02:04:28.925Z",
        pageCount: "55",
        publisher: "ini publisher",
        readPage: "12",
        reading: false,
        summary: "ini summary",
        title: "ini buku",
        updatedAt: "2022-12-05T02:04:28.925Z",
        year: "2022",
    },
]);

const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    return new Date(date).toLocaleDateString("id-ID", options)
}

export { getDummyBooks, showFormattedDate };