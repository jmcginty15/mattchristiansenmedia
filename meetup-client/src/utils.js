export const paginate = (users) => {
    const paginatedUsers = [];
    const nextPage = [];

    for (let user of users) {
        if (nextPage.length === 10) {
            paginatedUsers.push([...nextPage]);
            nextPage.length = 0;
        }
        nextPage.push(user);
    }

    if (nextPage.length) paginatedUsers.push([...nextPage]);
    return paginatedUsers;
}