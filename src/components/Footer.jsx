import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  handleSlowScrollToTop = () => {
    const scrollStep = window.scrollY / 30; // 30 adımda bir yavaşlat
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, -scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15); // 15 milisaniye aralıklarla kaydırma
  };

  render() {
    return (
      <div>
        <div className="footerContainer">
          <div className="upSideFooter">
            <div className="upButton">
              <img
                onClick={this.handleSlowScrollToTop}
                src="https://images.freeimages.com/vme/images/2/6/269061/up_arrow_preview"
                alt="asdas"
              />
            </div>
            <div className="linksFooter">
              <Link to="http://localhost:3000">Facebook</Link>
              <Link to="http://localhost:3000">Instagram</Link>
              <Link to="http://localhost:3000">Twitter</Link>
            </div>
          </div>
          <hr />
          <div className="downSideFooter">
            Made with <span role='img' aria-label='heart'>❤️</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
