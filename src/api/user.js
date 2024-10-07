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

export function addUser(user) {
    return request({
        url: '/api/user',
        data: user,
        method: 'POST',
    });
}
