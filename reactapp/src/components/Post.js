import React from "react";
import "./post.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Indal = styled.div`
  width: 500px;
  height: 300px;
  background-color: red;
  &:hover {
    background-color: whitesmoke;
  }
`;

const Post = ({}) => {
  return (
    <div>
      <h3>Username</h3>
      <img
        className="post__img"
        src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <h4>Caption</h4>
      <Title>Indal kumar</Title>
      <Indal>
        <h1>Inal</h1>
      </Indal>
    </div>
  );
};

export default Post;
