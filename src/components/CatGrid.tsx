import * as React from 'react';
import CatComponent from './CatComponent';

export interface Props {
    children?: React.ReactNode;
}

export interface State {
    id: string;
    url: string;
    width: number;
    height: number;
}

export default class CatGrid extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            id: '',
            url: '',
            width: 0,
            height: 0,
        };
    }

    componentDidMount() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(data => data.json())
            .then(data => this.setState(data[0]));
    }

    render() {
        return (
            <CatComponent
                id={this.state.id}
                image={this.state.url}
                width={this.state.width}
                height={this.state.height}
            />
        );
    }
}
