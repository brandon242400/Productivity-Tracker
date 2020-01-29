import React, { Component } from "react";
import NavBarDisplay from "./NavBarDisplay";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlIndex: this.getUrlIndex
    };
    this.urls = ["/", "/history", "/welcome", "/sign-up"];
  }

  componentDidMount() {
    let URL = window.location.href;
    URL = URL.split("/");
    URL = "/" + URL[URL.length - 1];
    this.setState({ urlIndex: this.urls.indexOf(URL) });
  }

  componentWillUnmount() {}

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

  navigateToURL = index => {
    let URL = window.location.href;
    URL =
      URL.split("/")
        .slice(0, -1)
        .join("/") + this.urls[index];
    window.location.replace(URL);
  };

  render() {
    return (
      <>
        {localStorage.getItem("pt-user-visited") ||
        this.urls[this.state.urlIndex] !== "/welcome" ? (
          <NavBarDisplay
            navigateToURL={this.navigateToURL}
            startingIndex={this.state.urlIndex}
          />
        ) : null}
      </>
    );
  }
}
