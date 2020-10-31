import React from 'react'
import { Button, Card, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import './attributes.css';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useStateValue } from '../../Providers/UserProvider';
import { firestore } from '../../firebaseconfig/firebase';

function Attributes() {


    const [make, setMake] = useState("");
    const [condition, setCondition] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [postData, setPostData] = useState({});

    const [{ user }] = useStateValue();

    /** Upload image state */
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([{}]);


    const handleCancel = () => {
        setPreviewVisible(false);
    }

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }

    const handleChange = ({ fileList }) => setFileList(fileList);


    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('here')
        setPostData({
            title,
            description,
            price,
            state,
            city
        })
        console.log('here',postData)
        try {

            if (user !== null) {
                let uid;
                uid = user.uid;
                const db = firestore;
                console.log('postData', postData, uid)
                db.collection('users').doc(uid).collection('posts').doc().set({title:'hello'})
            }
        }
        catch (error) {
            console.log('error', error)
        }
    }


    console.log('user', user)
    console.log('user post data', postData, title)
    return (
        <div className="attributes">
            <Card >
                <Card.Body>
                    <Card.Title>SELECTED CATEGORY</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <div className="attributes__details">
                        <h4>Include Some Details</h4>
                        <Form onSubmit={handleSubmit} className="attributes__details-form">
                            <ListGroupItem>
                                <Form.Group>
                                    <Form.Label>Make*</Form.Label>
                                    <Form.Control as="select">
                                        <option>Select make</option>
                                        <option>Nokia</option>
                                        <option>Samsung</option>
                                        <option>Realme</option>
                                        <option>Iphone</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Make*</Form.Label>
                                    <br />
                                    <Button variant="outline-info">
                                        New
                                   </Button>
                                    <Button variant="outline-info">
                                        Used
                                   </Button>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Ad Title*</Form.Label>
                                    <Form.Control type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" />
                                    <Form.Text className="text-muted">
                                        Mention the key features of your item (e.g. brand, model, age, type)
                                        0 / 70
                                   </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description*</Form.Label>
                                    <Form.Control
                                        value={description} onChange={(e) => { setDescription(e.target.value) }}
                                        as="textarea"
                                        rows={3} />
                                </Form.Group>



                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Group>
                                    <Form.Label>Price*</Form.Label>
                                    <Form.Control
                                        value={price} onChange={(e) => { setPrice(e.target.value) }}
                                        type="text"
                                        placeholder="Rs" />
                                </Form.Group>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Group>
                                    <Form.Label>Upload upto 12 photos*</Form.Label>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        // fileList={fileList}
                                        onPreview={handlePreview}
                                        onChange={handleChange}
                                    >
                                        {fileList.length >= 12 ? null : uploadButton}
                                    </Upload>
                                    <Modal
                                        visible={previewVisible}
                                        title={previewTitle}
                                        footer={null}
                                        onCancel={handleCancel}
                                    >
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </Form.Group>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Form.Group>
                                    <Form.Label>Confirm your Location</Form.Label>
                                    <Form.Control
                                        value={state}
                                        onChange={(e) => { setState(e.target.value) }}
                                        type="text"
                                        placeholder="State" />
                                    <br />
                                    <Form.Control
                                        value={city}
                                        onChange={(e) => { setCity(e.target.value) }}
                                        type="text"
                                        placeholder="City" />
                                </Form.Group>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button type="submit" variant="outline-success">
                                    Post now
                                   </Button>
                            </ListGroupItem>
                        </Form>
                    </div>
                </ListGroup>
            </Card>
        </div>
    )
}

export default Attributes
