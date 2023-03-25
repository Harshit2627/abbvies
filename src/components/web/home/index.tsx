import { Carousel, Col, Row, Space } from "antd";
import { About } from "./about";
import "./homeStyles.css";
import Objectives from "./objective";
import Team from "./team";

export const Home = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Carousel autoplay>
            <div className="bannersContent first">
              <h3>1</h3>
            </div>
            <div className="bannersContent second">
              <h3>2</h3>
            </div>
            <div className="bannersContent third">
              <h3>33333333333333333333333333333333333333333333333</h3>
            </div>
            <div className="bannersContent fourth">
              <h3>4</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
      <About />
      <Objectives/>
      <Team/>
    </div>
  );
};
