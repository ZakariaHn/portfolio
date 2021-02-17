import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import {
  Route,
  history,
  historyAddListen,
  historyRemoveListen
} from './routerHistory';

let NaviRoute = ({
  exact = true,
  path,
  component,
  render,
  children,
  backgroundColor,
  isAnime,
  moveOutFix,
  moveInFix,
  isShowdown
}) => <View />;
const iw = Dimensions.get('window').width;
const ssc = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
});

NaviRoute = class extends React.Component {
  static defaultProps = {
    moveOutFix: 0.25,
    moveInFix: 1,
    backgroundColor: '#fff',
    isAnime: true,
    isShowdown: true
  };
  constructor(props) {
    super(props);
    this.state = {
      nowRoute: false,
      index: this.props.root ? 1 : 0,
      staticAnime: this.props.root ? 0 : iw,
      moveAnime: new Animated.Value(this.props.root ? 0 : iw)
    };
  }
  componentDidMount() {
    const path = this.props.path.replace('*', '');
    this.listen = historyAddListen(h => {
      let index = 0;
      for (let i = 0; i < h.entries.length; i++) {
        const r = h.entries[i];
        if (r.pathname === path) {
          index = i;
        }
      }
      if (index === h.index && !this.state.nowRoute) {
        this.setState(
          {
            nowRoute: true,
            index: 1
          },
          () => {
            this.moveNowPage(0);
          }
        );
      } else if (index > h.index && this.state.nowRoute) {
        this.setState(
          {
            nowRoute: false,
            index: 0,
            staticAnime: 0,
            moveAnime: new Animated.Value(0)
          },
          () => {
            this.moveNowPage(iw * this.props.moveInFix);
          }
        );
      } else if (index < h.index && this.state.nowRoute) {
        this.setState(
          {
            nowRoute: false,
            index: 0,
            staticAnime: 0,
            moveAnime: new Animated.Value(0)
          },
          () => {
            this.moveNowPage(-iw * this.props.moveOutFix);
          }
        );
      }
    });
  }
  componentWillUnmount() {
    historyRemoveListen(this.listen);
  }
  moveNowPage = x => {
    if (this.props.isAnime) {
      Animated.spring(this.state.moveAnime, {
        useNativeDriver: true,
        toValue: x,
        damping: 33,
        stiffness: 300
      }).start();
    } else {
      this.setState({
        staticAnime: x
      });
    }
  };
  render() {
    return (
      <Animated.View
        style={[
          ssc.container,
          {
            shadowOpacity: 0.07,
            shadowOffset: { width: -3, height: 0 },
            shadowColor: '#000',
            shadowRadius: 0,
            backgroundColor: this.props.backgroundColor,
            zIndex: this.state.index,
            transform: [
              {
                translateX: this.props.isAnime
                  ? this.state.moveAnime
                  : this.state.staticAnime
              }
            ]
          }
        ]}
      >
        <Route {...this.props} />
      </Animated.View>
    );
  }
};

export default NaviRoute;
