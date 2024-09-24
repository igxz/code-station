import React, { useCallback, useState, useMemo, useRef } from 'react';
import { Modal, Radio, Form, Button, Input, Col, Row, Checkbox } from 'antd';

import styles from '../css/LoginForm.module.css';

const LoginForm = (props) => {
  const [value, setValue] = useState(1);
  const [loginInfo, setLoginInfo] = useState({
    loginId: '',
    loginPwd: '',
    captcha: '',
    remember: false,
  });
  const loginFormRef = useRef(null);

  const registerFormRef = useRef(null);
  const [registerInfo, setRegisterInfo] = useState({
    loginId: '',
    nickName: '',
    captcha: '',
  });

  const [captcha, setCaptcha] = useState(null);

  const handleOk = useCallback(() => {
    console.log('OK is clicked');
  }, []);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  }, []);

  const loginHandle = useCallback(() => {
    console.log('Login Form has been submitted');
  }, []);

  const updateInfo = (loginInfo, value, key, setValue) => {
    const obj = { ...loginInfo };
    obj[key] = value;
    setValue(obj);
  };

  const captchaClickHandle = () => {
    console.log('captcha clicked');
  };

  const registerHandle = () => {
    console.log('register is clicked');
  };

  const formContainer = useMemo(() => {
    if (value === 1) {
      return (
        <div className={styles.container}>
          <Form
            name='basic1'
            autoComplete='off'
            onFinish={loginHandle}
            ref={loginFormRef}
            labelCol={{ span: 6 }} // This adjusts the label width
            wrapperCol={{ span: 18 }} // This adjusts the input field width
          >
            <Form.Item
              label='Login ID'
              name='loginId'
              rules={[
                {
                  required: true,
                  message: 'Please enter a login id',
                },
              ]}
            >
              <Input
                placeholder='Please input your login id'
                value={loginInfo.loginId}
                onChange={(e) =>
                  updateInfo(loginInfo, e.target.value, 'loginId', setLoginInfo)
                }
              />
            </Form.Item>

            <Form.Item
              label='Password'
              name='loginPwd'
              rules={[
                {
                  required: true,
                  message: 'please input password',
                },
              ]}
            >
              <Input.Password
                placeholder='please input a new password, default 123456'
                value={loginInfo.loginPwd}
                onChange={(e) =>
                  updateInfo(
                    loginInfo,
                    e.target.value,
                    'loginPwd',
                    setLoginInfo
                  )
                }
              />
            </Form.Item>

            {/* 验证码 */}
            <Form.Item
              name='logincaptcha'
              label='Validation Code'
              rules={[
                {
                  required: true,
                  message: 'vValidation Code',
                },
              ]}
            >
              <Row align='middle'>
                <Col span={16}>
                  <Input
                    placeholder='please input validation code'
                    value={loginInfo.captcha}
                    onChange={(e) =>
                      updateInfo(
                        loginInfo,
                        e.target.value,
                        'captcha',
                        setLoginInfo
                      )
                    }
                  />
                </Col>
                <Col span={6}>
                  <div
                    className={styles.captchaImg}
                    onClick={captchaClickHandle}
                    dangerouslySetInnerHTML={{ __html: captcha }}
                  ></div>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              name='remember'
              wrapperCol={{
                offset: 5,
                span: 16,
              }}
            >
              <Checkbox
                onChange={(e) =>
                  updateInfo(
                    loginInfo,
                    e.target.checked,
                    'remember',
                    setLoginInfo
                  )
                }
                checked={loginInfo.remember}
              >
                Remember me
              </Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 5,
                span: 16,
              }}
            >
              <Button
                type='primary'
                htmlType='submit'
                style={{ marginRight: 20 }}
              >
                Login
              </Button>
              <Button type='primary' htmlType='submit'>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    } else if (value === 2) {
      return (
        <div className={styles.container}>
          <Form
            name='basic2'
            autoComplete='off'
            ref={registerFormRef}
            onFinish={registerHandle}
            labelCol={{ span: 6 }} // This adjusts the label width
            wrapperCol={{ span: 18 }} // This adjusts the input field width
          >
            <Form.Item
              label='Login ID'
              name='loginId'
              rules={[
                {
                  required: true,
                  message: 'Please input your login ID',
                },
                // 验证用户是否已经存在
                // { validator: checkLoginIdIsExist },
              ]}
              validateTrigger='onBlur'
            >
              <Input
                placeholder='Please input your login ID'
                value={registerInfo.loginId}
                onChange={(e) =>
                  updateInfo(
                    registerInfo,
                    e.target.value,
                    'loginId',
                    setRegisterInfo
                  )
                }
              />
            </Form.Item>

            <Form.Item label='Nick Name' name='nickname'>
              <Input
                placeholder='Please input a Nick Name, default name is xxx'
                value={registerInfo.nickname}
                onChange={(e) =>
                  updateInfo(
                    registerInfo,
                    e.target.value,
                    'nickname',
                    setRegisterInfo
                  )
                }
              />
            </Form.Item>

            <Form.Item
              name='registercaptcha'
              label='Validation Code'
              rules={[
                {
                  required: true,
                  message: 'please input validation code',
                },
              ]}
            >
              <Row align='middle'>
                <Col span={16}>
                  <Input
                    placeholder='please input validation code'
                    value={registerInfo.captcha}
                    onChange={(e) =>
                      updateInfo(
                        registerInfo,
                        e.target.value,
                        'captcha',
                        setRegisterInfo
                      )
                    }
                  />
                </Col>
                <Col span={6}>
                  <div
                    className={styles.captchaImg}
                    onClick={captchaClickHandle}
                    dangerouslySetInnerHTML={{ __html: captcha }}
                  ></div>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 5,
                span: 16,
              }}
            >
              <Button
                type='primary'
                htmlType='submit'
                style={{ marginRight: 20 }}
              >
                Register
              </Button>
              <Button type='primary' htmlType='submit'>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    }
  }, [captcha, loginHandle, loginInfo, registerInfo, value]);

  return (
    <>
      <Modal
        title='Register / Login'
        open={props.isShown}
        onOk={handleOk}
        onCancel={props.handelCancel}
      >
        <Radio.Group
          value={value}
          onChange={onChange}
          className={styles.radioGroup}
          buttonStyle='solid'
        >
          <Radio.Button value={1} className={styles.radioButton}>
            Login
          </Radio.Button>
          <Radio.Button value={2} className={styles.radioButton}>
            Register
          </Radio.Button>
        </Radio.Group>

        {/* container for login and register form */}
        {formContainer}
      </Modal>
    </>
  );
};

export default LoginForm;
