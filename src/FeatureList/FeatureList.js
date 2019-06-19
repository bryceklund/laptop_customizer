import React, { Component } from 'react';
import './FeatureList.css';
import FeatureItem from './FeatureItem/FeatureItem'


class FeatureList extends Component {
    render() {
        const { features } = this.props
        return (
            Object.keys(this.props.features)
                .map((key, index) => { 
                    return (
                        <div className="feature" key={index}>
                            <div className="feature__name">{key}</div>
                            <ul className="feature__list">
                                <FeatureItem features={features} key={index} index={index} onUpdate={this.props.onUpdate} />
                            </ul>
                        </div>)
                })
        );
    }
}

export default FeatureList;