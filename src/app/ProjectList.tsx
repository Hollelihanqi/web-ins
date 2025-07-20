import { Card, Tag, Row, Col, Drawer } from 'antd';
import React from 'react';

interface ProjectType {
  title: string;
  time: string;
  tech: string[];
  brief: string;
  duty: string;
  detail: string;
}

interface ProjectListProps {
  projects: ProjectType[];
  onProjectClick: (proj: ProjectType) => void;
  currentProject: ProjectType | null;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onProjectClick, currentProject, drawerOpen, setDrawerOpen }) => (
  <Card
    variant="outlined"
    className="rounded-lg border-[#d0d7de] bg-white/80 transition-colors duration-150 hover:bg-[#f6f8fa]"
    styles={{ body: { padding: 24, borderRadius: 12 } }}
    style={{ borderRadius: 12 }}
    title="项目经验"
  >
    <Row gutter={[20, 20]}>
      {projects.map((proj) => (
        <Col xs={24} md={12} key={proj.title}>
          <Card
            hoverable
            variant="borderless"
            className="rounded-xl border border-gray-100 transition-shadow duration-200 hover:shadow-lg group"
            style={{ minHeight: 200, marginBottom: 8, background: '#f8fafc' }}
            onClick={() => onProjectClick(proj)}
            styles={{ body: { padding: 20 } }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">{proj.title}</span>
              <Tag color="green" className="ml-2">{proj.time}</Tag>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {proj.tech.map(t => <Tag key={t} color="blue" className="mb-1 text-xs px-2 py-0.5">{t}</Tag>)}
            </div>
            <div className="text-gray-700 text-sm mb-2 line-clamp-2" style={{minHeight: 38}}>{proj.brief}</div>
            <div className="border-t border-dashed border-gray-200 my-2"></div>
            <div className="text-xs text-gray-500"><span className="font-semibold text-gray-600">职责：</span>{proj.duty}</div>
          </Card>
        </Col>
      ))}
    </Row>
    <Drawer
      title={<span className="font-bold text-lg">{currentProject?.title}</span>}
      placement="right"
      width={700}
      onClose={() => setDrawerOpen(false)}
      open={drawerOpen}
      styles={{ body: { padding: 24, boxShadow: 'none' } }}
    >
      {currentProject && (
        <div className="space-y-5">
          <div>
            <div className="mb-2 text-gray-600 text-base font-semibold">项目详情</div>
            {currentProject.detail.split(/\n+/).map((line, i) => (
              <p key={i} className="text-gray-800 text-sm leading-7 mb-1 whitespace-pre-line">{line}</p>
            ))}
          </div>
          <div>
            <div className="mb-1 text-gray-600 text-base font-semibold">技术栈</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {currentProject.tech.map(t => <Tag key={t} color="blue" className="mb-1">{t}</Tag>)}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm text-gray-500"><span className="font-semibold">个人职责：</span>{currentProject.duty}</div>
            <div className="text-xs text-gray-400"><span className="font-semibold">项目周期：</span>{currentProject.time}</div>
          </div>
        </div>
      )}
    </Drawer>
  </Card>
);

export default ProjectList; 