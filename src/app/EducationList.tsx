import { Card } from 'antd';
import React from 'react';

interface EducationItem {
  school: string;
  major: string;
  start: string;
  end: string;
}

interface EducationListProps {
  education: EducationItem[];
}

const EducationList: React.FC<EducationListProps> = ({ education }) => (
  <Card
    variant="outlined"
    className="rounded-lg border-[#d0d7de] bg-white/80 transition-colors duration-150 hover:bg-[#f6f8fa]"
    styles={{ body: { padding: 24, borderRadius: 12 } }}
    style={{ borderRadius: 12 }}
    title="教育背景"
  >
    <div className="flex flex-col gap-3 relative pl-8">
      {education.map((edu, idx) => (
        <div key={idx} className="flex flex-wrap items-center gap-4 px-2 py-1 relative group min-h-[32px]">
          {/* 时间轴圆点 */}
          <span className="absolute left-[-32px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500 border-2 border-white shadow" />
          {/* 时间轴竖线（非最后一项）*/}
          {idx < education.length - 1 && (
            <span className="absolute left-[-26px] top-1/2 w-px h-[36px] bg-green-300 z-0" style={{transform: 'translateY(0.5rem)'}} />
          )}
          <span className="text-sm font-bold text-green-800 bg-green-100 rounded-full px-3 py-1 flex items-center justify-center min-w-[110px] text-center mr-2" style={{lineHeight: '1.5', alignSelf: 'center'}}>{edu.start} - {edu.end}</span>
          <span className="text-base font-semibold text-gray-800 flex-shrink-0">{edu.school}</span>
          <span className="text-green-700 font-medium flex-shrink-0">{edu.major}</span>
        </div>
      ))}
    </div>
  </Card>
);

export default EducationList; 