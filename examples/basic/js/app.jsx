import React from 'react'

import ScrollArea from '../../src/js/components/scroll-area';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      itemsCount : 10
    };
  }


  handleAddClick(){
    this.setState({itemsCount: this.state.itemsCount + 10});
  }

  render() {
    var itemElements = [];

    for( var i = 0; i< this.state.itemsCount; i++){
      itemElements.push(<div className='item'>item {i}</div>);
    }

    return (
      <div className='area'>
        <ScrollArea className='area' contentClassName='content'>
          <div className='content'>
            {itemElements}
          </div>
        </ScrollArea>

      </div>
    );
  }
}


export default App;
