import request from "./../utils/request";

/** 平台配置信息  common.ts*/
export const reqPokemon = () =>
    request({
      url: "/pokemon",
      method: "GET",
    })
 ; 

 /** 平台配置信息  common.ts*/
export const reqPokemonList = (idnum:number) =>
  request({
    url: "/pokemon/"+idnum,
    method: "GET",
  })
; 