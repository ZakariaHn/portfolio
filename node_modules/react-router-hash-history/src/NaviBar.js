import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  history,
  historyAddListen,
  historyRemoveListen
} from './routerHistory';


class NaviBar extends React.Component {
  static defaultProps = {
    defaultLastTitle: '< goback',
    defaultTitle: 'home',
    title: str => {
      return <Text>{str}</Text>;
    },
    leftButton: str => {
      return (
        <TouchableOpacity
          onPress={() => {
            history.goBack();
          }}
          style={ssc.leftButton}
        >
          <Text>{str}</Text>
        </TouchableOpacity>
      );
    },
    rightButton: () => null
  };
  state = {
    canGoBack: false,
    nowTitle: undefined,
    lastTitle: undefined
  };
  componentDidMount() {
    this.historyAddListenID = historyAddListen(() => {
      this.setState({
        canGoBack: history.index > 1
      });
      this.setState({
        nowTitle:
          history.entries[history.index] &&
          history.entries[history.index].state.title
      });
      this.setState({
        lastTitle:
          history.entries[history.index - 1] &&
          '< ' + history.entries[history.index - 1].state.title
      });
    });
  }
  componentWillUnmount() {
    historyRemoveListen(this.historyAddListenID);
  }
  render() {
    return (
      <View
        style={[
          ssc.container,
          this.props.style,
          {
            marginTop: !this.props.isIPhoneX ? 20 : 20 + 22
          }
        ]}
      >
        {this.state.canGoBack &&
          this.props.leftButton(
            this.state.lastTitle || this.props.defaultLastTitle
          )}
        {this.props.title(this.state.nowTitle || this.props.defaultTitle)}
        {this.props.rightButton()}
      </View>
    );
  }
}

const ssc = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    maxHeight: 48,
    minHeight: 48,
    padding: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftButton: {
    position: 'absolute',
    left: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightButton: {
    position: 'absolute',
    right: 16,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default NaviBar;
