import React from 'react';
import './CatComponent.scss';
import FetchingComponent from '../FetchingComponent/FetchingComponent';
import { State as FetchingState } from '../FetchingComponent/FetchingComponent';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

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
                        return (
                            <Segment
                                className="CatLoader"
                                style={{
                                    width: this.props.width,
                                    height: this.props.height,
                                }}
                            >
                                <Dimmer active>
                                    <Loader content="Loading" />
                                </Dimmer>
                            </Segment>
                        );
                    }

                    if (error) {
                        return <p>{error.message}</p>;
                    }

                    return (
                        <div
                            className="Cat"
                            style={{
                                width: this.props.width,
                                height: this.props.height,
                            }}
                        >
                            <img src={data[0].url} />
                        </div>
                    );
                }}
            </FetchingComponent>
        );
    }
}
