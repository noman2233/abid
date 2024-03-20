import { Row, Col, Form, Input, Button, Flex } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import LoginPage from "../assets/images/login-page.svg";

const CustomerLogin = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Row gutter={24}>
      <Col span={12}>
        <img src={LoginPage} alt="login page" className="image" />
      </Col>

      <Col span={12} align="middle">
        <Flex
          justify="center"
          align="center"
          vertical={true}
          style={{ height: "100%" }}
        >
          <h2>Create Your Account!</h2>
          <h5>Fill all the required details to create your account.</h5>
          <Form
            onFinish={onFinish}
            className="login-form"
            name="customer_sign_up"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter Your Name"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Enter your password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Sign Up
              </Button>{" "}
              Already have an account? <a href="">Sign in!</a>
            </Form.Item>
          </Form>
        </Flex>
      </Col>
    </Row>
  );
};

export default CustomerLogin;
