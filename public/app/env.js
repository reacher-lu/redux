let env = {
  api: {}
},
ValidIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

env.isTest = (["127.0.0.1", "localhost", "0.0.0.0"].indexOf(window.location.hostname) !== -1 || window.location.search.match("debug=true")) ? true : false;

//是否是线上测试环境
env.isOnlineTest = ["meidian-1.play.admin.jaeapp.com", "meidian-1.play.m.jaeapp.com"].indexOf(window.location.hostname) !== -1  ? true : false;

if (env.isTest) {
env.services = {
  main: "http://meidian.taovip.com",
  meidian: "",
  admin: "",
  app:"",
  apps:''
};
} else {
env.services = {
  main: "http://meidian.taovip.com",
  meidian: "",
  admin: env.isOnlineTest ? "http://meidian-1.play.admin.jaeapp.com" : "http://meidian.play.admin.jaeapp.com",
  app: env.isOnlineTest ? "http://meidian-1.play.m.jaeapp.com" : "http://meidian.play.m.jaeapp.com",
  //拼接前台的访问链接时，需要https.
  apps: env.isOnlineTest ? "https://meidian-1.play.m.jaeapp.com" : "https://meidian.play.m.jaeapp.com"
};
}

// 活动列表页
env.api.activeCancel = "/back/api/cancel.json";
// 删除页面
env.api.pageDel = "/back/api/del.json";
// 复制页面
env.api.copyPageUrl = "/back/api/copyPage.json";
// 发布页面
env.api.pagePublish = "/back/api/publish.json";
// 获取选择宝贝页面宝贝数据
env.api.products = "/back/api/item/products.json";
// 获取选择宝贝页面控制条区域的数据
env.api.getPageInfo = "/back/api/item/getPageInfo.json";
// 获取编辑页面数据
env.api.pageData = "/back/api/pageData.json";
// 获取收藏模块需要的店铺数据
env.api.shopData = "/back/api/shopData.json";
// 获取是否关注该店铺数据
env.api.isFeed = "/api/isFeed.json";
// 获取图片空间数据
env.api.picSpace = "/back/api/picSpace.json";
// 获取素材库分类信息
env.api.materialCategories = "/back/api/materialCategories.json";
// 获取素材库图片信息
env.api.materialPics = "/back/api/materialPics.json";
// 页面推广
env.api.pageMarket = "/back/api/pageMarket.json";
// 上传
env.api.imgUpload = "/back/api/imgUpload.json"
// 保存到草稿箱
env.api.saveData = "/back/api/saveData.json";
// 提建议
env.api.suggestion = "/back/api/question/add.json";
// log日志
env.api.log = "/back/api/log.json";
// 前端埋点日志
env.api.frontlog = "/api/log.json";
// 美店页面列表
env.api.backList = "/back/api/back_list.json";
// 分类列表
env.api.cateList = "/back/api/cates.json";
// 套餐列表
env.api.mealList = "/back/api/mealList.json";
// 搭配宝套餐列表
env.api.dpbMealList = "/back/api/dpbMealList.json";
// 更新手机号和旺旺
env.api.updateSellerInfo = "/back/api/updateSellerInfo.json";
// puv接口
env.api.puv = "/back/api/puv.json";
//点击率
env.api.clickRate = "/back/api/clickRate.json";
//
env.api.moduleClick = "/back/api/moduleClick.json";
//保存页面切换
env.api.saveComposite = '/back/api/saveComposite.json';
//保存详情
env.api.getProductsDetail = '/back/api/productsDetail.json';
//爆款的多张主图
env.api.explosionImgs = '/back/api/item/explosionImgs.json';
//模块复制列表
env.api.moduleCopyData = '/back/api/moduleCopyData.json';
//保存一个复制的模块
env.api.saveModuleCopyData = '/back/api/saveModuleCopyData.json';
//根据mcid,删除一个复制的模块
env.api.delModuleCopyData = '/back/api/delModuleCopyData.json';
//数据验证错误
env.api.dataCasesError = '/back/api/dataCasesError.json';
//批量商品导入
env.api.itemBatchImport = '/back/api/itemBatchImport.json';
//批量商品上传
env.api.itemBatchUpload = '/back/api/itemBatchUpload.json';
// 模块检测
env.api.ve = '/back/api/ve.json';
// 微淘拿奖池数据
env.api.benefitList = '/back/api/benefitList.json';
// 互动加购拿奖池数据
env.api.getInteractPond = '/back/api/getInteractPond.json';
//保存一个价格计划
env.api.pricePlainSave = '/back/api/pricePlainSave.json';
//上传并保存一个价格计划
env.api.pricePlainUpload = '/back/api/pricePlainUpload.json';

//获取和删除一个价格计划
env.api.pricePlainDel = '/back/api/pricePlainDel.json';
env.api.pricePlainGet = '/back/api/pricePlainGet.json';
//价格计划列表
env.api.pricePlainList = '/back/api/pricePlainList.json';

//价格上传状态查询
env.api.importProcess = '/back/api/importProcess.json';
//价格计划的excel上传和下载
env.api.globalItemBatchUpload = '/back/api/globalItemBatchUpload.json';
env.api.downloadImportFile = '/back/api/downloadImportFile.json';

//获取后台自定义设置的旺旺
env.api.consumerWangwang = '/back/api/config/consumerWangwang.json';


//逛店有礼-删除活动
env.api.deleteActivity = '/back/api/deleteActivity.json';

//逛店有礼-保存数据
env.api.saveActivity = '/back/api/saveActivity.json';


export default env

