export default function ProductCard(props) {
  
  function showPrice(){
    console.log(props.price)
  }
  return (
    <div style={{border:"solid 2px white", borderRadius:"15px", padding:"40px 0", margin:"40px"}}>
      <img src={props.imageUrl} alt="hp 15" />
      <h3>
        {props.name}
      </h3>
      <p>
        {props.description}
      </p>
      <div className="price" onMouseOver={showPrice}>{props.price}</div>
      {props.isInStock == false && <p style={{color: "red"}} >Unavailable</p>}
      <button onClick={() => props.onAddToCart(props.name)} >Add to Cart</button>
    </div>
  );
}
