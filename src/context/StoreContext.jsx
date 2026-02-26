import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // const addToCart = (product) => {
  //   const alreadyAdded = cart.find(item => item.id === product.id);
  //   if(alreadyAdded)
  //     {
  //       alert('Item is already in the cart')
  //       return;
  //     }
  //     setCart([...cart, product]);
  // };



  const addToCart = (product) => {

    setCart(prevCart => {

      const existingItem = prevCart.find(item => item.id === product.id);

      //  If already exists → increase quantity
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      //  If not exists → add with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];

    });
  };

  const quantityIncrement = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const quantityDecrease = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalItems = cart.reduce((acc,item) => acc+item.quantity,0);
  const totalwishlist = wishlist.reduce((acc,item) => acc+item.quantity,0);
  const shippingFee = totalItems * 2;
  const orderTotal = subTotal +  shippingFee;

  // add to wishlist 
    const addToWishlist = (product) => {
  setWishlist(prev => {
    const alreadyAdded = prev.find(item => item.id === product.id);

    if (alreadyAdded) {
      // remove if already exists (toggle)
      return prev.filter(item => item.id !== product.id);
    } else {
      // add if not exists
      return [...prev, product];
    }
  });
};

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

    const removeFromWishlist = (id) => {
      setWishlist(prev => prev.filter(item => item.id !== id));
    };

  return (
    <StoreContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      quantityIncrement,
      quantityDecrease,
      addToWishlist,
      removeFromCart,
      subTotal,
      totalItems,
      shippingFee,
      orderTotal,
      removeFromWishlist,
      totalwishlist
    }}>
      {children}
    </StoreContext.Provider>
  );
};