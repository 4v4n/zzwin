import request from "./../utils/request";

/** 平台配置信息  common.ts*/
export const reqDitto = () =>
    request({
      url: "/pokemon/ditto",
      method: "GET",
    })
 ; 