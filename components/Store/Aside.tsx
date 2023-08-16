import { useState, useEffect } from "react";
import { useRouter } from "next/router"
import cn from "clsx"
import { CategoryLink } from "./CategoryLink";

const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing"
]
export type QueryType = {
    isReady: boolean;
    pathname: string;
    query: {
        [queryName: string]: string | undefined
    }
}

export function Aside() {
    const [currentCategory, setCurrentCategory] = useState<null | string>(null);

    const {
        isReady,
        pathname,
        query: { search, category }
    } = useRouter() as QueryType

    useEffect(() => {
        if (!isReady) return;
        if (pathname === "/store") setCurrentCategory(category ?? "all")
    }, [category])

    return (
        <>
            <div className="md:w-40">

                <div
                    className={cn('flex flex-wrap items-center justify-center gap-2 text-center md:block md:text-left mt-20 mb-2',
                        !currentCategory)}>
                    <h1 className="text-xl dark:text-white">Store/</h1>
                    <p className='text-2xl font-bold capitalize md:text-4xl dark:text-white'>
                        {currentCategory ?? '...'}
                    </p>
                </div>
                <hr />
                <ul className=' mb-20 flex flex-wrap justify-center gap-2 inner:text-lg inner:capitalize inner:text-secondary md:block'>
                    <li>
                        <CategoryLink
                            search={search}
                            category={category}
                            currentCategory={currentCategory}
                            categoryName='all'
                        />
                    </li>
                    {categories.map((categoryName) => (
                        <li key={categoryName} className="text-secondry">
                            <CategoryLink
                                search={search}
                                category={category}
                                currentCategory={currentCategory}
                                categoryName={categoryName}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}