import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Col, MenuProps, Row } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Domains",
    key: "app",
    icon: <AppstoreOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
      },
      {
        type: "group",
        label: "Item 2",
      },
    ],
  },
  {
    label: "Contact",
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
];

const GlobalHeader: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Row justify={"space-between"}>
        <Col span={6}>
            <Row>
            <Col span={10}>
            Logo
            </Col>
            <Col span={14}><h1 >Company Name</h1></Col>
            </Row>
            </Col>
      <Col span={6}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Col>
    </Row>
  );
};

export default GlobalHeader;
