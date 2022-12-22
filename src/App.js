/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { Component, Fragment } from "react";

export default class App extends Component {
  x = 100;
  y = 150;
  arr = [];
  food_x = 150;
  food_y = 150;
  key_name = "none";
  score = 2;
  state = { a: 10 };
  fun1 = (e) => {
    this.key_name = e?.key;
  };

  food_collied = () => {
    if (
      this.x >= this.food_x - 10 &&
      this.x <= this.food_x + 10 &&
      this.y >= this.food_y - 10 &&
      this.y <= this.food_y + 10
    ) {
      return true;
    } else {
      return false;
    }
  };

  snake_collied = () => {
    this.arr.map((e) => {
      if (e[0] == this.x && e[1] == this.y) {
        this.score = 0;
        this.arr = [];
      }
    });
  };

  componentWillMount() {
    setInterval(() => {
      if (this.food_collied()) {
        this.food_x = Math.round(Math.random() * 380);
        this.food_y = Math.round(Math.random() * 380);
        this.score++;
      }
      if (this.arr.length > this.score) {
        this.arr.splice(0, 1);
      }
      this.arr.push([this.x, this.y]);
      switch (this.key_name) {
        case "ArrowUp":
          this.y -= 10;
          break;
        case "ArrowDown":
          this.y += 10;
          break;
        case "ArrowRight":
          this.x += 10;
          break;
        case "ArrowLeft":
          this.x -= 10;
          break;

        default:
          break;
      }
      if (this.x > 390) {
        this.x = 0;
      }
      if (this.x < 0) {
        this.x = 400;
      }
      if (this.y > 390) {
        this.y = 0;
      }
      if (this.y < 0) {
        this.y = 400;
      }
      this.snake_collied();
      this.setState({ a: 0 });
    }, 200);
  }
  render() {
    return (
      <Fragment>
        <div style={{ margin: "20px" }}>
          <div
            style={{
              display: "flex",

              alignItems: "center",
              justifyContent: "center",
              //  flex: 1,
              fontSize: "38px",
              flexDirection: "column",
              width: "500px",
              height: "500px",
            }}
          >
            <div>{"React JS snake game"}</div>
            <input
              style={{ display: "none" }}
              onKeyDown={(e) => this.fun1(e)}
              autoFocus
            />
            {"score: " + this.score}
            <div
              style={{
                position: "relative",
                width: "400px",
                height: "400px",
                border: "1px solid blue",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: this.x,
                  top: this.y,
                  width: "8px",
                  height: "8px",
                  border: "1px solid blue",
                  borderRadius: "10px",
                  background: "blue",
                }}
              ></div>
              {this.arr.map((item) => (
                <div
                  style={{
                    position: "absolute",
                    left: item[0],
                    top: item[1],
                    width: "8px",
                    height: "8px",
                    border: "1px solid skyblue",
                    borderRadius: "10px",
                    background: "skyblue",
                  }}
                ></div>
              ))}
              <div
                style={{
                  position: "absolute",
                  left: this.food_x,
                  top: this.food_y,
                  width: "8px",
                  height: "8px",
                  border: "1px solid green",
                  borderRadius: "10px",
                  background: "green",
                }}
              ></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
