/*通用接口环境处理*/
/*发布*/
let serverUrl = '/';
let loginurl = 'http://xxxx:xxxx/';

if(window.location.host.indexOf('localhost')!=-1 ){
    serverUrl = '/api/'
}

const joint = url => {
  return serverUrl + url
}

const logurl = url => {
  return loginurl + url
}

export  default  {
  login: {
    getLoginUrl: logurl('/getLoginUrl'),  // 获取登录地址
    parseUser: logurl('/parseUserJson'),  // 解析用户
    getAuthToken: logurl('/oauth/token'),    // 获取token
  },

  // 通用接口
  normal: {
    GetUserAndDept: joint('user/GetUserAndDept'),// 获取登陆人的基本信息及部门信息
    SearchApplyState: joint('sys/SearchApplyState'),// 查询状态
  },

  //获取菜单
  GetMenuListByLoginNameAndModelID: joint('user/GetMenuList'),

  GetNeedList: joint('user/need'),   //待办
  GetDoneList: joint('user/done'), // 已办
  GetDetail: joint('user/detail'),  //详情
  GetAudit: joint('user/audit'),  //编辑

  // 数据提报
  dataSubmit: {
    Record: joint('API/AttendanceManage/GetImportRecord'),// 数据记录
    RecordDeital: joint('API/AttendanceManage/GetImportRecordDetail'),// 明细
  },

  // 管理
  travelManager: {
    SearchTravelApplyNew: joint('API/AttendanceManage/SearchTravelApplyNew'),// 个人申请列表
    DeleteTravelApply: joint('API/AttendanceManage/DeleteTravelApply'),// 删除
    EditTravelApply: joint('API/AttendanceManage/GetUpateTravelApplyById'),// 编辑查看
    SaveTravelApply: joint('API/AttendanceManage/SaveTravelApplyNew'),// 保存、提交单据
  },
  dbts:{
    GetApplyedPageList:joint('DesktopModules/BenchMarkingPromote/API/BasicItemAggDeal/GetApplyedPageList'),//获取已办
  }

}