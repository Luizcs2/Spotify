"use client";

import { useEffect, useState } from "react";

interface ModalProviderProps {
    children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({children}) => {
    const [isMounted,setIsMounted] = useState(false);  

    useEffect(() => {
        setIsMounted(true);
    },[]); 

    if(!isMounted) {
        return null;
    }

    return (
        <>
        modals
        </>
    );
}

export default ModalProvider;