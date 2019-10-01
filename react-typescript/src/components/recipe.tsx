import React from 'react';
import { Card, Row, Col, CardImg } from 'reactstrap';
import StarRatingComponent from "react-star-rating-component";
import RecipeImage from "../assets/images/veg_salad.jpg";

class Recipe extends React.Component {
    render() {
        let data = [{
            "id": 1,
            "title": "Vegetable Pepe Pasta Salad",
            "short_desc": "It’s sometimes labeled as acini di pepe, and can be found with the rest of the pasta options in most grocery stores",
            "description": `Summer Vegetable Pepe Pasta Salad Summer Vegetable Pepe Pasta
             Salad - Fresh asparagus, corn, tomatoes, and pepe pasta are tossed with a Greek 
             yogurt, Parmesan and dill dressing.  
             
             Summer Vegetable Pepe Pasta Salad Summer Vegetable Pepe Pasta
             Salad - Fresh asparagus, corn, tomatoes, and pepe pasta are tossed with a Greek 
             yogurt, Parmesan and dill dressing.`,
            "category": "World Cuisine",
            "no_of_ingridents": 9,
            "chef": "Krina Soni",
            "reviews": "Very great receipe",
            "prep_time": 10,
            "cook_time": 10,
            "no_of_servings": 3,
            "no_of_steps": 3,
            "ratings": 4,
            "ingridents": [
                "acini di pepe pasta",
                "unsalted butter",
                "leek",
                "Greek yogurt",
                "shredded Parmesan cheese",
                "chopped fresh dill",
                "corn kernels",
                "grape tomatoes, halved",
                "black pepper"
            ]
        }];

        return (
            <div className="container">
                <Row>
                    <Col>
                        <Card sm="12">
                            <CardImg top width="100%" src={RecipeImage} alt="Card image cap" />
                            <div>
                                <span>
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={data[0].ratings}
                                    />
                                </span>
                                <span className="receipe-tags">120 Ratings</span>
                                <span className="receipe-tags">58 Reviews</span>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <div className="lead-content-aside-wrapper">
                            <aside className="recipe-info-section">
                                <h2 className="hidden-label">Recipe Summary</h2>
                                <span className="time-stats " aria-hidden="true">
                                    icon
                          </span>
                                <section className="recipe-meta-container two-subcol-content clearfix">
                                    <div className="two-subcol-content-wrapper">
                                        <div className="recipe-meta-item">
                                            <div className="recipe-meta-item-header">
                                                prep:
                                        </div>
                                            <div className="recipe-meta-item-body">
                                                {data[0].prep_time}
                                            </div>
                                        </div>
                                        <div className="recipe-meta-item">
                                            <div className="recipe-meta-item-header">
                                                cook:
                                        </div>
                                            <div className="recipe-meta-item-body">
                                                {data[0].cook_time}
                                            </div>
                                        </div>
                                        <div className="recipe-meta-item">
                                            <div className="recipe-meta-item-header">
                                                total:
                                        </div>
                                            <div className="recipe-meta-item-body">
                                                1 hr
                                        </div>
                                        </div>
                                    </div>
                                    <div className="two-subcol-content-wrapper">
                                        <div className="recipe-meta-item">
                                            <div className="recipe-meta-item-header">
                                                Servings:
                                      </div>
                                            <div className="recipe-meta-item-body">
                                                {data[0].no_of_servings}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </aside>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="receipe-desc">
                            <h3>{data[0].title}</h3>
                            <div>{data[0].description}</div>
                            <span>
                                <small className="text-muted">By {data[0].chef}</small>
                            </span>
                        </div>
                    </Col>
                </Row>
                {/* Ingridents Listing */}
                <Row>
                    <Col>
                        <div>
                            <h3>List of Ingridents</h3>
                            <ul>
                                {data[0].no_of_ingridents > 0 && data[0].ingridents &&
                                    data[0].ingridents.map((ingrident) => {
                                        return (
                                            <React.Fragment>
                                                <li>{ingrident}</li>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Recipe;
