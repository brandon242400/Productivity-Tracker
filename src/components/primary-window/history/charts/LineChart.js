import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";
import styled from "styled-components";

export default class Chart extends Component {
  render() {
    return (
      <Container>
        <ResponsiveContainer aspect={2} width="100%">
          <LineChart data={this.props.data} margin={{ left: 0, right: 5 }}>
            <Line type="monotone" dataKey="score" stroke="#3cc" />
            <CartesianGrid stroke="#999" />
            <XAxis dataKey="date" stroke="#999" />
            <YAxis stroke="#999" />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: rgba(51, 51, 51, 0.85);
  padding: 10px 10px 0 0;
  border: 2px solid #089;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto 5vh auto;
`;
