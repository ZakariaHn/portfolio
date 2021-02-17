import { createClass, DOM as dom, PropTypes as propTypes, createElement }
  from 'react';
import objectAssign from 'object-assign';
import headerRow from './header-row';
import dataRow from './data-row';

export default createClass({
  displayName: 'Blotter',
  propTypes: {
    columnConfig: propTypes.object.isRequired,
    data: propTypes.array,
    cssClass: propTypes.string,
    formatRow: propTypes.func
  },
  render() {
    const p = this.props;
    const data = p.data || [];
    function makeDataRow(data, index) {
      return createElement(dataRow, objectAssign({}, p, {
        key: index, data
      }));
    }
    const className = ['blotter'];
    className.push(p.cssClass);
    return (
      dom.div({ className: className.join(' ') },
        dom.table(null,
          dom.thead(null, createElement(headerRow, {
            columnConfig: p.columnConfig
          })),
          dom.tbody(null, data.map(makeDataRow))
        )
      )
    );
  }
});
