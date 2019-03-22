import request from '../../request/request';

export async function login(params) {
  return request.post(request.api.platformLogin, params);
}

export async function getMenuListByrole(params) {
    return request.get(request.api.getMenuListByrole, params);
  }
