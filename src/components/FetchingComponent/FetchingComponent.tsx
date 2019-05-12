import * as React from 'react';

export interface Props {
    url: string;
    children: (s: State) => any;
}

export interface State {
    data: any;
    isLoading: boolean;
    error: FetchingError | null;
}

export interface FetchingError {
    message: string;
    code: number;
}

export default class FetchingComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            data: null,
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(this.props.url)
            .then(response => response.json())
            .then(json => this.setState({ data: json, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        return this.props.children(this.state);
    }
}
