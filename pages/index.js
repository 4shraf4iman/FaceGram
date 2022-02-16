import React from 'react';
import App2 from './App';
import Head from "next/head"


class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>FaceGram</title>
        </Head>
        <App2/>
      </div>
    );
  }
}

export default App;