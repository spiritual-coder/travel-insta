import React from "react";

import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";

import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;


const items = [
  {
    key: "1",
    image: img1,
    title: "The Glaciers of Himalayas",
  },
  {
    key: "2",
    image: img2,
    title: "Mysore is perfect place to start with in South",
  },
  {
    key: "3",
    image: img3,
    title: "Top 10 Airbnbs",
  },
  {
    key: "4",
    image: img4,
    title: "I visited Bhutan in Lockdown",
  },
  {
    key: "5",
    image: img5,
    title: "Taj - the shining crown of India",
  },
  {
    key: "6",
    image: img6,
    title: "Gateway of India in the heart of Mumbai",
  },
];

function AppFeature() {
  return (
    <div id="blogs" className="block blogsBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Blogs</h2>
          <p>Travel the world through your eyes</p>
        </div>

        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <Card className="blogCard" hoverable cover={<img className="cardImg" alt="Blog" src={item.image} />}>
                  <Meta title={item.title} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
