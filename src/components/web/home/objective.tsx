import { Row, Col } from "antd";

const Objectives = () => {
  return (
    <Row className="visionRow objectiveContainer fontPrimary">
      <Col span={24} className="vision">
        {/* <div className="objectiveContainer"> */}
          <h1>Objectives</h1>
          <p>
            Our objective is to become world class pharmaceutical in India as
            well as to provide one of the best world quality and economical
            products to the society. Our company's objectives are as follows :
          </p>
          <p>
            <ol>
                <li>
                Overall quality planning.
                </li>
                <li>
                To set systems which have a bearing on quality.
                </li>
                <li>
                To approve new products for launch.
                </li>
                <li>
                To initiate actions arising
                out of quality com plaints and to resolve non-conformance.
                </li>
                <li>
                To audit, validate and certify vendors.
                </li>
                <li>
                Monitoring stability of all running products and new products.
                </li>
                <li>
                Knowledge to understand value from the customer view point, customer satisfaction.
                </li>
            </ol>
             {/* 1. Overall quality planning
            and monitoring 2. To set systems which have a bearing on quality 3.
            To approve new products for launch. 4. To initiate actions arising
            out of quality com plaints and to resolve non-conformance. 5. To
            audit, validate and certify vendors 6. Monitoring stability of all
            running products and new products 7. Knowledge to understand value
            from the customer view point, customer satisfaction. */}
          </p>
        {/* </div> */}
      </Col>
    </Row>
  );
};

export default Objectives;
