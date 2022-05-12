import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Preloader from '../preloader/preloader';

import './item-details.css';

export const Record = ({ item, field, label }) => {
  return <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
};

export default class ItemDetails extends Component {
  swapi = new SwapiService();
  state = {
    item: {},
    loading: false,
    getImageUrl: null
  }

  updateItem() {
    const { getData, selectedItem, getImageUrl } = this.props
    getData(selectedItem)
      .then((item) => this.setState({ item, getImageUrl: getImageUrl(item) }))
      .then(() => this.setLoading(false))
  };

  setLoading(value) {
    this.setState({ loading: value })
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setLoading(true)
      this.updateItem()
    }
  }

  render() {
    const { item, item: { name, gender, birthYear, id, eyeColor }, loading, getImageUrl } = this.state;
    if (loading) return <Preloader />
    // if (!Object.keys(person).length) {
    //   return <div>Select an item</div>
    // }
    return (
      <div className="person-details card">
        <img className="person-image"
          src={getImageUrl} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item })
            })}
          </ul>
        </div>
      </div>
    )
  }
}
