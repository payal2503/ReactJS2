import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle ,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import { Link } from 'react-router-dom';


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
        else{
            return(
                <div></div>
            );
        }
    }

    // function RenderComments({ comments }) {
    //     if (comments != null) {
    //       const commentItems = comments.comments.map((comment) => {
    //         return (
    //           <div key={comment.id}>
    //             <h4>Comments</h4>
    //             <ul className="list-unstyled">
    //               <li>{comment.comment}</li>
    //               <li>
    //                 --{comment.author}{" "}
    //                 {new Intl.DateTimeFormat("en-US", {
    //                   year: "numeric",
    //                   month: "short",
    //                   day: "2-digit"
    //                 }).format(new Date(Date.parse(comment.date)))}
    //               </li>
    //             </ul>
    //           </div>
    //         );
    //       });
    //       return commentItems;
    //     } else {
    //       return <div>foobar</div>
    //     }
    //   }
                         
    const DishDetail = (props) =>{
        console.log(props.comment);
        console.log(props.comments);
        console.log(props.dish);
        if (props.dish != null) {
            
            // const dish=this.props.selectedDish
            // const Comments = dish.comments  
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3> {props.dish.name} </h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }



export default DishDetail;