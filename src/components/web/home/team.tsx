import { Row, Col, Image, Badge, Card } from "antd";
import quoteBG from "../../../assets/objectiveBanner.jpg";

const Team = () => {
  return (
    <Row className="visionRow objectiveContainer fontPrimary">
      <Col span={24} className="vision">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <h1>
            <u>Team</u>
          </h1>
        </div>
        <Row justify={"space-around"}>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
            <Badge.Ribbon
              className="badge"
              placement="start"
              text="CEO"
              color="cyan-inverse"
            >
              <Card bordered className="teamQuotes">
                <Image
                  className="profileImages"
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <h2 className="fontPrimary">
                  <i> &nbsp; Mr. Anuj Saxena </i>
                </h2>
                <p>
                  <span className="largePara">&#8220;</span><br/>
                  Excellence, To start
                  with Abbvies is focusing on improving the lives of patients by
                  delivering medicines which everyone could afford. Our this
                  purpose helped us to grow as an innovative and trusted name in
                  Pharmaceutical Sector. We have working and business ethics
                  which build us as the company that is widely admired by the
                  pharma as well as health professionals{" "}<br/>
                  <span className="largePara" style={{float:"right"}}>&#8221; </span>
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
            <Badge.Ribbon
              className="badge"
              placement="start"
              text="CEO"
              color="blue"
            >
              <Card bordered className="teamQuotes">
                <Image
                  className="profileImages"
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <h2 className="fontPrimary">
                  <i> &nbsp; Mr. Anuj Saxena </i>
                </h2>
                <p>
                  <span className="largePara">&#8220;</span> vvvvvvvvvvvvvvvvv{" "}
                  <span className="largePara">&#8221; </span>
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={4}>
            <Badge.Ribbon
              className="badge"
              placement="start"
              text="CEO"
              color="blue"
            >
              <Card bordered className="teamQuotes">
                <Image
                  className="profileImages"
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
                <h2 className="fontPrimary">
                  <i> &nbsp; Mr. Anuj Saxena </i>
                </h2>
                <p>
                  <span className="largePara">&#8220;</span> vvvvvvvvvvvvvvvvv{" "}
                  <span className="largePara">&#8221; </span>
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Team;
