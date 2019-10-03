import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

class List extends React.Component {
    render() {
        let data = [
            {
                "id": 1,
                "title": "Fried Rice",
                "short_desc": "Fried rice is a dish of cooked rice",
                "description": `Fried rice is a dish of cooked rice that has been stir-fried
                    in a wok or a frying pan and is usually mixed with other ingredients such as 
                    eggs, vegetables, seafood, or meat. It is often eaten by itself or as an 
                    accompaniment to another dish.`,
                "no_of_ingridents": "11",
                "chef": "Aarti Chaudhri",
                "reviews": "4",
                "prep_time": 10,
                "cook_time": 10,
                "no_of_servings": 3,
                "category": "World Cuisine",
                "no_of_steps": 7,
                "image": "./fried_rice.jpg"
            },
            {
                "id": 2,
                "title": "Vegetables Salad",
                "short_desc": "Healthy Vegetable Salad",
                "description": `A healthy, nutritious and delicious salad recipe. Just a 20 minute work in the kitchen and you'll have a whole meal to relish that is full of flavour and veggies rich with nutrients. Homemade dressing poured over veggies, this salad is great as a brunch, a mid day meal or even as light dinner. An easily digestible meal that will work great for all the health conscious ones.`,
                "no_of_ingridents": "8",
                "chef": "Tarla Dalal",
                "reviews": "10",
                "prep_time": 10,
                "cook_time": 10,
                "no_of_servings": 3,
                "category": "Appetizers",
                "no_of_steps": 7,
                "image": "./veg_salad.jpg"
            }, {
                "id": 3,
                "title": "Fruits Salad",
                "short_desc": "Refreshing Fruit Salad Bowl",
                "description": `Fruit Salad with a sweet and bright honey lime dressing! It’s an incredibly refreshing, must have side dish that’s made with beautiful blend of delicious fruits and a simple dressing to compliment it.`,
                "no_of_ingridents": "5",
                "chef": "Krina Soni",
                "reviews": "5",
                "prep_time": 10,
                "cook_time": 10,
                "no_of_servings": 3,
                "category": "World Cuisine",
                "no_of_steps": 7,
                "image": "./fruit_salad.jpeg"
            }
        ];

        return (
            <div className="container">
                <Row>
                    {data && data.map((recipe) => {
                        return (
                            <Col sm="3">
                                <Card body>
                                    <CardImg top width="100%" src={recipe.image} alt="recipe image" />
                                    <CardTitle><b>{recipe.title}</b></CardTitle>
                                    <CardText>{recipe.short_desc}</CardText>
                                    <Link to={`/receipe/${recipe.id}`}>See Full Recipe</Link>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    }
}

export default List;
