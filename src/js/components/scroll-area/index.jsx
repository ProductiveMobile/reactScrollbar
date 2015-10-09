import React from 'react/addons';
import Scrollbar from '../scroll-bar';
import styles from './styles';

class ScrollArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: 0,
      leftPosition: 0,
      realHeight: 0,
      containerHeight: 0,
      realWidth: 0,
      containerWidth: 0,
      scrollableX: false,
      scrollableY: false
    };

    this.width =0;
    this.height = 0;

    this.bindedHandleWindowResize = this.handleWindowResize.bind(this);
  }


  componentDidMount() {
    window.addEventListener('resize', this.bindedHandleWindowResize);
    this.setSizesToState();
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.bindedHandleWindowResize);
  }


  componentDidUpdate() {
    this.setSizesToState();
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


  handleMove(deltaY, deltaX) {
    let newState = this.computeSizes();
    if (this.canScrollY(newState)) {
      newState.topPosition = this.computeTopPosition(deltaY, newState);
    }
    if (this.canScrollX(newState)) {
      newState.leftPosition = this.computeLeftPosition(deltaX, newState);
    }
    this.setState(newState);
  }


  handleWheel(e) {
    let newState = this.computeSizes();
    let deltaY = e.deltaY * this.props.speed;
    let deltaX = e.deltaX * this.props.speed;

    if (this.canScrollY(newState)) {
      newState.topPosition = this.computeTopPosition(-deltaY, newState);
    }

    if (this.canScrollX(newState)) {
      newState.leftPosition = this.computeLeftPosition(-deltaX, newState);
    }

    if (this.state.topPosition !== newState.topPosition || this.state.leftPosition !== newState.leftPosition) {
      e.preventDefault();
    }

    this.setState(newState);
  }


  computeTopPosition(deltaY, sizes) {
    let newTopPosition = this.state.topPosition + deltaY;

    if (-newTopPosition > sizes.realHeight - sizes.containerHeight) {
      newTopPosition = -(sizes.realHeight - sizes.containerHeight);
    }
    if (newTopPosition > 0) {
      newTopPosition = 0;
    }
    return newTopPosition;
  }


  computeLeftPosition(deltaX, sizes) {
    let newLeftPosition = this.state.leftPosition + deltaX;
    if (-newLeftPosition > sizes.realWidth - sizes.containerWidth) {
      newLeftPosition = -(sizes.realWidth - sizes.containerWidth);
    } else if (newLeftPosition > 0) {
      newLeftPosition = 0;
    }

    return newLeftPosition;
  }


  handleWindowResize() {
    let newState = this.computeSizes();
    let bottomPosition = newState.realHeight - newState.containerHeight;
    if (-this.state.topPosition >= bottomPosition) {
      newState.topPosition = this.canScrollY(newState)? -bottomPosition: 0;
    }

    let rightPosition = newState.realWidth - newState.containerWidth;
    if (-this.state.leftPosition >= rightPosition) {
      newState.leftPosition = this.canScrollX(newState)? -rightPosition: 0;
    }

    this.setState(newState);
  }


  computeSizes() {
    let realHeight = this.contentNode.offsetHeight;
    let containerHeight = React.findDOMNode(this).offsetHeight;
    let realWidth = this.contentNode.offsetWidth;
    let containerWidth = React.findDOMNode(this).offsetWidth;
    let scrollableY = realHeight > containerHeight ||
      this.state.topPosition !== 0;
    let scrollableX = realWidth > containerWidth ||
      this.state.leftPosition !== 0;

    return {
      realHeight: realHeight,
      containerHeight: containerHeight,
      realWidth: realWidth,
      containerWidth: containerWidth,
      scrollableX: scrollableX,
      scrollableY: scrollableY
    };
  }


  setSizesToState() {
    let sizes = this.computeSizes();
    if (sizes.realHeight !== this.state.realHeight || sizes.realWidth !== this.state.realWidth) {
      this.setState(sizes);
    }
  }


  scrollTop() {
    this.setState({topPosition: 0});
  }


  scrollBottom() {
    this.setState({topPosition: -(this.state.realHeight - this.state.containerHeight)});
  }


  canScrollY(state = this.state) {
    return state.scrollableY && this.props.vertical;
  }


  canScrollX(state = this.state) {
    return state.scrollableX && this.props.horizontal;
  }

  onContentMount(content) {
    let node = React.findDOMNode(content);
    this.contentNode = node;
  }

  render() {
    let {
      style,
      contentStyle,
      scrollBarContainerStyle,
      scrollBarStyle
    } = this.props;

    contentStyle = Object.assign(
      {},
      styles.__content,
      {
        marginTop: this.state.topPosition,
        marginLeft: this.state.leftPosition
      },
      contentStyle
    );

    let containerStyle = Object.assign(
      {},
      styles.block,
      style
    );

    let scrollbarY = this.canScrollY()? (
      <Scrollbar
        realSize={this.state.realHeight}
        containerSize={this.state.containerHeight}
        position={-this.state.topPosition}
        onMove={this.handleMove.bind(this)}
        isContainerHovered={this.state.isHovered}
        style={scrollBarContainerStyle}
        scrollBarStyle={scrollBarStyle}
        type='vertical'/>
    ) : null;

    let scrollbarX = this.canScrollX()? (
      <Scrollbar
        realSize={this.state.realWidth}
        containerSize={this.state.containerWidth}
        position={-this.state.leftPosition}
        onMove={this.handleMove.bind(this)}
        isContainerHovered={this.state.isHovered}
        style={scrollBarContainerStyle}
        scrollBarStyle={scrollBarStyle}
        type='horizontal'/>
    ) : null;

    return (
      <div
        onMouseEnter={this.setHovered.bind(this)}
        onMouseLeave={this.unsetHovered.bind(this)}
        onWheel={this.handleWheel.bind(this)}
        style={containerStyle}>
        <div ref={this.onContentMount.bind(this)} style={contentStyle}>
          {this.props.children}
        </div>
        {scrollbarY}
        {scrollbarX}
      </div>
    );
  }
}

ScrollArea.propTypes = {
  style: React.PropTypes.object,
  contentStyle: React.PropTypes.object,
  scrollBarContainerStyle: React.PropTypes.object,
  scrollBarStyle: React.PropTypes.object,
  speed: React.PropTypes.number,
  contentClassName: React.PropTypes.string,
  vertical: React.PropTypes.bool,
  horizontal: React.PropTypes.bool,
  children: React.PropTypes.element
};

ScrollArea.defaultProps = {
  speed: 1,
  vertical: true,
  horizontal: true
};

export default ScrollArea;
