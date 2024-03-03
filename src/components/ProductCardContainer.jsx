import ProductCard from "./ProductCard";

export default function ProductCardContainer(props) {

  function handleAddToCart (productName){
    alert(`You added ${productName}`)
  }

  return (
    <>
      <h1>Discover Your Favorites</h1>
      {props.products.map((product) => (<ProductCard key={product.name} {...product} onAddToCart={handleAddToCart} />))}
    </>
  );
}
