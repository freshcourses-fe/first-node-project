class Component {
  constructor(props) {
    this.props = props;
  }

  render() {
    return 'здесь будет моя верстка';
  }
}

const data = true;

// module.exports = {
//   Component,
//   data,
// };
export { Component, data };
export const myFunc = () => {console.log(1234)};
