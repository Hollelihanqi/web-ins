import { Card } from 'antd';
import React from 'react';

interface JobType {
  company: string;
  role: string;
  time: string;
  desc: string;
}

interface JobListProps {
  jobs: JobType[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => (
  <Card
    variant="outlined"
    className="rounded-lg border-[#d0d7de] bg-white/80 transition-colors duration-150 hover:bg-[#f6f8fa]"
    styles={{ body: { padding: 24, borderRadius: 12 } }}
    style={{ borderRadius: 12 }}
    title="工作经历"
  >
    <div className="space-y-4">
      {jobs.map((job, index) => (
        <div key={index} className="relative bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl p-5 border border-blue-100/50 hover:shadow-md transition-all duration-300">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{job.company}</h3>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {job.role}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {job.time}
                </span>
              </div>
            </div>
          </div>
          <div className="text-gray-700 leading-relaxed">
            {job.desc}
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export default JobList; 