// 训练队列表 返回
export interface TeamList {
  createDept: string;
  createBy: string;
  createTime: string;
  updateBy: string;
  updateTime: string;
  tenantId: string;
  id: string;
  teamName: string;
}
// 训练队类型 返回
export interface TrainType {
  id: string;
  exerciseName: string;
  number: number;
  remarks: string;
}

// 新增训练 请求参数
export interface addTeam {
  trainingTeamId: string;
  trainingTeamName: string;
  exerciseTypeName: string;
  number: number;
  teacherName: string;
}

// 新增训练 返回
export interface addTeamResponse {
  createDept: number;
  createBy: number;
  createTime: string;
  updateBy: number;
  updateTime: string;
  tenantId: null;
  id: string;
  trainingTeamId: string;
  trainingTeamName: string;
  exerciseTypeName: string;
  number: number;
  teacherName: string;
  trainingTime: null;
  students: number[];
  trainingPeopleNumber: null;
}
