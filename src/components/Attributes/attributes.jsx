import React from 'react'
import { Button, Card, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import './attributes.css';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useStateValue } from '../../Providers/UserProvider';
import { fire, firestore } from '../../firebaseconfig/firebase';
import firebase from 'firebase';
import MultiImageInput from 'react-multiple-image-input';
import ImageUploading from 'react-images-uploading';
import 'antd/dist/antd.css';


function Attributes() {


    const [make, setMake] = useState("");
    const [condition, setCondition] = useState("New");
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
            console.log('reader', reader)
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
        try {
            if (user !== null) {
                const postRef = fire.database().ref(`users/${user.uid}/posts/`).push({
                    make,
                    condition,
                    title,
                    price,
                    state,
                    city
                });
                const postKey = postRef.key;

                postRef.then(success => {
                    if (fileList !== null) {
                        fileList.map(file => firebase.storage().ref(`post/${docId}/${file.name}`).put(file.originFileObj, metadata)
                            .on(
                                "state changed",
                                snapshot => { },
                                error => {
                                    console.log(error)
                                },
                                () => {
                                    firebase.storage()
                                        .ref("post/")
                                        .child(docId)
                                        .child(file.name)
                                        .getDownloadURL()
                                        .then(url => {
                                            console.log('url', url)
                                        })
                                }
                            )
                        )
                    }
                })
            }
            // let docId;
            // if (user !== null) {
            //     let uid;
            //     uid = user.uid;
            //     const db = firestore;
            //     console.log('postData', postData, uid)
            //     const doc = db.collection('users').doc(uid).collection('posts').doc();
            //     doc.set(
            //         {
            //             make,
            //             condition,
            //             title,
            //             description,
            //             price,
            //             state,
            //             city,
            //         }
            //     ).then(_ => {
            //         console.log('User post added', doc.id)
            //         docId = doc.id;
            //         var metadata = {
            //             contentType: 'image/jpeg',

            //         };

            //         console.log('uid', docId)
            //         if (fileList !== null) {
            //             fileList.map(file => firebase.storage().ref(`post/${docId}/${file.name}`).put(file.originFileObj, metadata)
            //                 .on(
            //                     "state changed",
            //                     snapshot => { },
            //                     error => {
            //                         console.log(error)
            //                     },
            //                     () => {
            //                         firebase.storage()
            //                             .ref("post/")
            //                             .child(docId)
            //                             .child(file.name)
            //                             .getDownloadURL()
            //                             .then(url => {
            //                                 console.log('url', url)
            //                             })
            //                     }
            //                 )
            //             )
            //         }
            //     }).catch(error => {
            //         console.log('error', error)
            //     })




            // }
        }
        catch (error) {
            console.log('error', error)
        }
    }


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
                                    <Form.Control as="select" value={make} onChange={(e) => setMake(e.target.value)}>
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
                                    <Button
                                        style={{ marginRight: '4px' }}
                                        onClick={() => setCondition("New")}
                                        variant={condition === "New" ? 'info' : 'outline-info'}>
                                        New
                                   </Button>
                                    <Button
                                        onClick={() => setCondition("Used")}
                                        variant={condition === "Used" ? 'info' : 'outline-info'}>
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
                                    {/* <input type="file" multiple onChange={handleImageChange} /> */}
                                    {/* <MultiImageInput
                                        images={images}
                                        setImages={setImages}
                                        cropConfig={{ crop, ruleOfThirds: true }}
                                        theme="light"
                                    /> */}

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
