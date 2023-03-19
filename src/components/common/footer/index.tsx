import { Row, Col,  } from "antd";
import { FacebookFilled, InstagramFilled, TwitterCircleFilled} from '@ant-design/icons';
import Link from "antd/es/typography/Link";

export const GlobalFooter = () => {
  return (
    <div>
      <Row>
        <Col xxl={8} xl={8} lg={8} md={12} className="footerCols">
          <Link href="/">About Us</Link>
          <p>Team</p>
          <p>Board</p>
          <p>Manufacturing</p>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} className="footerCols">
          <Link href="/">Products</Link>
          <p>Nutrition</p>
          <p>Immunity</p>
          <p>Gastro</p>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} className="footerCols">
          <Link href="/">Contact</Link>
          <p>Email</p>
          <p>Phone</p>
          <p>Follow</p>
        </Col>
      </Row>
      <Row justify={"space-between"}>
        <Col xxl={8} xl={8} lg={8} md={12}>
        <span>© Copyright 2022 AbbVie-S Inc. All rights reserved</span>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12}>
        <Row>
        <Col span={4}>
        <FacebookFilled color="#E2E2E2"/>
        </Col>
        <Col span={4}>
        <InstagramFilled color="#E2E2E2"/>
        </Col>
        <Col span={4}>
        <TwitterCircleFilled color="#E2E2E2"/>
        </Col>
        </Row>
        </Col>
      </Row>
    </div>
  );
};
