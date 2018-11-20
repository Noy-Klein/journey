import React from 'react';
import ImageUploader from 'react-images-upload';
import { observable } from 'mobx';

@inject("store")
@observer
class Upload extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);

    }
    @observable picture = { pictures: [] };

}

export default Upload;