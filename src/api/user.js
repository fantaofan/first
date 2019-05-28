import httpRequest from "../lib/axios";
export let getAlist = () => {
  return httpRequest.request({
    url: "carlist",
    method: "get"
  });
};
