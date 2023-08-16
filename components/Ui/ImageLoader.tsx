import React from "react";
import { useState } from "react";
import cn from "clsx"
import type { ReactNode } from "react";
import Image from "next/image";
type ImageLoaderProps = {
    src: string;
    alt: string;
    divStyle: string;
    imageStyle?: string;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    draggable?: boolean;
    children: ReactNode;
}

export function ImageLoader({
    src,
    alt,
    divStyle,
    imageStyle,
    objectFit,
    draggable,
    children
}: ImageLoaderProps) {

    const [isLoading, setIsLoading] = useState(true)
    const handleLoad = (): void => setIsLoading(false)

    return (
        <>
            <div
                className={cn(
                    'relative',
                    divStyle,
                    isLoading
                )}
            >
                <Image
                    className={imageStyle}
                    src={src}
                    alt={alt}
                    draggable={draggable}
                    objectFit={objectFit}
                    onLoadingComplete={handleLoad}
                />
                {children}
            </div>
        </>
    )
}