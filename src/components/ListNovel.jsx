
import formStyle from '../css/todo.module.css'
import { removeNovel } from '../store/thunk';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import pic2 from '../images/todolist.jpg'





const ListNovel = ({ task, deleteNovel }) => {
    return (

        <>

        <div className={formStyle.wrap}>

                 <Card>
                    <Card.Body>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={pic2} alt="" />
                            <Card.Body>
                                <Card.Title>NOVEL</Card.Title>
                                <Card.Text>
                                    <Card>
                                        <Card.Body>
                                            {task.text}
                                            </Card.Body>
                                    </Card>
                                </Card.Text>
                               
                                    <button delete
                                        onClick={() => deleteNovel(task.id)} >
                                        Delete
                                    </button>

                                
                               
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>

        
        </div>

        </>


    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteNovel: (id) => dispatch(removeNovel(id))
});

export default connect(null, mapDispatchToProps)(ListNovel);