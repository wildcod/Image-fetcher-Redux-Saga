import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import {loadImages} from "../../actions";



class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <a onClick={this.props.loadImages}>Load Images</a>
                </section>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
    isLoading,
    images,
    error
});

const mapDispatchToProps = dispatch => ({
    loadImages : () => dispatch(loadImages())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
