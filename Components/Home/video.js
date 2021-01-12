import React from "react";

import { Button, Modal } from "antd";

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="video" className="block videoBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Exclusive Featured Video</h2>
            <p>
              Visit new destinations through a virtual experience
            </p>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}>
              <i className="fa fa-play"></i>
            </Button>
          </div>
          <Modal
            title="TravelInsta Featured"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/L5JORXmV_A0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;
