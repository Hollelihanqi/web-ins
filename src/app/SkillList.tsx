import { Card, Tag, Button, Space, Drawer } from 'antd';
import React from 'react';

interface SkillListProps {
  skillList: string[];
  skillDetails: string[];
  currentSkillIndex: number | null;
  setCurrentSkillIndex: (idx: number | null) => void;
  skillDrawerOpen: boolean;
  setSkillDrawerOpen: (open: boolean) => void;
}

const SkillList: React.FC<SkillListProps> = ({ skillList, skillDetails, currentSkillIndex, setCurrentSkillIndex, skillDrawerOpen, setSkillDrawerOpen }) => (
  <Card
    variant="outlined"
    className="rounded-lg border-[#d0d7de] bg-white/80 transition-colors duration-150 hover:bg-[#f6f8fa]"
    styles={{ body: { padding: 24, borderRadius: 12 } }}
    style={{ borderRadius: 12 }}
    onMouseLeave={() => setSkillDrawerOpen(false)}
    title="技能"
    extra={<Button type="link" onClick={() => { setCurrentSkillIndex(null); setSkillDrawerOpen(true); }}>查看详情</Button>}
  >
    <Space wrap>
      {skillList.map((skill, idx) => (
        <Tag
          key={skill}
          color="blue"
          className="cursor-pointer mb-1"
          onClick={() => {
            setCurrentSkillIndex(idx);
            setSkillDrawerOpen(true);
          }}
        >
          {skill}
        </Tag>
      ))}
    </Space>
    <Drawer
      title={
        currentSkillIndex === null
          ? '技能详情'
          : skillList[currentSkillIndex]
      }
      placement="right"
      width={700}
      onClose={() => setSkillDrawerOpen(false)}
      open={skillDrawerOpen}
      styles={{ body: { padding: 24 } }}
    >
      {currentSkillIndex === null ? (
        <ol className="list-decimal pl-5 text-base text-gray-700 leading-7">
          {skillList.map((skill, idx) => (
            <li key={skill} className="mb-2">
              <span className="font-semibold text-blue-700">{skill}：</span>
              {skillDetails[idx]}
            </li>
          ))}
        </ol>
      ) : (
        <div className="text-base text-gray-700 leading-7">
          {skillDetails[currentSkillIndex]}
        </div>
      )}
    </Drawer>
  </Card>
);

export default SkillList; 