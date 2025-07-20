import { Avatar } from 'antd';
import React from 'react';

interface PersonalInfo {
  name: string;
  gender: string;
  age: number;
  experience: number;
  phone: string;
  email: string;
  education: string;
  position: string;
  location: string;
  availability: string;
}

interface HeaderInfoProps {
  personalInfo: PersonalInfo;
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({ personalInfo }) => (
  <div className="w-full flex flex-col items-center pt-16 pb-12">
    {/* 头像区域 */}
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
      <Avatar 
        size={120} 
        src="/lihanqi.png" 
        className="relative border-4 border-white shadow-xl"
        style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
      />
    </div>
    {/* 姓名和职位 */}
    <div className="text-center mb-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
        {personalInfo.name}
      </h1>
      <h2 className="text-xl text-gray-600 font-medium">
        {personalInfo.position}开发工程师
      </h2>
    </div>
    {/* 基本信息卡片 */}
    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/30 max-w-5xl w-full mx-4">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium">{personalInfo.gender} {personalInfo.age}岁</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">{personalInfo.experience}年经验</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-sm font-medium">{personalInfo.education}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <span className="text-sm font-medium">{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm">{personalInfo.availability}</span>
        </div>
        <a 
          href={`tel:${personalInfo.phone}`}
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <span className="text-sm font-medium">{personalInfo.phone}</span>
        </a>
        <a 
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
        >
          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
          <span className="text-sm font-medium">{personalInfo.email}</span>
        </a>
      </div>
    </div>
  </div>
);

export default HeaderInfo; 