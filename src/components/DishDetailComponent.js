import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
        console.log("DD component constructor invoked");
     }

    componentDidMount(){
        console.log("dishdetail component componentDidMount invoked");
    }
    
    componentDidUpdate(){
        console.log("dishdetail component componentDidUpdate invoked");
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        // else {
        //     return (
        //         <div></div>
        //     )
        // }
    }
    
    renderComments(comments) {
       // console.log(comments);
        if (comments != null) {
            return (
                comments.map((comment) => {
                    // console.log(comments);
                    return (
                        <ul className='list-unstyled' key={comment.id}>
                            <li>
                                <div>{comment.comment}</div>
                                <div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}</div>
                            </li>
                        </ul>
                        )
                })
            )
        }
    }
    render() {
        console.log("dishdetail componenet render invoked");
        if (this.props.selectedDish != null) {
            
            // const dish=this.props.selectedDish
            // const Comments = dish.comments  
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                           {this.renderDish(this.props.selectedDish)}
                        </div>
                        <div className="col-12 col-md-5  m-1">
                            <Card>
                                {
                                    this.renderComments(this.props.selectedDish.comments)
                                }
                            </Card>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

}

export default DishDetail;