import { Product } from "@/lib/api/products";
import React, { useState, useEffect } from "react";
import { useShoppingCart } from "@/lib/context/shopping-cart";
import { ImageLoader } from "../Ui/ImageLoader";

import {
    RiStarSFill,
    MdAddShoppingCart,
    MdRemoveShoppingCart
} from '@/assets/icon';
import type { MouseEvent } from 'react';
type ProductCartProps = {
    productData: Product
}

export function ProductCard({ productData }: ProductCartProps) {
    const {
        id,
        title,
        image,
        price,
        rating: { count, rate }
    } = productData

    const [productQuantity, setProductQuantity] = useState(0)
    const { currentCart, addProduct, deleteProduct } = useShoppingCart()
    const { quantity } =
        currentCart.find(({ id: cartId }) => cartId === id) ?? {};

    useEffect(() => {
        setProductQuantity(quantity ?? 0);
    }, [quantity]);

    const { label, Icon, onClick } = productQuantity ?
        {
            label: 'Remove',
            Icon: MdRemoveShoppingCart,
            onClick: deleteProduct(id)
        }
        : {
            label: 'Add',
            Icon: MdAddShoppingCart,
            onClick: addProduct(productData)
        };

    const handleClick = (e?: MouseEvent<HTMLButtonElement>): void => {
        e?.stopPropagation();
        e?.preventDefault();
        onClick();
    };


    return (
        <>
            <div className="mt-20 border-2 flex flex-col  ">
                <div className="flex item-center justify-center ">
                    <img
                        src={image}
                        className="object-contain flex h-[230px] w-[100%] items-center justify-center  bg-primary obje"
                    />
                </div>
                <div className="flex flex-col gap-2 p-2">
                    <p className="dark:text-white">{title}</p>
                </div>
                <div className="flex flex-col gap-2 p-2">
                    <p className="dark:text-white font-bold">${price}</p>
                </div>
                <div
                    className="flex items-center justify-between"
                >
                    <div className="p-2">
                        <p className='flex items-center gap-1 text-sm font-light dark:text-white'>
                            <i className='text-yellow-400'>
                                <RiStarSFill />
                            </i>{' '}
                            {rate} | Sold {count}
                        </p>
                    </div>
                    <div >
                        <button
                            className="dark:text-white p-2 rounded-md mb-2 mr-2 hover:border "
                            onClick={handleClick}
                        >{label}</button>

                    </div>
                </div>
            </div>
        </>
    )
}