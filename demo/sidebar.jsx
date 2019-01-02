import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Tooltip } from 'antd';
import IMAGE_SHAPES from './shape-config/image-shape';

import './sidebar.less';

const { Panel } = Collapse;

const BASIC_SHAPES = [
  {
    name: '矩形',
    key: 'Rectangle',
    logo: 'https://img.alicdn.com/tfs/TB19O8OokvoK1RjSZFNXXcxMVXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: '圆角矩形',
    key: 'Rounded Rectangle',
    logo: 'https://img.alicdn.com/tfs/TB1rzVHojDpK1RjSZFrXXa78VXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: '梯形',
    key: 'Trapezoid',
    logo: 'https://img.alicdn.com/tfs/TB1nEXPokvoK1RjSZPfXXXPKFXa-33-26.svg',
    width: 120,
    height: 60,
  },
  {
    name: '圆形',
    key: 'Circle',
    logo: 'https://img.alicdn.com/tfs/TB15iXQogHqK1RjSZFkXXX.WFXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: '三角形',
    key: 'Triangle',
    logo: 'https://img.alicdn.com/tfs/TB1cxNKohTpK1RjSZR0XXbEwXXa-38-38.svg',
    width: 80,
    height: 80,
  },
  {
    name: '连线',
    key: 'Line',
    logo: 'https://img.alicdn.com/tfs/TB1LOxPoirpK1RjSZFhXXXSdXXa-38-38.svg',
    width: 80,
    height: 80,
  },
];

const SVG_SHAPES = [{
  name: '上网电量',
  key: 'shangwangdianliang',
  logo: 'https://img.alicdn.com/tfs/TB1i4I1wxTpK1RjSZR0XXbEwXXa-80-80.svg',
  width: 80,
  height: 80,
},
{
  name: '发电收益',
  key: 'fadianshouyi',
  logo: 'https://img.alicdn.com/tfs/TB1MVA2wr2pK1RjSZFsXXaNlXXa-80-80.svg',
  width: 80,
  height: 80,
},
{
  name: '告警监视',
  key: 'gaojingjianshi',
  logo: 'https://img.alicdn.com/tfs/TB1DildwNYaK1RjSZFnXXa80pXa-80-80.svg',
  width: 80,
  height: 80,
}];

const CARD_SHAPES = [{
  name: '主设备',
  key: 'zhushebei',
  logo: 'https://img.alicdn.com/tfs/TB1eD9LdgHqK1RjSZJnXXbNLpXa-144-128.png',
  width: 100,
  height: 80
}];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {
    this.handleSidebarItems();
  }

  handleSidebarItems() {
    const { editor } = this.props;

    if (editor && editor.initSidebar) {
      const sidebarItems = document.querySelectorAll('.custom-sidebar-node');

      const newSidebarItems = [];

      sidebarItems
        && sidebarItems.forEach((item) => {
          if (!item.classList.contains('has-inited')) {
            item.classList.add('has-inited');
            newSidebarItems.push(item);
          }
        });

      editor.initSidebar(newSidebarItems);
    }
  }

  onChange() {
    setTimeout(() => {
      this.handleSidebarItems();
    }, 1000);
  }

  render() {
    return (
      <div className="J_Sidebar_Container sidebar-container">

        <Collapse
          bordered={false}
          defaultActiveKey={['common', 'svg', 'picture', 'card']}
          onChange={() => {
            this.onChange();
          }}
        >
          <Panel key="common" header="基础组件">

            {BASIC_SHAPES.map(shape => (
              <a
                href="javascript:void(0);"
                key={`panel_a_${shape.key}`}
                className="geItem custom-sidebar-node common-panel-node"
                data-shape-type="general"
                data-shape-name={shape.key}
                data-shape-label={shape.name}
                data-shape-width={shape.width}
                data-shape-height={shape.height}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  <img className="sidebar-node-image" src={shape.logo} alt="" />
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>
              </a>
            ))}

          </Panel>

          <Panel header="SVG组件" key="svg">
            {SVG_SHAPES.map(shape => (
              <a
                href="javascript:void(0);"
                key={`panel_a_${shape.key}`}
                className="geItem custom-sidebar-node common-panel-node"
                data-shape-type="svg"
                data-shape-name={shape.key}
                data-shape-label={shape.name}
                data-shape-width={shape.width}
                data-shape-height={shape.height}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  <img className="sidebar-node-image" src={shape.logo} alt="" />
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>
              </a>
            ))}
          </Panel>
          <Panel header="图片组件" key="picture">
            {IMAGE_SHAPES.map(shape => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  return false;
                }}
                key={`panel_a_${shape.key}`}
                href="a"
                className="geItem custom-sidebar-node"
                data-shape-type="image"
                data-shape-width={shape.width}
                data-shape-height={shape.height}
                data-shape-name={shape.key}
                data-shape-label={shape.name}
                title={shape.name}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  <img className="sidebar-node-image" src={shape.logo} alt="" />
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>

              </a>
            ))}

          </Panel>

          <Panel header="卡片组件" key="card">
            {CARD_SHAPES.map(shape => (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  return false;
                }}
                key={`panel_a_${shape.key}`}
                href="a"
                className="geItem custom-sidebar-node"
                data-shape-type="card"
                data-shape-width={shape.width}
                data-shape-height={shape.height}
                data-shape-name={shape.key}
                data-shape-label={shape.name}
                title={shape.name}
              >
                <Tooltip
                  placement="top"
                  title={shape.name}
                  key={`panel_${shape.key}`}
                  className="tooltip"
                >
                  <img className="sidebar-node-image" src={shape.logo} alt="" />
                  <span className="sidebar-node-label">
                    {shape.name}
                  </span>
                </Tooltip>

              </a>
            ))}

          </Panel>

        </Collapse>

      </div>
    );
  }
}

SideBar.propTypes = {
  editor: PropTypes.object,
};

// Specifies the default values for props:
SideBar.defaultProps = {
  editor: {},
};
