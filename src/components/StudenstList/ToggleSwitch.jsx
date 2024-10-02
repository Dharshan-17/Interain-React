import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ToggleSwitch = ({ isToggled, onToggle }) => {
    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={isToggled}
                    onChange={onToggle}
                />
                <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                <div
                    className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${isToggled ? 'translate-x-full bg-blue-500' : ''
                        }`}
                ></div>
            </div>
            <span className="ml-3 text-gray-600">
                {isToggled ? (
                    <FontAwesomeIcon icon={faSun} className="mr-1" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className="mr-1" />
                )}
                {isToggled ? 'Light Mode' : 'Dark Mode'}
            </span>
        </label>
    );
}

export default ToggleSwitch;