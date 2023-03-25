import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  TeamOutlined,
  HomeOutlined
} from "@ant-design/icons";
import { Col, MenuProps, Row } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    icon: <HomeOutlined />,
    key: "home",
  },
  {
    label: "Products",
    key: "app",
    icon: <AppstoreOutlined />,
    children: [
      {
        type: "group",
        label: "Bone Health",
      },
      {
        type: "group",
        label:  "Infections & Resistance",
      },
      {
        type: "group",
        label: "Antibiotics",
      },
      {
        type: "group",
        label: "Gastric Discomfort",
      },
      {
        type:"group",
        label: "Performance",
      },
      {
        type: "group",
        label: "Strength, Immunity & Good Health",
      }
    ],
  },
  {
    label: "Contact",
    key: "SubMenu",
    icon: <MailOutlined/>,
  },
  {
    label: "About Us",
    key: "about",
    icon: <TeamOutlined/>,
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
            <Col span={14}><h1 >AbbVie - S</h1></Col>
            </Row>
            </Col>
      <Col span={8}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          color="#2E82A6B8"
          items={items}
        />
      </Col>
    </Row>
  );
};

export default GlobalHeader;
