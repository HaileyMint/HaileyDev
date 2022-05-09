import PropTypes from "prop-types";

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       새 컴포넌트 작성을 카와이하게 해보겠어요. 제 이름은 {name}입니다만?
//       <br />
//       {children} 요건 예시를 위해 만들었죠.
//       <br /> 크크루삥뽕 제가 제일 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

import React, { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본명칭",
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        <div>
          새 컴포넌트 작성을 카와이하게 해보겠어요. 제 이름은 {name}입니다만?
          <br />
          {children} 요건 예시를 위해 만들었죠.
          <br /> 크크루삥뽕 제가 제일 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "기본명칭",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };
export default MyComponent;
