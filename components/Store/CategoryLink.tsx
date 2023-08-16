import React from "react"
import Link from "next/link"
import cn from "clsx";

type CategoryLinkProps = {
    search: string | undefined;
    category: string | undefined;
    categoryName: string;
    currentCategory: string | null;
}
export function CategoryLink({
    search,
    category,
    categoryName,
    currentCategory,
}: CategoryLinkProps) {

    const isActive = categoryName === "all" ? !category : category === categoryName;

    return (
        <Link href={{
            pathname: '/store',
            query: {
                ...(search && { search }),
                ...(categoryName !== 'all' && { category: categoryName })
            }

        }}
        >
            <span className={cn(currentCategory && isActive && 'text-white')}>
                {categoryName}
            </span>
        </Link>
    )

}