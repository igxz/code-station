import React, { useCallback, useState } from 'react';
import { Modal, Radio } from 'antd';

import styles from '../css/LoginForm.module.css';

const LoginForm = (props) => {
  const [value, setValue] = useState(1);
  const handleOk = useCallback(() => {
    console.log('OK is clicked');
  }, []);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  }, []);

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
      </Modal>
    </>
  );
};

export default LoginForm;
