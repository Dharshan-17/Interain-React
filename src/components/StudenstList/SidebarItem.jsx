const SidebarItem = ({ label, icon }) => {
    return (
        <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            {icon}
            <span className="ml-3">{label}</span>
        </li>
    );
};

export default SidebarItem;