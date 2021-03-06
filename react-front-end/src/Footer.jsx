import React, { Component } from 'react';
import axios from 'axios';
import './css/Footer.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Footer extends Component {
constructor(props) {
  super(props)
  this.state = {
    message: 'Click the button to load data!'
  }
}

render() {
  return (
    <footer id="myFooter">
        <div className="container">
            <div id="footer-content" className="row">
                <div className="footer-section col-sm-3 footer-logo">
                    <h2 className="logo"><a className="footer-logo" href="#"> Cards Against Internet </a></h2>
                </div>
                <div className="footer-section col-sm-2">
                    <h5 className="footer-h5">Get started</h5>
                    <ul>
                        <li><a className="footer-a" href="#">Home</a></li>
                        <li><a className="footer-a" onClick={this.props.onOpen} href="#">Sign up</a></li>
                    </ul>
                </div>
                <div className="footer-section col-sm-2">
                    <h5 className="footer-h5">About us</h5>
                    <ul>
                        <li><a className="footer-a" href="mailto:cardsagainstinternet@gmail.com">Contact us</a></li>
                        <li><a className="footer-a" href="https://www.shutupandsitdown.com/review-cards-against-humanity/" >Reviews</a></li>
                    </ul>
                </div>
                <div className="footer-section col-sm-2">
                    <h5 className="footer-h5">Support</h5>
                    <ul>
                        <li><a className="footer-a" href="#">FAQ</a></li>
                        <li><a className="footer-a" href="https://boardgamegeek.com/forum/383041/cards-against-humanity/general">Forums</a></li>
                    </ul>
                </div>
                <div className="footer-section col-sm-3">
                    <div className="social-networks">
                        <a href="https://twitter.com/login?lang=en" className="twitter"><i className="footer-icon fa fa-twitter"></i></a>
                        <a href="https://www.facebook.com/login/" className="facebook"><i className="footer-icon fa fa-facebook"></i></a>
                        <a href="https://mail.google.com/mail/u/0/" className="google"><i className="footer-icon fa fa-google-plus"></i></a>
                    </div>
                    <a href="mailto:cardsagainstinternet@gmail.com"><button type="button" className="btn btn-dark">Contact us</button></a>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2019 Copyright </p>
        </div>
    </footer>
  );
}
}

export default Footer;
