import React from 'react';
import ReloadIcon from '@mui/icons-material/Replay';

const Navbar = () => {
    return(
        <div className="navbar">
            <ul>
                <li>Angular 9 MatTable CRUD Example</li>
                <li>Reload data: <ReloadIcon className="reload-icon"/></li>
            </ul>
        </div>
    )
}

export default Navbar;
