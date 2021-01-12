import React from "react";
import { Button } from "antd";

import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "14 Days in the valley of Ladakh",
    content:
      "Spectacularly jagged, arid mountains enfold this magical Buddhist ex-kingdom. Picture-perfect gompas (Tibetan Buddhist monasteries) dramatically crown rocky outcrops next to fluttering prayer flags and whitewashed stupas, while prayer wheels spun clockwise release merit-making mantras. Gompa interiors are a riot of golden Buddhas and intricately colourful murals and home to red-robed monks. It's a little corner of Tibet marooned in the furthest reaches of India.",
  },
  {
    key: "2",
    title: "Winter Ice-Skating in Manali",
    content:
      "With Himachal tour packages one can experience the best of adventure, honeymoon, holidaymaking and more in one of India's coveted tourist destination - Himachal Pradesh. Thanks to its stunning countryside, lush green meadows, rich flora and fauna, unexplored areas, unique cultural heritage, chaotic bazaars and a score of adventure activities. Enchanting shrines and temples dot the valley of Kangra while colonial architecture adorns the landscape of Shimla and Dalhousie. Also, a heightened sense of spirituality can be experienced in Dharamshala while the hills of Kullu and Manali calls for adventure.",
  },
  {
    key: "3",
    title: "Postcards from Vietnam",
    content:
      "With its fascinating history, gorgeous landscapes, tasty food, and vibrant energy, Vietnam will awaken all your senses and pull you in from all angles. Visiting Vietnam feels like a trip you’ve never taken before—the best is to expect nothing and enjoy the thrill, serenity, and relaxation of it all.",
  },
];

function AppHero() {
  return (
    <section className="heroSection">
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Check Out
                  </Button>
                  <Button size="large">
                    <i className="fa fa-television"></i> &nbsp;Visit Virtual
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
    </section>
  );
}

export default AppHero;
