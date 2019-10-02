import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

const Categories: React.FC = () => {
    const allCategories = [{
        id: 1,
        name: 'American'
    }, {
        id: 21,
        name: 'Appetizers',
    }, {
        id: 3,
        name: 'Cake Recipes',
    }, {
        id: 4,
        name: 'Chinese Food',
    }, {
        id: 5,
        name: 'Dessert Recipes',
    }, {
        id: 6,
        name: 'Italian Recipes',
    }, {
        id: 7,
        name: 'Pasta Recipes',
    }, {
        id: 8,
        name: 'Seafood Recipes',
    }, {
        id: 9,
        name: 'Salad Recipes',
    }];

    return (
        <div className="container">
            <h3 className="partner-title">Categories</h3>
            <Row>
                {allCategories && allCategories.map((category) => {
                    return (
                        <Col sm="3">
                            <Card>
                                <CardBody>
                                    <CardTitle>{category.name}</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}

export default Categories;
