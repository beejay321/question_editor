import { Container, Row, Col } from "react-bootstrap";
import EditionView from "./EditionView";
import SummaryView from "./SummaryView";

const Home = () => {
  return (
    <>
      <Container className=" ">
        <Row>
          <Col sm={12} lg={7} className="d-grid justify-content-start px-3  pt-5">
            <h3 className="d-flex justify-content-start px-3">Question Edition View</h3>
            <EditionView />
          </Col>
          <Col sm={0} lg={1}>
            <div class="vertical"></div>
          </Col>

          <Col sm={12} lg={3} className="d-grid justify-content-start px-3 pt-5">
            <h3 className="d-flex justify-content-start px-3">Question Summary View</h3>
            <SummaryView />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
