import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">생각하는 개발자 윤진주 입니다.</h2>
                    <p>늘 새로운 것에 관심이 많고 배우길 좋아합니다. 긍정적이고 발전하는 삶을 위해 노력합니다.

                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Front-end</h3>
                    <p>JavaScript, HTML, CSS, jQuery 를 사용하여 웹 사이트를 만들 수 있습니다.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Back-end</h3>
                    <p>Java, Oracle, Spring을 사용하여 서버를 개발할 수 있습니다.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>ETC</h3>
                    <p>Github, Notion 을 사용할 수 있습니다.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
