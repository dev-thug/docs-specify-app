import { exportTasks } from './export-tasks.js';

console.log(exportTasks({
  role: 'editor',
  tasks: [
    { id: 'DEMO-01', title: '고객 안내 검토', status: 'open' },
    { id: 'DEMO-02', title: '인수인계 문서 정리', status: 'done' },
  ],
}));
