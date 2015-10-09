/* eslint-disable camelcase */

export default {
  block: {
    position: 'absolute',
    background: 'none',
    opacity: '0.1',
    zIndex: 9999,
    transition: 'all 0.4s'
  },

  _hovered: {
    opacity: '0.3'
  },

  __scrollbar_hovered: {
    background: 'gray',
    opacity: '0.6'
  },

  _horizontal: {
    width: '100%',
    height: '10px',
    left: 0,
    bottom:0
  },

  _vertical: {
    width: '10px',
    height: '100%',
    right: 0,
    top: 0
  },

  __scrollbar_horizontal: {
    width: '20px',
    height: '8px',
    background: 'black',
    marginTop: '1px'
  },

  __scrollbar_vertical: {
    width: '8px',
    height: '20px',
    background: 'black',
    marginTop: '1px'
  }
};
