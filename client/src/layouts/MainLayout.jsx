import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
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
            <Navbar />          {/* Appears on all pages */}
            <main className="p-4">
                <Outlet /> {/* Nested routes render here */}
            </main>
        </div>
    </>
);

export default MainLayout;