import "./CartItem.css";

const CartItem = () => {
  const cartElements = [
    {
      id: 1,
      title: "Apple iPhone 16 Pro",
      price: "1,20,000",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      id: 2,
      title: "OnePlus 13",
      price: "70,000",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      id: 3,
      title: "Oppo K12x",
      price: "13,000",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  

  return (
    <div>
      {cartElements.map((item) => (
        <div className="cart-items" key={item.id}>
          <div className="cart-item-name">
            <img src={item.imageUrl} alt={item.title}></img>
            <span className="title">{item.title}</span>
          </div>
          <div className="cart-items-price">Rs {item.price}</div>
          <div className="cart-items-quantity">
            <input type="number" value={item.quantity}></input>
            <button onClick={() => {}}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;