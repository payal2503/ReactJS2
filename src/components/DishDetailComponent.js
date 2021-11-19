import React , {Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle ,BreadcrumbItem, Breadcrumb, Button,Row,Col  ,Label ,ModalHeader, Modal , ModalBody} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control , LocalForm , Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


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
    
    function RenderComments({comments, addComment , dishId}) {
       
        if (comments != null) 
            return (
                <div>
               {comments.map((comment) => {
                    // console.log(comments);
                    return (
                        <ul className='list-unstyled' key={comment.id}>
                            <li>
                                <div>{comment.comment}</div>
                                <div>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}`}</div>
                            </li>
                        </ul>
                        )
                })}
                <CommentForm  dishId={dishId} addComment={addComment} />
                </div>
            )
        else{
            return(
                <div></div>
            );
        }
    }
       
    class CommentForm extends Component{
        constructor(props){
            super(props);
            this.state={
                isModelOpen : false,
            }
            this.toggleModal=this.toggleModal.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }
    
        toggleModal(){
            this.setState({
                isModelOpen : !this.state.isModelOpen
            })
        }

        handleSubmit(values){
            
            this.toggleModal();
            console.log(values);
            this.props.addComment(this.props.dishId, values.rating, values.firstname, values.message);
           
            // console.log("Current State is" + JSON.stringify(values));
            // alert("Current State is" + JSON.stringify(values));
            // values.preventDefault();
        }
         
        render(){
            return(
                <React.Fragment>
                    <Button onClick={this.toggleModal} ><span className="fa fa-pencil"></span> Submit Comment</Button><br /><br />
                        <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}> Submit Comment </ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit = {(values) => this.handleSubmit( values )}>
                                    <Label htmlFor="rating"> Rating </Label>
                                    <Control.select model=".rating" name="rating"
                                        className ="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
    
                                    <Label htmlFor="firstname" md={3}> Your Name </Label>
                                        <Col md={11}>
                                            <Control.text model= ".firstname" id="firstname" name="firstname" 
                                                placeholder ="Name" 
                                                className ="form-control"
                                                validators ={{
                                                    required , minLength: minLength(3), maxLength: maxLength(12)
                                                }}/>
                                                <Errors 
                                                className ="text-danger"
                                                model =".firstname"
                                                show ="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: ' length should be greater than 2 characters',
                                                    maxLength:' length must be less than 15 characters',
                                                }} />                      
                                            </Col>  
                                    
                                        
                                    <Label htmlFor="message" md={3}> Comment </Label>
                                        <Col md={11}>
                                            <Control.textarea model=".message" id="message" name="message" rows="6"
                                            className="form-control"
                                            validators ={{
                                                required 
                                            }} />   
                                            <Errors 
                                                className ="text-danger"
                                                model =".message"
                                                show ="touched"
                                                messages={{
                                                    required: 'Required',                                   
                                                    }} />                                    
                                        </Col><br />
                                        <Row className="form-group">
                                            <Col >
                                            <Button type="submit" color="primary"> Submit </Button>
                                            </Col>
                                        </Row><br />
                                    </LocalForm>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            );
        }
    }
    const DishDetail = (props) =>{
        // console.log(props.comment);
        // console.log(props.comments);
        // console.log(props.dish);
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className ="row">
                        <Loading/>
                    </div>
                </div>
            );
        }

        else if (props.errMess) {
            return(
                <div className="container">
                    <div className ="row">
                        <h3>{props.errMess}</h3>
                    </div>
                </div>
            );
        }
        
        else if (props.dish != null) {
            
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
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                   
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