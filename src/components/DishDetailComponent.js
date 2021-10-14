import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';



    function RenderDish ({dish}) {
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
    }
    
    function RenderComments({comments}) {
       
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
    const DishDetail = (props) =>{
    
        if (props.dish != null) {
            
            // const dish=this.props.selectedDish
            // const Comments = dish.comments  
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish ={props.dish} />
                        </div>
                        <div className="col-12 col-md-5  m-1">
                            <Card>
                               <RenderComments comments ={props.dish.comments} />
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



export default DishDetail;