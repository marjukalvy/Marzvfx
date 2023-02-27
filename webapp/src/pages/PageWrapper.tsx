import React from "react";
import Header from "../components/Header/Header";

interface PageWrapperProps {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

const links = [
    { label: 'Home', url: '/' },
    { label: 'Products', url: '/products' }
];

const products = [
    { id: 1, name: 'Product 1', img: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', img: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', img: 'https://via.placeholder.com/150' },
  ];

const PageWrapper = (props: PageWrapperProps) => (
    <>
        <div className="sticky top-0">
            <Header links={links} />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
            <span className="text-9xl text-white">MARZ VFX</span>
            {props.children}
        </div>
    </>
);

export default PageWrapper;