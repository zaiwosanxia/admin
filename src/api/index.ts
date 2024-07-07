// 引入二次封装的axios
import request from "@/utils/request";
// 引入类型
import { resultData } from "@/types";

// 统一网页api


// 登录接口
export const getLogin = () => {
    return new Promise<resultData>((resolve, reject) => {
        request.get('/login')
            .then((res) => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}