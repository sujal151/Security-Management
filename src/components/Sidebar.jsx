import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiLogOut, FiX, FiChevronRight } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUsers, FaMoneyBillWave, FaBuilding, FaExclamationCircle, FaShieldAlt, FaUserShield, FaBullhorn } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [financialDropdownOpen, setFinancialDropdownOpen] = useState(false);
  const [ComplaintDropdownOpen, setComplaintTracking] = useState(false);
  const [SecurityDropdownOpen, setSecurityManagement] = useState(false);

  const isActive = (path) => location.pathname === path;

  const closeFinancialDropdown = () => {
    setFinancialDropdownOpen(false);
  };
  const closeCompiantDropdown = () => {
    setComplaintTracking(false);
  };
  const closeSecurityDropdown = () => {
    setSecurityManagement(false);
  };

  const handleFinancialClick = () => {
    if (!financialDropdownOpen) {
      navigate('/financial-management/income');
    }
    setFinancialDropdownOpen(!financialDropdownOpen);
  };

  const handleComplaintClick = () => {
    if (!ComplaintDropdownOpen) {
      navigate('/complaint-tracking/createcomplaint'); 
    }
    setComplaintTracking(!ComplaintDropdownOpen);
  };
  
  const handleSecurityClick = () => {
    if (!SecurityDropdownOpen) {
      navigate('/security-management/visitorlogs');
    }
    setSecurityManagement(!SecurityDropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md w-[280px] z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <div className="flex justify-center items-center h-16 border-b p-4 gap-5">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#fe512e] to-[#f09619] bg-clip-text text-transparent mx-5 ">
          Dash<span className="text-black">Stack</span>
        </h2>
        <button onClick={onClose} className="text-gray-700 hover:text-red-500 lg:hidden mt-1 ">
          <FiX size={24} />
        </button>
      </div>

      <div>
        <ul className="space-y-2 m-6">
          <li>
            <Link
              to="/"
              className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/') ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <FaBullhorn size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/resident-management"
              className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/resident-management') ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <FaUsers size={20} />
              <span>Resident Management</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                handleFinancialClick()
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
              className={`w-full flex justify-between items-center p-2 rounded-lg ${isActive('/financial-management') || financialDropdownOpen ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
            >
              <div className="flex items-center space-x-2">
                <FaMoneyBillWave size={20} />
                <span>Financial Management</span>
              </div>
              {financialDropdownOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </button>
            {financialDropdownOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    to="/financial-management/income"
                    className={`flex items-center space-x-2 p-2 rounded-lg`}
                  >
                    {isActive('/financial-management/income') && <FiChevronRight size={16} />}
                    <span>Income</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/financial-management/expense"
                    className={`flex items-center space-x-2 p-2 rounded-lg `}
                  >
                    {isActive('/financial-management/expense') && <FiChevronRight size={16} />}
                    <span>Expense</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/financial-management/note"
                    className={`flex items-center space-x-2 p-2 rounded-lg`}
                  >
                    {isActive('/financial-management/note') && <FiChevronRight size={16} />}
                    <span>Note</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/facility-management"
              className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/facility-management') ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <FaBuilding size={20} />
              <span>Facility Management</span>
            </Link>
          </li>


          <li>
            <button
              onClick={() => {
                closeFinancialDropdown();
                handleComplaintClick();
                closeSecurityDropdown();
              }}
              className={`w-full flex justify-between items-center p-2 rounded-lg ${isActive('/complaint-tracking') || ComplaintDropdownOpen ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
            >
              <div className="flex items-center space-x-2">
                <FaExclamationCircle size={20} />
                <span>Complaint Tracking</span>
              </div>
              {ComplaintDropdownOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </button>
            {ComplaintDropdownOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    to="/complaint-tracking/createcomplaint"
                    className={`flex items-center space-x-2 p-2 rounded-lg`}
                  >
                    {isActive('/complaint-tracking/createcomplaint') && <FiChevronRight size={16} />}
                    <span>Create Complaint</span>
                  </Link>

                </li>
                <li>
                  <Link
                    to="/complaint-tracking/requesttracking"
                    className={`flex items-center space-x-2 p-2 rounded-lg`}
                  >
                    {isActive('/complaint-tracking/requesttracking') && <FiChevronRight size={16} />}
                    <span>Request Tracking</span>
                  </Link>

                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => {
                handleSecurityClick()
                closeFinancialDropdown();
                closeCompiantDropdown();
              }}
              className={`w-full flex justify-between items-center p-2 rounded-lg ${isActive('/security-management') || SecurityDropdownOpen ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
            >
              <div className="flex items-center space-x-2">
              <FaShieldAlt size={20} />
                <span>Security Management</span>
              </div>
              {SecurityDropdownOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
            </button>
            {SecurityDropdownOpen && (
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  <Link
                    to="/security-management/visitorlogs"
                    className={`flex items-center space-x-2 p-2 rounded-lg`}
                  >
                    {isActive('/security-management/visitorlogs') && <FiChevronRight size={16} />}
                    <span>Visitor Logs</span>

                  </Link>

                </li>
                <li>
                  <Link
                    to="/security-management/securityprotocols"
                    className={`flex items-center space-x-2 p-2 rounded-lg`}
                  >
                    {isActive('/security-management/securityprotocols') && <FiChevronRight size={16} />}
                    <span>Security Protocols</span>

                  </Link>

                </li>
              </ul>
            )}
          </li>



         
          <li>
            <Link
              to="/security-guard"
              className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/security-guard') ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <FaUserShield size={20} />
              <span>Security Guard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/announcement"
              className={`flex items-center space-x-2 p-2 rounded-lg ${isActive('/announcement') ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <FaBullhorn size={20} />
              <span>Announcement</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-0 w-full">
        <button className="flex items-center m-6 space-x-2 p-2 pr-4 rounded-l-full bg-transparent text-[#fe512e]">
          <span className="bg-gradient-to-r from-[#fe512e] to-[#f09619] p-2 rounded-full text-white">
            <FiLogOut size={20} />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
