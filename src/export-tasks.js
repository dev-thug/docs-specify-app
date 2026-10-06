export const EXPORT_LIMIT = 1000;

// 이 예제는 호출자가 전달한 역할만 검사한다. 로그인과 권한 발급 계층은 구현 범위 밖이다.
export function exportTasks({ role, tasks }) {
  if (!['owner', 'editor'].includes(role)) throw new Error('ACCESS_DENIED');
  if (!Array.isArray(tasks)) throw new Error('INVALID_TASK_LIST');
  if (tasks.length > EXPORT_LIMIT) throw new Error('EXPORT_LIMIT_EXCEEDED');
  const rows = tasks.map(task => {
    if (!task || typeof task.id !== 'string' || typeof task.title !== 'string' || !['open', 'done'].includes(task.status)) {
      throw new Error('INVALID_TASK');
    }
    return [task.id, task.title, task.status].map(csvCell).join(',');
  });
  return ['id,title,status', ...rows].join('\n');
}

function csvCell(value) {
  const text = /^[=+@-]/.test(value.trimStart()) ? "'" + value : value;
  return '"' + text.replaceAll('"', '""') + '"';
}
