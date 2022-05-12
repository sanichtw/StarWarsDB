import React, { Component } from "react";
import SwapiService from "../../services/swapiService";
import ErrorBoundry from "../error-boundry/error-boundry";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list";
import Row from "../row/row";
import ItemDetails from "../item-details";

export default class PeoplePage extends Component {
    swapi = new SwapiService();
    state = {
        selectedItem: null,
    }

    onItemSelected = (id) => {
        this.setState({ selectedItem: id })
    }


    render() {
        const { selectedItem } = this.state;
        const itemList = (
            <ItemList onItemSelected={this.onItemSelected} getData={this.swapi.getAllPeople}
                renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`} />
        );
        const itemDetails = (
            <ItemDetails selectedItem={selectedItem} />
        );

        if (this.state.hasError) return <ErrorIndicator />

        return (
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
        )
    }
}