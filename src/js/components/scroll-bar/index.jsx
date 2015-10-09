import React from 'react';
import styles from './styles';

class ScrollBar extends React.Component {
  constructor(props){
    super(props);
    var newState = this.calculateState(props);

    this.state = Object.assign(
      {},
      newState,
      {
        isDragging: false,
        lastClientPosition: 0,
        isHovered: false
      }
    );

    if (props.type === 'vertical') {
      this.bindedHandleMouseMove = this.handleMouseMoveForVertical.bind(this);
    } else {
      this.bindedHandleMouseMove = this.handleMouseMoveForHorizontal.bind(this);
    }

    this.bindedHandleMouseUp = this.handleMouseUp.bind(this);
  }


  componentDidMount(){
    document.addEventListener('mousemove', this.bindedHandleMouseMove);
    document.addEventListener('mouseup', this.bindedHandleMouseUp);
  }


  componentWillReceiveProps(nextProps){
    this.setState(this.calculateState(nextProps));
  }


  componentWillUnmount(){
    document.removeEventListener('mousemove', this.bindedHandleMouseMove);
    document.removeEventListener('mouseup', this.bindedHandleMouseUp);
  }


  calculateState(props){
    var scrollSize = props.containerSize * props.containerSize / props.realSize;
    var multiplier = props.containerSize / props.realSize;
    var position = props.position * multiplier;

    return {
      scrollSize: scrollSize,
      position: position
    };
  }


  setHovered() {
    this.setState({
      isHovered: true
    });
  }


  unsetHovered() {
    this.setState({
      isHovered: false
    });
  }


  handleMouseMoveForHorizontal(e){
    var multiplier = this.props.containerSize / this.props.realSize;
    if (this.state.isDragging) {
      e.preventDefault();
      var deltaX = this.state.lastClientPosition - e.clientX;
      this.setState({ lastClientPosition: e.clientX });
      this.props.onMove(0, deltaX / multiplier);
    }
  }


  handleMouseMoveForVertical(e){
    var multiplier = this.props.containerSize / this.props.realSize;
    if (this.state.isDragging) {
      e.preventDefault();
      var deltaY = this.state.lastClientPosition - e.clientY;
      this.setState({ lastClientPosition: e.clientY });
      this.props.onMove(deltaY / multiplier, 0);
    }
  }


  handleMouseDown(e){
    var lastClientPosition = this.props.type === 'vertical'?
      e.clientY :
      e.clientX;
    this.setState({isDragging: true, lastClientPosition: lastClientPosition });
  }


  handleMouseUp(){
    this.setState({isDragging: false });
  }


  createScrollStyles(){
    if (this.props.type === 'vertical') {
      return Object.assign(
        {},
        styles.__scrollbar_vertical,
        {
          height: this.state.scrollSize,
          marginTop: this.state.position
        });
    } else {
      return Object.assign(
        {},
        styles.__scrollbar_horizontal,
        {
          width: this.state.scrollSize,
          marginLeft: this.state.position
        }
      );
    }
  }


  render(){
    let {
      style,
      scrollBarStyle
    } = this.props;

    let scrollStyle = this.createScrollStyles();

    let containerStyle = styles.block;

    if (this.props.type === 'horizontal') {
      containerStyle = Object.assign(
        {},
        containerStyle,
        styles._horizontal
      );
    }

    if (this.props.type === 'vertical') {
      containerStyle = Object.assign(
        {},
        containerStyle,
        styles._vertical
      );
    }

    if (this.state.isHovered) {
      containerStyle = Object.assign(
        {},
        containerStyle,
        styles.__scrollbar_hovered
      );
    }

    if (this.props.isContainerHovered) {
      containerStyle = Object.assign(
        {},
        containerStyle,
        styles._hovered
      );
    }

    containerStyle = Object.assign(
      {},
      containerStyle,
      style
    );

    scrollStyle = Object.assign(
      {},
      scrollStyle,
      scrollBarStyle
    );

    return (
      <div
        onMouseEnter={this.setHovered.bind(this)}
        onMouseLeave={this.unsetHovered.bind(this)}
        style={containerStyle}>
        <div
          style={scrollStyle}
          onMouseDown={this.handleMouseDown.bind(this)}>
        </div>
      </div>
    );
  }
}

ScrollBar.propTypes = {
  style: React.PropTypes.object,
  scrollBarStyle: React.PropTypes.object,
  onMove: React.PropTypes.func,
  realSize: React.PropTypes.number,
  containerSize: React.PropTypes.number,
  position: React.PropTypes.number,
  type: React.PropTypes.oneOf(['vertical', 'horizontal']),
  isContainerHovered: React.PropTypes.bool
};

ScrollBar.defaultProps = {
  type : 'vertical'
};

export default ScrollBar;
