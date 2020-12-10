import React, {useEffect, useState } from 'react';
import './PostCreator.scss';
import { postCommunityPost } from '../../../services/RedcycleApi';
import { Form, Tab, Tabs, Button } from 'react-bootstrap'
import { getCommunityPostsFromUser } from '../../../services/RedcycleApi';
import { PostCard } from './PostCard/PostCard';
import { getCurrentUser } from '../../../services/RedcycleApi';

export const PostCreator = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [currentTab, setCurrentTab] = useState("myPosts")
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

    const refreshPosts = () => {
        getCommunityPostsFromUser(currentUser.id).then((posts) => {
            setPosts(posts)
        })
    }

  const submitCommunity = () => {
    const communityPost = {
      "title": title,
      "description": description,
      "creationDate": new Date().toISOString(),
      "available": true,
      "category": category,
      "authorId": currentUser.id,
      "locationId": null
    }
      postCommunityPost(communityPost).then(() => { setCurrentTab("myPosts") })
      refreshPosts()
  }

    useEffect(() => {
        getCurrentUser().then((user) => {
            setCurrentUser(user)
            getCommunityPostsFromUser(user.id).then((posts) => {
                setPosts(posts)
            })
        })
    }, []);


  return (
    <div className={'PostCreator'}>
      <Tabs activeKey = {currentTab} onSelect={(eventKey) => setCurrentTab(eventKey)} id="uncontrolled-tab-example">
      <Tab eventKey="myPosts" title="My Community Posts">
        {posts.map((post, index) => (
            <React.Fragment key={`post-${index}`}>
                <PostCard post={post} refreshPosts={refreshPosts} />
            </React.Fragment>
        ))}
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
      <Button variant="danger" onClick={() => {submitCommunity()}}>Post</Button>
      </Tab>
    </Tabs>
    </div>
  );
};
