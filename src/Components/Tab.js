import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import cx from 'classnames';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = styles.tab_list_item;

    if (activeTab === label) {
      className = cx(styles.tab_list_item, styles.tab_list_active);
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;