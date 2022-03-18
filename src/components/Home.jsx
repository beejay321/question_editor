import { Container, Row, Col } from "react-bootstrap";
import EditionView from "./EditionView";
import SummaryView from "./SummaryView";

const Home = () => {
  return (
    <>
      <Container className=" ">
        <Row className="d-flex px-3">
          <Col sm={12} lg={7} className="d-grid justify-content-start px-3  py-5 editorcol ">
            <h3 className="d-flex justify-content-start editortitle editorcol pb-3">Question Edition View</h3>
            <EditionView />
          </Col>
          {/* <Col className="d-flex justify-content-center " sm={0} lg={1}>
            <div className="vertical"></div>
          </Col>{" "} */}
          <Col sm={12} lg={4} className="d-grid justify-content-start px-3  py-5 editorcol">
            <div className="">
              <h3 className="d-flex justify-content-start  editortitle editorcol pb-3 ">Question Summary View</h3>
              <SummaryView />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
