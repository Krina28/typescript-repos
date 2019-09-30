import React from 'react';
import { Link } from 'react-router-dom';

class List extends React.Component {
    render() {
        let data = [
            {
                "id": 1,
                "first_name": "Customer_1",
                "last_name": "Customer_11",
                "email": "customer1@mail.com",
                "phone": "00000000000",
                "address": "Customer_1 Address",
                "description": "Customer_1 description"
            },
            {
                "id": 2,
                "first_name": "Customer_2",
                "last_name": "Customer_2",
                "email": "customer2@mail.com",
                "phone": "00000000000",
                "address": "Customer_2 Adress",
                "description": "Customer_2 Description"
            }
        ];

        return (
            <div>
                {data.length === 0 && (
                    <div className="text-center">
                        <h2>No customer found at the moment</h2>
                    </div>
                )}
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map(customer =>
                                    <tr key={customer.id}>
                                        <td>{customer.first_name}</td>
                                        <td>{customer.last_name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.description}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
