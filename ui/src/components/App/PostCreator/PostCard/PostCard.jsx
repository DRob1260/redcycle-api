import React, { useState } from 'react';
import { generateDescriptionPreview } from './PostCardUtils';
import './PostCard.scss';
import { deleteCommunityPost } from '../../../../services/RedcycleApi';
import { Form, Modal, Button } from 'react-bootstrap'

const PostCard = ({ post, refreshPosts }) => {
  const [title, setTitle] = useState(post.title)
  const [description, setDescription] = useState(post.description)
  const [category, setCategory] = useState(post.category)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSave = () => {
    setShow(false)
    post.title = title
    post.description = description
    post.category = category
    patchCommunityPost(post)
    refreshPosts()
  }
  
  const handleShow = () => setShow(true);
  return (
    <div className={'PostCard'}>
      <div className={'card'}>
        <div className={'card-body'}>
          <h5 className={'card-title'}>{post.title}</h5>
          <p className={'card-text'}>
            {generateDescriptionPreview(post.description)}
          </p>
          <Button variant="danger" onClick={() => {
            deleteCommunityPost(post.id).then( () => refreshPosts())
          }}>Delete Post</Button> {" "}
          <Button variant="danger" onClick={handleShow}>
            Edit Post
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Title:</Form.Label>
                  <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)}>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description:</Form.Label>
                  <Form.Control type="text" value={description} onChange={(event) => setDescription(event.target.value)}>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type:</Form.Label>
                  <Form.Control as="select" custom value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="FURNITURE">Furniture</option>
                    <option value="ELECTRONICS">Electronics</option>
                    <option value="CLOTHES">Clothes</option>
                    <option value="FOOD">Food</option>
                    <option value="OTHER">Other</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
          </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
          </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
