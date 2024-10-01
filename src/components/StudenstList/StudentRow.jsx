import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const StudentRow = ({ student }) => {
    const statusStyles =
        student.status === 'Passed'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700';

    return (
        <tr className="border-b">
            <td className="px-4 py-3">{student.id}</td>
            <td className="px-4 py-3">{student.registerNumber}</td>
            <td className="px-4 py-3 capitalize">{student.name}</td>
            <td className="px-4 py-3">{student.department}</td>
            <td className="px-4 py-3">{student.graduationYear}</td>
            <td className="px-4 py-3">{student.contactNo}</td>
            <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-md ${statusStyles}`}>
                    {student.status}
                </span>
            </td>
            <td className="px-4 py-3 flex space-x-2">
                <FontAwesomeIcon icon={faEye} className="cursor-pointer text-gray-600 hover:text-blue-500" title="View" />
                <FontAwesomeIcon icon={faPen} className="cursor-pointer text-gray-600 hover:text-blue-500" title="Edit" />
                <FontAwesomeIcon icon={faTrash} className="cursor-pointer text-gray-600 hover:text-blue-500" title="Delete" />
            </td>
        </tr>
    );
};

export default StudentRow;