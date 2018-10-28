import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';
import SeekBar from '../SeekBar';

const SEEKBAR_MARGIN = 10;

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDragging: false,
      clientX: 0,
    };

    this.progressBar = React.createRef();
    this.width = 0;

    this.handleOnDragging = this.handleOnDragging.bind(this);
    this.handleStartDragging = this.handleStartDragging.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }

  componentDidMount() {
    this.loadTransparentImage();
    this.width = this.progressBar.current.offsetWidth;
  }

  loadTransparentImage() {
    this.dragImg = new Image(0, 0);
    this.dragImg.src =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }

  handleOnDragEnd() {
    this.setState({ startDragging: false });
  }

  handleStartDragging(event) {
    event.dataTransfer.setDragImage(this.dragImg, 0, 0);

    this.setState({ startDragging: true });
  }

  handleOnDragging(event) {
    // Get the Relative position of the SeekBar...
    const { left } = this.progressBar.current.getBoundingClientRect();
    const progressBarWidth = this.progressBar.current.offsetWidth;
    const clientX = Math.ceil(
      event.nativeEvent.clientX - (left + SEEKBAR_MARGIN)
    );

    if (clientX < 0) return;

    if (clientX < progressBarWidth) {
      this.setState({
        clientX: clientX,
      });
    }
  }

  getSliderValue() {
    const { clientX } = this.state;
    const sliderValue = Math.ceil((clientX / this.width) * 100);

    return sliderValue;
  }

  render() {
    const { clientX, startDragging } = this.state;

    return (
      <div className="react-slider">
        <h1>React Slider</h1>

        <small>A simple slider build using ReactJS</small>

        <p>Value: {this.getSliderValue() || 0}</p>
        <ProgressBar ref={this.progressBar} fillValue={this.getSliderValue()}>
          <SeekBar
            clientX={clientX}
            startDragging={startDragging}
            handleOnDragEnd={this.handleOnDragEnd}
            handleOnDragging={this.handleOnDragging}
            handleStartDragging={this.handleStartDragging}
          />
        </ProgressBar>
      </div>
    );
  }
}

export default Slider;
