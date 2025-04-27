"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {

    const router = useRouter();

    const onClick = () => {
        // Add authentication before pushing to the route
        router.push(href);
    }

    return (
        <button 
            onClick={onClick}  
            className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 border border-neutral-800"
        >
           
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image 
                    src={image} 
                    fill 
                    alt="Image" 
                    className="object-cover" 
                    sizes="(max-width: 64px) 100vw, 64px"
                />
            </div>

            <p className="font-medium truncate py-5"> {name} </p>

            <div className="absolute opacity-0 transition rounded-full items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110" > 
                <FaPlay color="black" />
            </div>
            
        </button>
    )
}   

export default ListItem;    