'use client';
import { useRef, useEffect, useState } from 'react';
// @ts-expect-error: vanta 没有类型声明文件，需忽略类型检查
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';
import { Card, Avatar, Tag, Timeline, Button, Space, Row, Col, Drawer } from 'antd';
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { personalInfo, education, jobs, projects, skillList, skillDetails } from './data.js';
import SkillList from './SkillList';
import EducationList from './EducationList';
import JobList from './JobList';
import ProjectList from './ProjectList';
import HeaderInfo from './HeaderInfo';

interface EducationItem {
  school: string;
  major: string;
  start: string;
  end: string;
}

interface ProjectType {
  title: string;
  time: string;
  tech: string[];
  brief: string;
  duty: string;
  detail: string;
}

export default function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<unknown>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
  const [skillDrawerOpen, setSkillDrawerOpen] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState<number | null>(null);

  // 监听页面内容变化，调整背景高度
  useEffect(() => {
    const updateBackgroundHeight = () => {
      if (vantaRef.current) {
        const container = vantaRef.current as HTMLElement;
        const scrollHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;
        const maxHeight = Math.max(scrollHeight, viewportHeight);
        container.style.height = `${maxHeight}px`;
        if (vantaEffect && typeof (vantaEffect as { resize?: () => void }).resize === 'function') {
          (vantaEffect as { resize: () => void }).resize();
        }
      }
    };
    updateBackgroundHeight();
    const observer = new ResizeObserver(updateBackgroundHeight);
    observer.observe(document.body);
    window.addEventListener('resize', updateBackgroundHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateBackgroundHeight);
    };
  }, [vantaEffect]);

  // 只在挂载时初始化 Vanta 动画
  useEffect(() => {
    console.log('vantaRef.current:', vantaRef.current);
    if (!vantaEffect && vantaRef.current) {
      const effect = FOG({
        el: vantaRef.current,
        THREE,
        highlightColor: 0x8ecae6,
        midtoneColor: 0xe0e7ff,
        lowlightColor: 0xb8c1ec,
        baseColor: 0xf8fafc,
        blurFactor: 0.7,
        speed: 1,
        zoom: 1.1,
        size: 1.0,
        height: window.innerHeight,
        width: window.innerWidth,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect && typeof (vantaEffect as { destroy?: () => void }).destroy === 'function') {
        (vantaEffect as { destroy: () => void }).destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{position: 'relative', minHeight: '100vh', overflow: 'hidden'}}>
      {/* Vanta 动画层 */}
      <div
        ref={vantaRef}
        style={{
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      {/* 内容层 */}
      <div style={{position: 'relative', zIndex: 1}}>
        {/* 头部信息区域 */}
        <HeaderInfo personalInfo={personalInfo} />

        {/* 主体内容区域 */}
        <div className="flex-1 w-full max-w-5xl mx-auto px-2 py-8 flex flex-col gap-7">
          {/* 技能卡片独占一行 */}
          <div className="mb-4">
            <SkillList
              skillList={skillList}
              skillDetails={skillDetails}
              currentSkillIndex={currentSkillIndex}
              setCurrentSkillIndex={setCurrentSkillIndex}
              skillDrawerOpen={skillDrawerOpen}
              setSkillDrawerOpen={setSkillDrawerOpen}
            />
          </div>
          {/* 教育背景 */}
          <div className="mb-4">
            <EducationList education={education} />
          </div>
          {/* 工作经历 */}
          <JobList jobs={jobs} />
          {/* 项目经验 */}
          <ProjectList
            projects={projects}
            onProjectClick={(proj) => { setCurrentProject(proj); setDrawerOpen(true); }}
            currentProject={currentProject}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
        </div>
      </div>
    </div>
  );
}
