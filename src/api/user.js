import request from './request';

/**
 * all users APIs
 */
export const getCaptcha = () => {
  return request({
    url: '/res/captcha',
    method: 'GET',
  });
};

/**
 * check if user exists
 */
export function userIsExist(loginId) {
  return request({
    url: `/api/user/userIsExist/${loginId}`,
    method: 'GET',
  });
}

/**
 * 
 * user registration
 */
export function addUser(user) {
    return request({
        url: '/api/user',
        data: user,
        method: 'POST',
    });
}

/**
 * user login
 */
export function userLogin(loginInfo) {
  return request({
    url: '/api/user/login',
    data: loginInfo,
    method: 'POST',
  })
}

/**
 * get user by id
 */
export function getUserById(id) {
  return request({
    url: `/api/user/${id}`,
    method: 'GET',
  });
}


/**
 * get user by token
 */
export function getUserByToken(){
  return request({
    url: '/api/user/whoami',
    method: 'GET',
  });
}