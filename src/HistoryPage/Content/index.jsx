import React, {Component} from 'react';
import './index.css';
import DevpostCard from './DevpostCard';

class Content extends Component {
  render() {
    return (<div className="centered-box relative history">
      <div className="header-section">
        <div className="icon icon-clock"/>
        <h3 className="title">
          A Walk Through Memory Lane
        </h3>
      </div>
      <DevpostCard logo="https://hacktj.org/2019/img/logo2.png" iteration="6.0" year="2019" url="https://hacktj2019.devpost.com/"/>
      <DevpostCard logo="https://hacktj.org/2018/img/favicon.png" iteration="5.0" year="2018" url="https://hacktj2018.devpost.com/"/>
      <DevpostCard logo="https://hacktj.org/2017/img/favicon.png" iteration="4.0" year="2017" url="https://hacktj2017.devpost.com/"/>
      <DevpostCard logo="https://hacktj.org/2016/img/favicon.png" iteration="3.0" year="2016" url="https://hacktj2016.devpost.com/"/>
      <DevpostCard logo="https://hacktj.org/2015/img/favicon.png" iteration="2.0" year="2015" url="https://hacktj2015.devpost.com/"/>
    </div>);
  }
}

export default Content;
