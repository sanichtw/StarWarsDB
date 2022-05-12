import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Preloader from '../preloader/preloader';

import './item-list.css';

export default class ItemList extends Component {
  state = {
    itemList: null
  }

  componentDidMount() {
    this.props.getData()
      .then((itemList) => this.setState({ itemList }))
  }

  render() {
    const { itemList } = this.state;
    const {renderItem} = this.props;
    if (!itemList) return <Preloader />
    debugger
    return (
      <ul className="item-list list-group">
        {itemList && itemList.map((item) => {
          const {id} = item;
          const itemName = renderItem(item);
          return <li className="list-group-item" key={id}
            onClick={() => this.props.onItemSelected(id)}>{itemName}</li>
        })}
      </ul>
    );
  }
}
