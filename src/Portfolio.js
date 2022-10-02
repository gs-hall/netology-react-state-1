import React, {Component} from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import {loadData} from "./LoadData";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.filters = ["All", "Websites", "Flayers", "Business Cards"];
    this.allValue = this.filters[0];
    this.state = {
      selected: this.allValue
    };

    this.projects = loadData();
  };

  onClick = (filter) => {
    this.setState({
      selected: filter
    });
  };

  render() {
    return (
      <>
        <Toolbar
          filters = {this.filters}
          selected = {this.state.selected}
          onSelectFilter = {this.onClick}
          />
        <ProjectList
          projects={this.projects}
          selected={this.state.selected}
          allValue={this.allValue}
        />
      </>
    );
  };
};