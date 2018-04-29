# react-codebox

验证码输入框的 React 实现.

[在线 demo](https://axetroy.github.io/react-codebox)

## Install

```bash
yarn add @axetroy/react-codebox
```

## Usage

```jsx harmony
import React, { Component } from "react";
import Codebox from "@axetroy/react-codebox";

class App extends Component {
  render() {
    return (
      <div>
        <Codebox
          lang={4}
          validator={(input, index) => {
            return /\d/.test(input);
          }}
          onChange={codeArray => {
            console.log(codeArray);
          }}
        />
      </div>
    );
  }
}
```

### License

The [MIT License](https://github.com/axetroy/react-codebox/blob/master/LICENSE)
