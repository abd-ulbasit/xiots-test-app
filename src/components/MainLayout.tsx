import Footer from './Footer';
import Navbar from './Navbar';
interface NavbarProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<NavbarProps> = ({ children }) => {


    return (
        <>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>

        </>
    );
};

export default MainLayout;
