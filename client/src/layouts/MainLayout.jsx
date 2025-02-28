import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from 'react-toastify';


const MainLayout = () => (
    <>
        <div >
            <ToastContainer
                position="top-right"
                autoClose={2000}
                draggable
                theme="dark"
                pauseOnFocusLoss={false}
                transition={Bounce}
            />
            <main >
                <Outlet /> {/* Nested routes render here */}
            </main>
        </div>
    </>
);

export default MainLayout;