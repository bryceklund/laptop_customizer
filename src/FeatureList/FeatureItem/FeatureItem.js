import React, { Component } from 'react';

class FeatureItem extends Component {
    render() {/*
        return (
            this.props.features[key].map((item, index) => {
                const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
                const featureClass = 'feature__option ' + selectedClass;
                return (
                    <li key={index} className="feature__item">
                        <div className={featureClass} onClick={e => this.updateFeature(key, item)}>
                            { item.name }
                            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(item.cost) })
                        </div>
                </li>)
            });
        );*/
        const options = this.props.features[this.props.key].map((item, index) => {
            const selectedClass = item.name === this.state.selected[this.props.key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return (
                <li key={index} className="feature__item">
                    <div className={featureClass} onClick={e => this.updateFeature(this.props.key, item)}>
                        { item.name }
                        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(item.cost) })
                    </div>
                </li>)
        });

        return (
            <div className="feature" key={this.props.key}>
                <div className="feature__name">{this.props.key}</div>
                <ul className="feature__list">
                    { options }
                </ul>
            </div>)
    }
}

export default FeatureItem;