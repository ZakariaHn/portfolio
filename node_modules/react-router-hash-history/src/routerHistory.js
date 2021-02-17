import React from 'react';
import { createMemoryHistory } from 'history';
import {
  Route as ReactRoute,
  Router,
  Prompt,
  Redirect,
  Switch,
  withRouter
} from 'react-router';

let position = '#';
let history = createMemoryHistory();
let nowHistory = {
  index: 0,
  length: 1,
  pathname: '/',
  search: '',
  hash: '',
  state: undefined,
  key: ''
};

let historyListenFuncs = {};
let historyListenFuncsLength = 0;
let historyAddListen = func => {
  historyListenFuncsLength += 1;
  historyListenFuncs[historyListenFuncsLength] = func;
  return historyListenFuncsLength;
};
let historyRemoveListen = i => {
  historyListenFuncs[i] = undefined;
};
history.listen(e => {
  try {
    if (nowHistory.key !== e.key) {
      nowHistory = {
        index: history.index,
        length: history.length,
        pathname: e.pathname,
        search: e.search,
        hash: e.hash,
        state: e.state,
        key: e.key
      };
      if (window.location) {
        window.location.href = position + e.pathname;
      }
    }
    for (let key in historyListenFuncs) {
      if (historyListenFuncs[key]) {
        historyListenFuncs[key](history, e);
      }
    }
  } catch (err) {
    // err
  }
});

// history.
//监听触发操作
function hashChange() {
  try {
    let pathname = window.location.href.split(position)[1];
    if (pathname !== nowHistory.pathname) {
      if (history.entries.length > 1) {
        if (pathname === history.entries[history.entries.length - 2].pathname) {
          history.goBack();
          history.entries = history.entries.splice(history.entries.length - 2);
          history.entries.length -= 1;
          // history.go(history.entries.length - 2)
        }
      } else {
        history.push(pathname);
      }
    }
  } catch (err) {
    // err
  }
}

if (!window.location) {
  window.location = {
    href: '',
    hash: '',
    pathname: '',
    hostname: '',
    port: ''
  };
}

try {
  //url变化监听器
  if (
    'onhashchange' in window &&
    (typeof document.documentMode === 'undefined' ||
      document.documentMode === 8)
  ) {
    // 浏览器支持 onhashchange 事件
    window.onhashchange = hashChange; // TODO，对应新的hash执行的操作函数
  } else {
    let oldHash = window.location.hash;

    function isHashChanged() {
      return oldHash === window.location.hash;
    }

    // 不支持则用定时器检测的办法
    setInterval(function() {
      // 检测hash值或其中某一段是否更改的函数， 在低版本的iE浏览器中通过window.location.hash取出的指和其它的浏览器不同，要注意
      var ischanged = isHashChanged();
      if (ischanged) {
        // 对应新的hash执行的操作函数
        hashChange();
      }
    }, 300);
  }
} catch (err) {
  // err
}

const RootRouter = ({ ...props }) => {
  return <Router history={history} {...props} />;
};

const Route = ({
  exact = true,
  path,
  component,
  render,
  children,
  ...props
}) => {
  if (children) {
    return (
      <ReactRoute
        exact={exact}
        path={path}
        render={function() {
          return children;
        }}
        {...props}
      />
    );
  }
  return (
    <ReactRoute
      exact={exact}
      path={path}
      component={component}
      render={render}
      {...props}
    />
  );
};

export {
  history,
  Route,
  Router,
  RootRouter,
  Prompt,
  Redirect,
  Switch,
  nowHistory,
  withRouter,
  hashChange,
  historyAddListen,
  historyRemoveListen,
  position
};
