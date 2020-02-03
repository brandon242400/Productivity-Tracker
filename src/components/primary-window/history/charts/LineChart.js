import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";

export default class Chart extends Component {
  render() {
    const data = this.props.data;
    return (
      <div
        style={{
          backgroundColor: "#333",
          border: "2px solid #067",
          padding: "10px",
          borderRadius: "15px",
          margin: "0 auto 5vh auto",
          width: "80%"
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="score" stroke="#3cc" />
            <CartesianGrid stroke="#089" />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
