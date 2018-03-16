import React from 'react';
import Topbar from './layout/Topbar';
import Sidebar from './layout/Sidebar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
  render() {
    document.title = "Eazyfyi - Dashboard";
    document.body.classList = "theme-purple";
    return (
      <section>
        <Topbar />
        <Sidebar />
	    <section className="content">
	       <FlashMessagesList />
	       {this.props.children}
	    </section>
      </section>
    );
  }
}

export default App;
