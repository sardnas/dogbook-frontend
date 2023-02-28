import React, { Component } from 'react';

class ResponsiveDogStats extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            currentPage: 1
        })

    }
    render() {
        return (
            <>
                <div>menu</div>
                {this.no ? (
                    <>
                    </>
                ) : this.yes ? (
                    <></>
                ) : (
                    <></>
                )}
            </>
        );
    }
}

export default ResponsiveDogStats;