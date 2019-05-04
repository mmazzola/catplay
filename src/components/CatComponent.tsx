import React from 'react';
import '../styles/CatComponent.scss';

export interface Props {
    cat: Cat;
}

export interface State {}

export interface Cat {
    id: string;
    url: string;
    width: number;
    height: number;
}

export default class CatComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="Cat">
                <img
                    src={this.props.cat.url}
                    width={this.props.cat.width}
                    height={this.props.cat.height}
                />
            </div>
        );
    }
}
