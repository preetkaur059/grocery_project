import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emptywishlist from "../../assets/emptywishlist.jpg";
import { StoreContext } from "../../context/StoreContext";

const Wishlist = () => {

  const { wishlist, addToCart, removeFromWishlist } = useContext(StoreContext);

  return (
    <div className="max-w-[1400px] mt-40 mx-auto px-5">

      {
        wishlist.length === 0 ? (

          //  Empty Wishlist Section
          <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
            <img
              src={emptywishlist}
              alt="Empty Wishlist"
              className="w-80 md:w-96 "
            />
          </div>

        ) : (

          //  Wishlist Products Grid
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

              {wishlist.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-100 p-5 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-500"
                >
                  {/* Image */}
                  <div className="w-full h-48 flex justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center my-4">
                    <h3 className="text-xl font-semibold">
                      {product.name}
                    </h3>

                    <p className="text-2xl font-bold my-2 text-orange-500">
                      ${product.price.toFixed(2)}
                    </p>

                    <div className="flex justify-center gap-3 mt-3">
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition duration-300 cursor-pointer"
                      >
                        Add To Cart
                      </button>

                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="bg-gradient-to-b from-zinc-500 to-zinc-600 text-white px-4 py-2 rounded-lg hover:scale-105 hover:bg-red-600 transition duration-300 cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </AnimatePresence>

        )
      }

    </div>
  );
};

export default Wishlist;