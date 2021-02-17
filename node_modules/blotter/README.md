# React-Blotter

[![SemVer]](http://semver.org)
[![License]](https://github.com/tjunghans/react-blotter/blob/master/LICENCE)
[![Build Status](https://travis-ci.org/tjunghans/react-blotter.svg?branch=master)](https://travis-ci.org/tjunghans/react-blotter)

Renders a react based blotter - a table presenting data. The table
header and columns are defined using the `columnConfig` configuration
object.

## Install

Install as node dependency:

```
npm install blotter --save
```


## Usage

```javascript
ReactDOM.render(React.createElement(Blotter, {
  columnConfig: {
    type: {
      header: 'Type',
      className: 'type'
    },
    time: {
      className: 'time maturity',
      header: DOM.span({ style: { color: 'green' } }, 'Time'),
      markup(row) {
        return DOM.div({ className: 'value' }, row.time);
      }
    },
    client: {
      className: 'client',
      header: 'Client',
      markup(row) {
        return DOM.div({ className: 'value' }, row.client);
      }
    },
    action: {
      className: 'action',
      header: 'Action',
      markup(row, props) {
        return DOM.button({
          onClick: props.onDelete.bind(this, row.tradeId)
        }, 'delete');
      }
    },
    details: {
      className: 'details',
      header: 'Details',
      markup(row, props) {
        return DOM.button({
          onClick: props.onShowDetails.bind(this, row.tradeId)
        }, 'show details');
      }
    }
  },
  formatRow
  data: [{
      tradeId: 0,
      type: 'Spot',
      maturity: '2016-04-04T13:10:53+02:00',
      client: 'Thomas Junghans'
    }, {
      tradeId: 1,
      type: 'Forward',
      client: 'Max Muster'
    }
  ],
  onDelete(tradeId) {
    deleteRow(tradeId);
  },
  onShowDetails() {
    console.log('showing details for ', this.props.data.tradeId);
  }
}), document.querySelector('#blotter'));

```



## Properties

- `columnConfig`: an object containing header and column information.
  The following properties are possible:
  - `header`: String, table column header value
  - `className`: className that is added to th and td elements
  - `markup(row, props)`: function, if set will be used to render
    an element into the td element. `row` is an item of `data`. `props`
    is a reference, to the row component's react props.
  - `columns`: object with columns.
- `formatRow(row)`: function used to format row data
- `data`: an array of data to display

You can give a row a css class value by including the property
`rowClassName` in the returned obect of `formatRow(row)` or by already
having it on `data[index]`.

All properties are passed to the row component and made available to
the columnConfig, markup function.



## Run local demo

```
npm start & npm run watch
```


- `npm run build` - build production css and js
- `npm run watch` - compile css and js
- `npm start` - start static dev server

## License

MIT

[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/github/license/mashape/apistatus.svg


