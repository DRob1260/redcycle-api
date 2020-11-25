import React, {useState} from 'react';
import './PostCreator.scss';
import { postCommunityPost } from '../../../services/RedcycleApi';
import { Form, Tab, Tabs } from 'react-bootstrap'


export const PostCreator = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [currentTab, setCurrentTab] = useState("myPosts")
  
  const submitCommunity = () => {
    const communityPost = {
      "title": title,
      "description": description,
      "creationDate": new Date().toISOString(),
      "available": true,
      "category": category,
      "authorId": "cdd356fb-c24a-4166-b86b-7120c7466e5b",
      "locationId": "9a20f75f-c751-467f-8a1a-3614243c4248"
    }
    postCommunityPost(communityPost).then( () => {setCurrentTab("myPosts")})
  }

  return (
    <div className={'PostCreator'}>
      <Tabs activeKey = {currentTab} onSelect={(eventKey) => setCurrentTab(eventKey)} id="uncontrolled-tab-example">
      <Tab eventKey="myPosts" title="My Community Posts">

      </Tab>
      <Tab eventKey="createPost" title="Create New Post">
      <Form>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control type = "text" onChange={(event)=>setTitle(event.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control type = "text" onChange={(event)=>setDescription(event.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Type:</Form.Label>
          <Form.Control as="select" custom onChange={(event)=>setCategory(event.target.value)}>
            <option value="FURNITURE">Furniture</option>
            <option value="ELECTRONICS">Electronics</option>
            <option value="CLOTHES">Clothes</option>
            <option value="FOOD">Food</option>
            <option value="OTHER">Other</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <button onClick={() => {submitCommunity()}}>Post</button>
      </Tab>
    </Tabs>
    </div>
  );
};
