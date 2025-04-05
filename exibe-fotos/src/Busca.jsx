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
    };

    render() {
        return (
            <div className="flex flex-column">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText id="search" className="w-full" placeholder={this.props.hint} />
                </IconField>
                <Button className="mt-1" label="Ok" outlined />
            </div>
        );
    }
}

Busca.defaultProps = {
    hint: "Buscar"
};