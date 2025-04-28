"use client";

import Modal from "@/components/Modal";
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
        <Modal title=" Test Modal" 
        description="Test Description"
        isOpen={true}
        onChange={() => {}}
        >
            Test children
        </Modal>
        </>
    );
}

export default ModalProvider;