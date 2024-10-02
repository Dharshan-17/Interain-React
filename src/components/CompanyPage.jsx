
/* import notif from "../../public/bell.png";
import settings from "../../../public/setting.png";
import user from "../../../public/image.png";
import logo from "../../../public/Logo.png"; */

import notif from "../../public/bell.png"
import settings from "../../public/setting.png"
import user from "../../public/image.png"
import logo from "../../public/Logo.png"


function CompanyPage() {
    return (
        <div >
            <header className="bg-white px-4 py-1 flex justify-between items-center border-b border-gray-200">
                <div className="flex items-center space-x-2 ml-14">
                <img src={logo} alt="Logo" className="w-14 h-14" />
                <span className="text-3xl font-bold ml-6 text-blue-600">X planet</span>
                </div>
                <div className="flex items-center space-x-4 ml-14">
                <div className="flex items-center space-x-2 ml-14">
                    <img src={user} alt="Profile" height="50" width="50" className="ml-80 " />
                    <div>
                    <h1 className="text-xl font-bold mt-2">JESSI</h1>
                    <p className="text-sm font-semibold mb-4 ">Student</p>
                    </div>
                </div>
                <img src={settings} alt="Settings" height="40px" width="40px" className="ml-20" />
                <img src={notif} alt="Notifications" height="40px" width="40px" className="ml-20" />
                </div>
            </header>

            <div className="bg-gray-100 h-screen pt-10">
                <div className="bg-white  h-[350px] mx-10 border-0 rounded-2xl ">

                </div>
            </div>

        </div>
    )
}

export default CompanyPage
