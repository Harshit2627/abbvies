import { Row, Col } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../../routing/routes";

export const GlobalFooter = () => {
  const linkSelect = (goToAdd: any) => {
    Navigate(goToAdd);
  };
  return (
    <div>
      <Row>
        <Col xxl={8} xl={8} lg={8} md={12} className="footerCols">
          <Link href={AppRoutes.PRODUCTS}>
            <b>Products</b>
          </Link>
          <p>&#8226; Bone Health</p>
          <p>&#8226; Infections & Resistance</p>
          <p>&#8226; Antibiotics</p>
          <p>&#8226; Gastric Discomfort</p>
          <p>&#8226; Performance</p>
          <p>&#8226; Strength, Immunity & Good Health</p>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} className="footerCols">
          <Link href={AppRoutes.ABOUT_US}>
            <b>About Us</b>
          </Link>
          <p>&#8226; Team</p>
          <p>&#8226; Board</p>
          <p>&#8226; Manufacturing</p>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} className="footerCols">
          <Link href={AppRoutes.CONTACT}>
            <b>Contact</b>
          </Link>
          <p>&#8226; Email : example@abbvies.com</p>
          <p>&#8226; Phone : +91 XXXXXXXX</p>
          <p>
            &#8226; Follow : {"   "}
            <FacebookFilled color="#E2E2E2" style={{ marginRight: "12px" }} />
            {"   "}
            <InstagramFilled color="#E2E2E2" style={{ marginRight: "12px" }} />
            {"   "}
            <TwitterCircleFilled color="#E2E2E2" />
          </p>
        </Col>
      </Row>
      <Row>
        <Col xxl={8} xl={8} lg={8} md={12}>
          <span>© Copyright 2022 AbbVie-S Inc. All rights reserved</span>
        </Col>
      </Row>
    </div>
  );
};
