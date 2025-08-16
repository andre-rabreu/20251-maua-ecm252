// rcc
import React, { Component } from "react";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default class Busca extends Component {

    state = {
        searchTerm: ""
    }

    onTermChanged = (event) => {
        // console.log(event.target.value);
        this.setState({searchTerm: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.searchTerm)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="flex flex-column">
                    <IconField iconPosition="left">

                        <InputIcon className="pi pi-search" />
                        <InputText 
                            onChange={this.onTermChanged}
                            id="search" 
                            className="w-full" 
                            placeholder={this.props.hint} />

                    </IconField>
                    <Button className="mt-1" label="Ok" outlined />
                </div>
            </form>
        );
    }
}

Busca.defaultProps = {
    hint: "Buscar"
};