import { FiBox } from 'react-icons/fi'; // Replace with any icon

const SectionHeader = ({ title, icon: Icon, linkText = 'View all', linkHref = '#' }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center space-x-2 text-lg font-semibold">
        {Icon && <Icon className="text-blue-600" size={20} />}
        <h2>{title}</h2>
      </div>
      <a
        href={linkHref}
        className="text-blue-600 hover:underline text-sm font-medium"
      >
        {linkText}
      </a>
    </div>
  );
};

export default SectionHeader;
