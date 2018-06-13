import React from 'react';

export default class Debug extends React.Component {
  render() {
    return (
      <div>
        Adebuggud!
        <pre>{JSON.stringify(this.props.debug)}</pre>
      </div>
    )
  }
}