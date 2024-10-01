import { useState } from "react";
import SidebarItem from "../StudenstList/SidebarItem";
import ToggleSwitch from "../StudenstList/ToggleSwitch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserGraduate, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="w-64 bg-white p-6 shadow-md">
            <div className="flex items-center mb-6">
                <img src="/logo.jpg" alt="X Planet Logo" className="w-16 h-16" />
                <h1 className="text-xl font-bold ml-2">X Planet</h1>
            </div>
            <ul className="space-y-4">
                <SidebarItem label="Overview" icon={<FontAwesomeIcon icon={faTachometerAlt} />} />
                <SidebarItem label="Students" icon={<FontAwesomeIcon icon={faUserGraduate} />} />
                <SidebarItem label="Settings" icon={<FontAwesomeIcon icon={faCog} />} />
                <SidebarItem label="Log Out" icon={<FontAwesomeIcon icon={faSignOutAlt} />} />
                <li>
                    <ToggleSwitch isToggled={isToggled} onToggle={handleToggle} />
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;