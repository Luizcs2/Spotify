"use client";

import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";
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
        <AuthModal/>
        </>
    );
}

export default ModalProvider;