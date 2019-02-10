module.exports = function(name) {
  return `
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './${name}.scss';

class ${name} extends React.Component {
  render() {
    return (
      <div className={s.${name}}>
       <h2>Rendering ${name} Component</h2>
      </div>
    );
  }
}

export default withStyles(s)(${name});`;
};
