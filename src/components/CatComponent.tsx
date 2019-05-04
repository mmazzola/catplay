import React from 'react';
import '../styles/CatComponent.scss';

export interface Props {
    id: string;
    image: string;
    width: number;
    height: number;
}

export interface State {}

export default class CatComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="Cat">
                <img
                    src={this.props.image}
                    width={this.props.width}
                    height={this.props.height}
                />
            </div>
        );
    }
}
