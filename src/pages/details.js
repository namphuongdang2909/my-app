import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import Loading from '../components/loadings/Loading'
import { getUserDetails } from './index.helper';
import './details.scss';

const UserDetails = ({ info, addressInfo }) => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            await getUserDetails(userId, setLoading, setUserDetails);
        }
        fetchUserDetails();
    }, [userId])



    if (loading)
        return <Loading loading />

    const { address = {} } = userDetails;

    return (
        <div className=".w-h-full">
            <div className="user-details-wrap">
                {info.map(({ label, field, isCompany = undefined }) => {
                    let value = userDetails[field];
                    if (isCompany) {
                        value = userDetails?.company?.name;
                    }

                    return (
                        <div className="user-details-info">
                            <label>{label}</label>
                            <span>{value}</span>
                        </div>
                    )
                })}
                <div className="user-details-address-wrap">
                    <label>
                        - address:
                    </label>
                    <ul className="user-details-address">
                        {addressInfo.map(({ field, label }) => {
                            return (
                                <li>
                                    <span>{label}</span>
                                    <span>{address[field]}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>

        </div>
    )
}

UserDetails.defaultProps = {
    info: [
        {
            label: '- name: ',
            field: 'name',
        },
        {
            label: '- username: ',
            field: 'username',
        },
        {
            label: '- email: ',
            field: 'email',
        },
        {
            label: '- phone: ',
            field: 'phone',
        },
        {
            label: '- company: ',
            field: '',
            isCompany: true
        },
        {
            label: '- website: ',
            field: 'website',
        }
    ],
    addressInfo: [
        { label: 'street: ', field: 'street' },
        { label: 'city: ', field: 'city' },
        { label: 'suite: ', field: 'suite' },
        { label: 'zipcode: ', field: 'zipcode' },
    ]
}


export default UserDetails;