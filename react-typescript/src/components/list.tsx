import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class List extends React.Component {
    render() {
        let data = [
            {
                "id": 1,
                "title": "Customer_1",
                "short_desc": "Customer_11",
                "description": "customer1@mail.com",
                "no_of_ingridents": "00000000000",
                "chef": "Customer_1 Address",
                "reviews": "Customer_1 description",
                "prep_time": 10,
                "cook_time": 10,
                "no_of_servings": 3,
                "category": "World Cuisine",
                "no_of_steps": 7
            },
            {
                "id": 2,
                "title": "Customer_2",
                "short_desc": "Customer_2",
                "description": "customer2@mail.com",
                "no_of_ingridents": "00000000000",
                "chef": "Customer_2 Adress",
                "reviews": "Customer_2 reviews",
                "prep_time": 10,
                "cook_time": 10,
                "no_of_servings": 3,
                "category": "World Cuisine",
                "no_of_steps": 7
            }, {
                "id": 3,
                "title": "Customer_2",
                "short_desc": "Customer_2",
                "description": "customer2@mail.com",
                "no_of_ingridents": "00000000000",
                "chef": "Customer_2 Adress",
                "reviews": "Customer_2 Description",
                "prep_time": 10,
                "cook_time": 10,
                "no_of_servings": 3,
                "category": "World Cuisine",
                "no_of_steps": 7
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
                    <Row>
                        {data && data.map((recipe) => {
                            return (
                                <Col sm="3">
                                    <Card body>
                                        <CardTitle>{recipe.title}</CardTitle>
                                        <CardText>{recipe.short_desc}</CardText>
                                        <Link to={`/receipe/${recipe.id}`}>See Full Recipe</Link>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        );
    }
}

export default List;
