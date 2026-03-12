import React from "react";

const About = () => {
  return (
    <div style={{padding:"40px"}}>
      <h1>About SlipCart</h1>

      <p>
        Welcome to <strong>SlipCart</strong>, an online clothing store for 
        men and women. Our platform allows users to browse fashion products,
        add items to their cart, and manage their shopping easily.
      </p>

      <p>
        This project is built using React to demonstrate an e-commerce
        frontend with product pages, cart functionality, and navigation.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Home page with clothing products</li>
        <li>Men clothing section</li>
        <li>Women clothing section</li>
        <li>Add to Cart functionality</li>
        <li>Cart page to view selected products</li>
      </ul>

      <p>
        SlipCart focuses on providing a simple and user-friendly shopping
        experience for clothing lovers.
      </p>
    </div>
  );
};

export default About;        