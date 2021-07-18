import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import Loading from '../components/loadings/Loading'
import Card from '../components/shared/Card'
import { getUsers } from './index.helper'
import './index.scss'

const HomePage = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            await getUsers(setLoading, setUsers);
        }
        fetchUsers();
    }, [])

    if (loading) {
        return <Loading loading />
    }

    const handleClickDetailBtn = (id) => {
        return history.push(`/my-app/user/${id}`);
    }


    return (
        <div className="home-users-wrap">
            {users.map((user) => {
                return (
                    <Card
                        handleClickDetailBtn={handleClickDetailBtn}
                        data={user}
                    />
                );
            })}
        </div>
    );
};

export default HomePage;
