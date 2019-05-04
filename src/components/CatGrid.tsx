import * as React from 'react';
import CatComponent, { Cat } from './CatComponent';
import '../styles/CatGrid.scss';

export interface Props {
    width: number;
    height: number;
    rows: number;
    cols: number;
}

export interface State {
    cats: Cat[];
    nCats: number;
}

interface Dimension {
    width: number;
    height: number;
}

export default class CatGrid extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            nCats: this.props.rows * this.props.cols,
            cats: [],
        };
    }

    componentWillMount() {
        this.fetchCats(this.divideView());
    }

    fetchCats(dims: Dimension[]) {
        for (let i = 0; i < this.state.nCats; i++) {
            fetch('https://api.thecatapi.com/v1/images/search')
                .then(data => data.json())
                .then(data =>
                    this.setState(prevState => ({
                        cats: [
                            ...prevState.cats,
                            {
                                id: data[0].id,
                                url: data[0].url,
                                width: dims[i].width,
                                height: dims[i].height,
                            },
                        ],
                    })),
                );
        }
    }

    divideView(): Dimension[] {
        let dims: Dimension[] = [];
        for (let i = 0; i < this.state.nCats; i++) {
            dims.push({
                width: this.props.width / this.props.rows,
                height: this.props.height / this.props.cols,
            });
        }

        return dims;
    }

    render() {
        return (
            <div className="CatGrid">
                {this.state.cats.map(cat => (
                    <CatComponent cat={cat} />
                ))}
            </div>
        );
    }
}
