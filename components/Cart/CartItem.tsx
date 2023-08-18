import React, { ChangeEvent, MouseEvent } from 'react';
import { MdAdd, MdRemove, MdDelete } from '@/assets/icon';
import { useShoppingCart } from '@/lib/context/shopping-cart';

type CartItemProps = {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
};

export default function CartITem({
    id,
    title,
    image,
    price,
    quantity,
}: CartItemProps) {


    const { deleteProduct, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart();



    return (
        <>
            <div className="flex mt-10 flex-grow border-4 md:w-[480px] w-[400px]  rounded-lg items-center gap-2 justify-arround">
                <div className="basis-1/3">
                    <img src={image} className="h-full object-contain  w-[108px]  shrink-0 shrink-0 bg-white" />
                </div>
                <div className="flex flex-col gap-3 dark:text-white basis-1/3">
                    <p className="text-sm">{title}</p>
                    <h2 className="font-bold">${price}</h2>
                    <div className="flex items-center ">
                        <h1>Quantity: {quantity}</h1>
                        <h1 className="ml-5">Total: ${quantity * price}</h1>
                    </div>
                </div>
                <div className="dark:text-white h-full flex flex-grow flex-col gap-3 basis-1/3   border-2">
                    <button
                        className="w-full basis-1/3 w-10 h-2 mt-3 p-3 border-b items-center flex justify-center"
                        onClick={() => increaseCartQuantity(id)}

                    >
                        <MdAdd />
                    </button>
                    <button
                        className="w-full basis-1/3 w-10 h-2 mt-3 p-3 border-b items-center flex justify-center"
                        onClick={() => decreaseCartQuantity(id)}
                    ><MdRemove /></button>
                    <button
                        className="w-full basis-1/3 w-10 h-2 mt-3 p-3 border-b items-center flex justify-center"
                        onClick={deleteProduct(id)}
                    ><MdDelete /></button>

                </div>
            </div>
        </>
    )
}