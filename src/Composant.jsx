import React, {Component} from 'react';
class Composant extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="component" data-aos={this.props.aosname} data-aos-delay="50" data-aos-duration="1500">
                <div class="component-logo">
                    <img src={this.props.image} alt=""/>
                </div>
                <div class="component-content">
                    <div class="title">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div class="explain">{this.props.explain}</div>
                </div>
                <div class="component-like">
                    <div class="ui labeled button" tabindex="0">
                        <div class="ui red button">
                            <i class="heart icon"></i> Like
                        </div>
                        <a class="ui basic red left pointing label">
                            500
                        </a>
                    </div>
                    <div class="ui labeled button" tabindex="0">
                        <div class="ui basic blue button">
                            <i class="fork icon"></i> Forks
                        </div>
                        <a class="ui basic left pointing blue label">
                            5, 854
                        </a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Composant