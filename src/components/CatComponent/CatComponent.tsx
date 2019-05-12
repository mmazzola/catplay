import React from 'react';
import '../../styles/CatComponent.scss';
import FetchingComponent from '../FetchingComponent/FetchingComponent';
import { State as FetchingState } from '../FetchingComponent/FetchingComponent';

export interface Props {
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
            <FetchingComponent url="https://api.thecatapi.com/v1/images/search">
                {({ data, isLoading, error }: FetchingState) => {
                    if (!data || isLoading) {
                        return <p>Loading...</p>;
                    }

                    if (error) {
                        return <p>{error.message}</p>;
                    }

                    return (
                        <div className="Cat">
                            <img
                                src={data[0].url}
                                width={this.props.width}
                                height={this.props.height}
                            />
                        </div>
                    );
                }}
            </FetchingComponent>
        );
    }
}
