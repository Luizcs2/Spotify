import useAuthModal from "@/hooks/useAuthModal";
import { useSession, useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Modal from "./Modal";

const AuthModal = () => {
    const supabase = useSupabaseClient();
    const router = useRouter();
    const{session} = useSessionContext();
    const {isOpen,onClose} = useAuthModal (); 

    const onChange = (open: boolean) => {
        if(!open) {
            onClose();
        }
    }
                
    return (
        <Modal
        title="Welcome back"
        description="Login to your account"
        isOpen={isOpen}
        onChange={() => {}}
        >
            <Auth
            theme="dark"
            magicLink={true}
            providers={["github"]}
            supabaseClient={supabase}
            appearance={{
                theme: ThemeSupa,
                variables: {
                    default: {
                        colors: {
                            brand: '#404040',
                            brandAccent: '#22c55e'
                        }
                    }
                }
            }}/>
        </Modal>
    );
}

export default AuthModal;