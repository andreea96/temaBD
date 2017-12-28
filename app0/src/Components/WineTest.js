/**
 * Created by andreea.olaru on 12/28/2017.
 */

import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/wines.css';



export default class Wine extends Component {

    constructor(props){
        super(props);
        this.imageArr=[
            'assets/vin1.png',
            'assets/vin1.png',
            'assets/vin1.png',
            'assets/vin1.png',
            'assets/vin1.png',
            'assets/vin1.png',

        ];
        this.  state={
            wines: [],
            images:[],
            width: document.body.offsetWidth,

        };

        console.log(document.body.offsetHeight/4);
    };

    componentDidMount(){

        fetch('http://192.168.33.101:3001/vinuri')
            .then(res => res.json())
            .then(wines => this.setState({ images: function (wines) {
                var images= [];
                var i;
                console.log(wines);
                for(i=0;i<wines.length;i++)
                {
                    images.push(wines[i].image);
                }
                console.log(images);
                return images;
            } }));



    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,

        };

        return (<div className="wine">
                <Slider {...settings}  >
                    <img src="assets/beciul_domnesc.png" alt="beciul domnesc"/>
                    <img src="assets/ciocarlia_alba.png" alt="ciocarlia-alb"/>
                    <img src="assets/farniente.png" alt="farniente"/>
                    <img src="assets/vin1.png" alt="vin1" />
                    <img src="assets/vita_romaneasca_rosu.png" alt="vita romaneasca"/>
                    <img src="assets/georgio.png" alt="georgio" />
                    <img src="assets/beciul_domnesc.png" alt="beciul-domnesc"/>

                </Slider>
            </div>

        );
    }
}

