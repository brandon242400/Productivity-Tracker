import React, { Component } from "react";
import NavBarDisplay from "./NavBarDisplay";
import * as Routes from "../../constants/routes";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlIndex: this.getUrlIndex,
      showNavBar: false
    };
    this.urls = [Routes.HOME, Routes.HISTORY, Routes.WELCOME, Routes.SIGN_UP];
    this.urlIntervalChecker = null;
  }

  componentDidMount() {
    let URL = window.location.href;
    URL = URL.split("/");
    URL = "/" + URL[URL.length - 1];
    this.setState({ urlIndex: this.urls.indexOf(URL) });
    this.urlIntervalChecker = setInterval(this.startCheckingForUrlChanges, 200);
  }

  componentDidUpdate() {
    // let URL = window.location.href;
    // URL = URL.split("/");
    // URL = "/" + URL[URL.length - 1];
    // if (URL !== this.urls[this.state.urlIndex]) {
    //   this.setState({ urlIndex: this.urls.indexOf(URL) });
    // }
  }

  getUrlIndex = () => {
    let URL = window.location.href;
    URL = URL.split("/");
    URL = "/" + URL[URL.length - 1];
    return this.urls.indexOf(URL);
  };

  getUrl = () => {
    let URL = window.location.href;
    URL = URL.split("/");
    URL = "/" + URL[URL.length - 1];
    return URL;
  };

  startCheckingForUrlChanges = () => {
    if (
      localStorage.getItem("pt-user-visited") ||
      this.getUrl() !== "/welcome"
    ) {
      clearInterval(this.urlIntervalChecker);
      this.setState(() => ({ showNavBar: true }));
      return;
    }
  };

  navigateToURL = index => {
    this.setState(() => ({ urlIndex: index }));
  };

  render() {
    return (
      <>
        {this.state.showNavBar ? (
          <NavBarDisplay
            navigateToURL={this.navigateToURL}
            startingIndex={this.state.urlIndex}
          />
        ) : null}
      </>
    );
  }
}
