import React from 'react';
import './product.css'; // Import the CSS file for styles


const Product = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: '../assate/img/v1.jpeg',
      description: 'Black Sesame Seeds',
    },
    {
      id: 2,
      image: '../assate/img/v2.jpeg',
      description: 'Sunflower Seeds',

    },
    {
      id: 3,
      image: '../assate/img/v3.jpeg',
      description: 'Pumpkin Seed',
    },
    {
      id: 4,
      image: '../assate/img/v4.jpeg',
      description: 'Corn',
    },
    {
      id: 5,
      image: '../assate/img/v5.jpeg',
      description: 'Tongba',
    },
    {
      id: 6,
      image: '../assate/img/v6.jpeg',
      description: 'Fennel Seeds',
    },
    {
      id: 7,
      image: '../assate/img/v7.jpeg',
      description: 'Sombu seeds',
    },
    {
      id: 8,
      image: '../assate/img/v8.jpeg',
      description: 'Kantola seeds',

    },
   
  ];
  const pesticides = [
    {
      id: 1,
      image: '../assate/img/j1.jpeg',
      description: 'Insecticides',
    },
    {
      id: 2,
      image: '../assate/img/j2.jpeg',
      description: 'Herbicides',

    },
    {
      id: 3,
      image: '../assate/img/j3.jpeg',
      description: 'Fungicides ',
    },
    {
      id: 4,
      image: '../assate/img/j4.jpeg',
      description: 'Rodenticides',
    },
    {
      id: 5,
      image: '../assate/img/j5.jpeg',
      description: 'Bactericides',
    },
    {
      id: 6,
      image: '../assate/img/j6.jpeg',
      description: 'Nematicides',
    },
    {
      id: 7,
      image: '../assate/img/j7.jpeg',
      description: 'Molluscicides',
    },
    {
      id: 8,
      image: '../assate/img/j8.jpeg',
      description: 'Acaricides',

    },
   
  ];

  return (
    <div className="container-fluid one">
      <section id="Seeds">
      <div>
      <center>
      <h1 className="section-heading">SEEDS</h1>
      </center>
      </div>
      
    <div className="product-container">
      
       


    
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-card-description">
            <h4>{product.description}</h4>
          </div>
          
        </div>
      ))}
    </div>
    </section>

    <section id="Pecticide">
      <div>
      <center>
      <h1 className="section-heading"> PESTICIDES</h1>
      </center>
      </div>
      
    <div className="product-container">
      
       


    
      {pesticides.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-card-description">
            <h4>{product.description}</h4>
          </div>
          
        </div>
      ))}
    </div>
    </section>
    </div>
  );
  
};

export default Product;

