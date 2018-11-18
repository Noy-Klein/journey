import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ImageUploader from 'react-images-upload';
import { observable } from 'mobx';
import '../../App.css';

@inject("store")
@observer
class Images extends React.Component {
 
    @observable onDrop = this.onDrop.bind(this);
 
    onDrop(picture) {
        this.props.store.currCheckpoint.pictures= this.props.store.currCheckpoint.pictures.concat(picture)
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default Images;