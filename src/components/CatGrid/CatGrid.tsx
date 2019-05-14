import * as React from 'react';
import CatComponent from '../CatComponent/CatComponent';
import './CatGrid.scss';

export interface Props {
    width: number;
    height: number;
    rows: number;
    cols: number;
}

export interface State {
    dims: Dimension[];
}

interface Dimension {
    width: number;
    height: number;
}

export default class CatGrid extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            dims: [],
        };
    }

    componentWillMount() {
        this.divideView();
    }

    divideView() {
        let dims: Dimension[] = [];
        for (let i = 0; i < this.props.rows * this.props.cols; i++) {
            dims.push({
                width: this.props.width / this.props.rows,
                height: this.props.height / this.props.cols,
            });
        }
        this.setState({ dims });
    }

    render() {
        return (
            <div className="CatGrid">
                {this.state.dims.map(dim => (
                    <CatComponent width={dim.width} height={dim.height} />
                ))}
            </div>
        );
    }
}
