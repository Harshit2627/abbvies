import { Carousel, Col, Row } from "antd"
import vision from "../../../assets/vision2.png"
import { DotPosition } from "antd/es/carousel";
import { useState } from "react";


export const About = () => {
    const [dotPosition, setDotPosition] = useState<DotPosition>('left');
    return (
        <>
            <Row className="visionRow">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="vision fontPrimary">
                    <h1>Vision</h1>
                    <p className=" visionPara">
                        Our vision states us to be a commercially viable leading
                        pharmaceutical company in providing quality products affordable to
                        all sections in the society. We aspire to be the best health care
                        company which is dedicated to provide leading innovations and
                        solution for tomorrow.
                    </p>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                    <Carousel dotPosition={dotPosition} effect="fade" autoplay autoplaySpeed={1000}>
                        <div className="visionBannerdiv first-banner">

                        </div>
                        <div className="visionBannerdiv second-banner">

                        </div>
                        {/* <img src={vision} height="220" width="96%" className="visionBanner" />
                        <img src={vision} height="220" width="96%" className="visionBanner" /> */}
                    </Carousel>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="vision fontPrimary">
                    <h1>Mission</h1>
                    <p className="visionPara ">
                        We are responsible to the society, we shall be good, cooperate
                        citizen and will be driven by with ethical standard in our
                        practices. Abbvies Pharmaceuti- cal's prime mission is to protect
                        con- sumers' health and wellbeing. We be- lieve that each patient
                        consumes our medicines with trust and confidence.
                    </p>
                </Col>

            </Row>
        </>
    )
}