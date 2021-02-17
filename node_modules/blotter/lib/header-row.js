import { createClass, DOM as dom, PropTypes as propTypes, createElement }
  from 'react';

const HeaderColumn = createClass({
  displayName: 'HeaderColumn',
  propTypes: {
    id: propTypes.oneOfType([
      propTypes.string,
      propTypes.number
    ]).isRequired,
    header: propTypes.oneOfType([
      propTypes.string,
      propTypes.object
    ]),
    className: propTypes.string,
    colSpan: propTypes.number
  },
  render() {
    const p = this.props;
    return (
      dom.th({ className: p.className, colSpan: p.colSpan }, p.header || p.id)
    );
  }
});

export default createClass({
  displayName: 'BlotterHeader',
  propTypes: {
    columnConfig: propTypes.object.isRequired
  },
  render() {
    const configs = this.props.columnConfig;
    const cols = Object.keys(configs).map((id) => {
      const config = configs[id];
      const colSpan = config.columns
        ? Object.keys(config.columns).length : null;
      return createElement(HeaderColumn, {
        key: id,
        id,
        className: config.className,
        header: config.header,
        colSpan
      });
    });
    return (
      dom.tr(null, cols)
    );
  }
});
