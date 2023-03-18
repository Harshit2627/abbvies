import { Carousel, Col, Row, Space } from "antd";
import "./homeStyles.css";

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
      <Row>
        <Col span={24} style={{ padding: 10 }}>
          <h1>About Us</h1>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} style={{ padding: 10 }}>
          <h1>Vision</h1>
          <p>
            Our vision states us to be a commercially viable leading
            pharmaceutical company in providing quality products affordable to
            all sections in the society. We aspire to be the best health care
            company which is dedicated to provide leading innovations and
            solution for tomorrow.
          </p>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} style={{ padding: 10 }}>
          <h1>Mission</h1>
          <p>
            We are responsible to the society, we shall be good, cooperate
            citizen and will be driven by with ethical standard in our
            practices. Abbvies Pharmaceuti- cal's prime mission is to protect
            con- sumers' health and wellbeing. We be- lieve that each patient
            consumes our medicines with trust and confidence.
          </p>
        </Col>
      </Row>
    </div>
  );
};
