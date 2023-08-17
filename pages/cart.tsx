import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { useShoppingCart } from "@/lib/context/shopping-cart";
import CartITem from "@/components/Cart/CartItem";
import Layout from "@/components/Layout/Layout";


export default function Cart() {
    const { cartProducts, currentCart, clearCart, totalPrice } = useShoppingCart()

    const cartLength = currentCart.length;
    return (
        <>
            <Layout>
                <MaxWidthWrapper>

                    <div className="flex flex-col mt-20">
                        <div className="flex items-center dark:text-white">
                            <h2 className="text-2xl font-bold">

                                {
                                    cartLength ? `${cartLength} Product${cartLength > 1 ? "s" : ""}` : "No Products added"
                                }
                            </h2>
                            <button
                                className=" ml-40 !justify-end !p-0 text-xl normal-case text-secondary hover:scale-100 hover:!bg-inherit"
                                onClick={clearCart}
                            >
                                Clear
                            </button>
                        </div>
                        <div className="mt-20">
                            {
                                currentCart.map((cartProduct, index) => (

                                    <CartITem
                                        key={cartProduct.id}
                                        {...cartProduct}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </MaxWidthWrapper>
            </Layout>
        </>
    )
}