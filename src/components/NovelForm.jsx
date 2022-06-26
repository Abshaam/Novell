import { useState } from 'react';
import { createNovel } from '../store/thunk';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import pic2 from '../images/calender.avif';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';




const NovelForm = ({ Allnovels, content }) => {
    const [input, setInput] = useState('');
    return (

        <>

            <Card className="bg-dark text-white">
                <Card.Img src={pic2} alt="Card image" />
                <Card.ImgOverlay>
                    <Container>
                        <Card style={{ color: 'black', marginTop: '4rem' }}>
                            <Card.Body>
                                <Badge>
                                    <h3> Add a Novel </h3>
                                </Badge>
                                <Form >
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter full name" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label> Email </Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label> Novel Title</Form.Label>
                                        <Form.Control type='text' placeholder="Enter title" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                        <Form.Label> Novel </Form.Label>
                                        <Form.Control type='text'
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Enter novel" />
                                    </Form.Group>
 

                                    <Row className="mb-3">

                                        <Form.Group as={Col} controlId="formGridState">
                                            <Form.Label> Category </Form.Label>
                                            <Form.Select defaultValue="Science fiction">
                                                <option> Adventure </option>
                                                <option> Romance </option>
                                                <option> Comedy </option>
                                                <option> Fantasy </option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label> Novel Image </Form.Label>
                                        <Form.Control type="file" name='novelImage'/>
                                     </Form.Group>
                                        </Form.Group>
                                    </Row>

                                    


                                    <Button variant="primary"
                                        type="submit"
                                        //  run this at a button click, check to find a duplicate todo
                                        onClick={() => {
                                            const duplicate = Allnovels.some(nov => nov.text === input);
                                            console.log(duplicate);

                                            // if no duplicate, run the send the request and empty the input field
                                            if (!duplicate) {


                                                content(input);

                                                setInput(' ');


                                                console.log(input);

                                                // run this if no duplicate found
                                            } else {
                                                alert(' Novel has being added already')
                                            }
                                        }}>
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>


                        <Card.Text> Submit and view novel below </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>

           

        </>
    )
}

const mapStateToProps = (state) => ({
    Allnovels: state.novels.data
});

const mapDispatchToProps = (dispatch) => ({
    content: (text) => dispatch(createNovel(text))
});


export default connect(mapStateToProps, mapDispatchToProps)(NovelForm);


