/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖:不限制"
  },
  {
    type: 1,
    count: 1,
    text: "特等奖",
    title: "华为Mate50 256GB ",
    img: "../img/huawei50.png"
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "华为Mate50E 256GB",
    img: "../img/huawei50.png"
  },
  {
    type: 3,
    count: 2,
    text: "二等奖",
    title: "华为MatePad Pro",
    img: "../img/huaweipad.png"
  },
  {
    type: 4,
    count: 10,
    text: "三等奖",
    title: "京东购物卡",
    img: "../img/gouwuka.png"
  },
  {
    type: 5,
    count: 50,
    text: "幸运奖",
    title: "定制鼠标垫",
    img: "../img/xinyunj.png"
  },
  {
    type: 6,
    count: 120,
    text: "参与奖",
    title: "现金红包、马克杯、摆件钟馗兔(三选一)",
    img: "../img/canyuj.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 2, 10, 21, 21];

/**
 * 卡片公司名称标识
 */
const COMPANY = "SONGGUO";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
