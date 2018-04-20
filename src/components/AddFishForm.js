import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
       addfish: PropTypes.func
        }

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value
        };
        this.props.addFish(fish);
        event.currentTarget.reset();
    };

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" ref={this.nameRef} placeholder='Name'/>
                <input type="text" name="price" ref={this.priceRef} placeholder='Price'/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder='Dest'/>
                <input type="text" ref={this.imageRef} name="image" placeholder='Image'/>
                <button type='submit'>+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;