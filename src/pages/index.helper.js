import axios from 'axios'

export const getUsers = async (setLoading, setUsers) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    let data = [];

    try {
        const { data: users } = await axios.get(url);
        data = users;
    } catch (error) {
        console.error(error, 'has error when call api get users');
    }
    setLoading && setLoading(false);
    data = refactorUsesHomePage(data);
    setUsers && setUsers(data);
}

export const getUserDetails = async (userId, setLoading, setUser) => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    let data = {};
    try {
        const { data: user } = await axios.get(url);
        data = user;
    } catch (error) {
        console.error(error, 'Have some error when fetch user details');
        data = { notFound: true }
    }

    setLoading && setLoading(false);
    setUser && setUser(data);
}

const refactorUsesHomePage = (users = []) => {
    const newUsers = users.map(({ id, name, website, username }) => ({
        name, website, username, id
    }));
    return newUsers;
}

