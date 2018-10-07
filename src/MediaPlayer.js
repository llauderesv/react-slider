import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import { render } from 'react-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      startDragging: false,
      clientX: 0,
    };

    this.progressBar = React.createRef();

    this.handleOnDragging = this.handleOnDragging.bind(this);
    this.handleStartDragging = this.handleStartDragging.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }

  componentDidMount() {
    this.loadTransparentImage();
  }

  loadTransparentImage() {
    this.dragImg = new Image(0, 0);
    this.dragImg.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }

  handleOnDragEnd() {
    this.setState({
      startDragging: false,
    });
  }

  handleOnDragging(event) {
    const progressBarWidth = this.progressBar.current.offsetWidth + 5;
    const clientX = event.clientX;

    if (clientX < 15) return;
    if (clientX <= progressBarWidth)
      this.setState({
        clientX: event.clientX - 15,
      });
  }

  handleStartDragging(event) {
    this.setState({
      startDragging: true,
    });
    event.dataTransfer.setDragImage(this.dragImg, 0, 0);
  }

  render() {
    const { clientX } = this.state;

    return (
      <div>
        <p>React Slider Bar</p>
        <AudioPlayer />
        <div
          ref={this.progressBar}
          style={{
            position: 'absolute',
            top: '10%',
            width: '250px',
            height: '5px',
            backgroundColor: '#5a7cff',
            borderRadius: '20px',
          }}
        >
          <div
            draggable="true"
            onDrag={event => this.handleOnDragging(event)}
            onDragStart={event => this.handleStartDragging(event)}
            onDragEnd={event => this.handleOnDragEnd(event)}
            style={{
              position: 'relative',
              top: '50%',
              transform: 'translateY(-50%)',
              left: clientX,
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              backgroundColor: '#5a7cff',
              border: `${this.state.startDragging ? '5px solid #afbdf1' : ''}`,
            }}
          />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
