import React, { Component } from 'react';
import './FeatureList.css';
import FeatureItem from './FeatureItem/FeatureItem'


class FeatureList extends Component {
    render() {
        return (
            Object.keys(this.props.features)
                .map(key => { 
                    return (<FeatureItem 
                        features={this.props.features} 
                        key={key} /> 
                    )}
                )
        );
    }
}

export default FeatureList;