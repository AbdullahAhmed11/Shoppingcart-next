import React, { useContext, createContext, useState } from "react";
import { useLocalStorage as useStore } from "../hooks/useLocalStorage";
import type { ReactNode, ChangeEvent } from "react";
import type { Product } from "../api/products";

type Cart = Product & { quantity: number };
type Carts = Cart[]

type ShoppingCartContext = {
    totalPrice: number;
    currentCart: Carts;
    cartProducts: number;
    clearCart: () => void;
    addProduct: (productData: Product) => () => void;
    deleteProduct: (productId: number) => () => void;
    handleProductQuantity: (
        productId: number,
        type?: 'increment' | 'decrement'
    ) => (e: ChangeEvent<HTMLInputElement>) => void
    increaseCartQuantity: (productId: number) => void
    decreaseCartQuantity: (id: number) => void


};

const ShoppingCartContext = createContext<ShoppingCartContext | null>(null);

export function useShoppingCart(): ShoppingCartContext {
    const context = useContext(ShoppingCartContext)

    if (!context)
        throw new Error(
            'useShoppingCart must be used within ShoppingCartContext'
        )

    return context;
}


type ShoppingCartProviderProps = {
    children: ReactNode;
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [currentCart, setCurrentCart] = useStore<Carts>('currentCart', [])

    const addProduct = (productData: Product) => (): void =>
        setCurrentCart([{ ...productData, quantity: 1 }, ...currentCart]);

    const deleteProduct = (productId: number) => (): void =>
        setCurrentCart(currentCart.filter(({ id }) => id !== productId));

    const handleProductQuantity =
        (productId: number, type?: 'increment' | 'decrement') =>
            (e?: ChangeEvent<HTMLInputElement>): void => {
                let inputValue = !type ? parseInt(e?.target.value as string, 10) : null;

                if (!type && !inputValue) inputValue = 1;
                else if (inputValue && inputValue >= 10_000) inputValue = 10_000;

                setCurrentCart(
                    currentCart.map((cartProduct) =>
                        cartProduct.id === productId
                            ? {
                                ...cartProduct,
                                quantity:
                                    inputValue ??
                                    (type === 'increment'
                                        ? cartProduct.quantity + 1
                                        : cartProduct.quantity - 1)
                            }
                            : cartProduct
                    )
                );
            };

    const increaseCartQuantity = (productId: number) => {
        setCurrentCart(currentCart.map((cartProduct) =>
            cartProduct.id === productId ? {
                ...cartProduct, quantity: cartProduct.quantity + 1
            } : cartProduct
        )
        )
    }

    const decreaseCartQuantity = (productId: number) => {
        setCurrentCart(currentCart.map((cartProduct) =>
            cartProduct.id === productId ? {
                ...cartProduct, quantity: cartProduct.quantity - 1
            } : cartProduct
        )
        )
    }

    const clearCart = (): void => setCurrentCart([])

    const [cartProducts, totalPrice] = currentCart.reduce(
        ([products, total], { price, quantity }) => [
            products + quantity,
            total + price * quantity
        ],
        [0, 0]
    );


    const value = {
        totalPrice,
        currentCart,
        cartProducts,
        clearCart,
        addProduct,
        deleteProduct,
        handleProductQuantity,
        increaseCartQuantity,
        decreaseCartQuantity
    };


    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )



}