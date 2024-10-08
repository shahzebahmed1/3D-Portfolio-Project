import {Link, NavLink} from "react-router-dom";
import {socialLinks} from "../constants/index.js";

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                    <p className="blue-gradient_text">SA</p>
                </NavLink>
                <nav className="flex text-lg gap-7 font-medium">
                    <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                        About
                    </NavLink>
                    <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                        Projects
                    </NavLink>
                    <NavLink to="/Contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                        Contact
                    </NavLink>
                    <div className='flex gap-3 justify-center items-center'>
                        {socialLinks.map((link) =>
                            link.name === 'Contact' ? (
                                <NavLink key={link.name} to={link.link} className='w-6 h-6 object-contain'>
                                    <img src={link.iconUrl} alt={link.name} className='w-6 h-6 object-contain'/>
                                </NavLink>
                            ) : (
                                <Link key={link.name} to={link.link} target='_blank'>
                                    <img
                                        src={link.iconUrl}
                                        alt={link.name}
                                        className='w-6 h-6 object-contain'
                                    />
                                </Link>
                            )
                        )}
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;