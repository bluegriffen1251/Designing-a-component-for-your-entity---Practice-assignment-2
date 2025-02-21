import './App.css';
import Productcard from './components/productcard.jsx';

function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'https://picsum.photos/200/300?random=1' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'https://picsum.photos/200/300?random=2' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'https://picsum.photos/200/300?random=3' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'https://picsum.photos/200/300?random=4' },
    { id: 5, name: 'Product 5', price: 59.99, image: 'https://picsum.photos/200/300?random=5' },
    { id: 6, name: 'Product 6', price: 69.99, image: 'https://picsum.photos/200/300?random=6' },
    { id: 7, name: 'Product 7', price: 79.99, image: 'https://picsum.photos/200/300?random=7' },
    { id: 8, name: 'Product 8', price: 89.99, image: 'https://picsum.photos/200/300?random=8' },
    { id: 9, name: 'Product 9', price: 99.99, image: 'https://picsum.photos/200/300?random=9' },
    { id: 10, name: 'Product 10', price: 109.99, image: 'https://picsum.photos/200/300?random=10' }

  ];

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {products.map(product => (
        <Productcard 
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}

    </div>
  );
}

export default App;
