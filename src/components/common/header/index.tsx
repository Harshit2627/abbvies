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
    key: "home",
  },
  {
    label: "Verticals",
    key: "app",
    icon: <AppstoreOutlined />,
    children: [
      {
        type: "group",
        label: "Orthopedic",
      },
      {
        type: "group",
        label: "Nutrition and Fitness",
      },
      {
        type: "group",
        label: "Genral",
      },
      {
        type: "group",
        label: "Group 2",
      },
    ],
  },
  {
    label: "Contact",
    key: "SubMenu",
    icon: <SettingOutlined />,
  },
  {
    label: "About Us",
    key: "about",
    icon: <SettingOutlined />,
  },
];

const GlobalHeader: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Row justify={"space-between"} >
        <Col span={6}>
            <Row>
            <Col span={10}>
            Logo
            </Col>
            <Col span={14}><h1 >Company Name</h1></Col>
            </Row>
            </Col>
      <Col span={8}>
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
