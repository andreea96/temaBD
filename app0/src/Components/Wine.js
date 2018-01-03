/**
 * Created by andreea.olaru on 12/27/2017.
 */

import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import '../styles/wines.css';
import {Modal,ModalHeader,ModalBody } from 'reactstrap';


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
        this.state={
            wines: [],
            images:[],
            prices: [],
            activeImage: 0,
            isModalOpen: false,
            wines_id: [],

        };
        window.addEventListener('resize',()=>{
            this.setState(()=>{
                return {
                  width: document.body.offsetWidth
                };
            })
        })

        this.toggle=this.toggle.bind(this);

    };

    componentWillMount(){

        fetch('http://192.168.33.101:3001/vinuri')
            .then(resp => resp.json())
            .then(wines_info => this.setState((state) => {

               var images= [];
               var wines=[];
               var prices= [];
               var wines_id=[];
               var i;

               for(i=0;i<wines_info.length;i++)
               {
                   images.push('assets/'+wines_info[i].image);
                   prices.push(wines_info[i].cost);
                   wines.push(wines_info[i].nume);
                   wines_id.push(wines_info[i].vinId);

               }

               this.setState({
                   images: images,
                   prices: prices,
                   wines: wines,
                   wines_id: wines_id,

               });
               //return images;
            } ));
    }

    toggle(){
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })

    }
    render() {

         const onClick = (id)=> {
             console.log(id);
            this.setState({
                activeImage: this.state.wines_id[id],
            });
            this.toggle();

        }

        var imgs=this.state.images.map(function (image,i) {

            return (
                <img src={image} id={i} onMouseOver={() => onClick({i})} />
            );

        });

        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,

        };

        return (
            <div className="wine">
                <h1> Our Wines </h1>
                <br />
                <Slider {...settings} >
                    {
                        imgs
                    }
                </Slider>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Title</ModalHeader>
                    <ModalBody>{this.state.activeImage}</ModalBody>
                </Modal>
            </div>

        );
    }
}


/*
 <img src="assets/beciul_domnesc.png" alt="beciul domnesc"/>
 <img src="assets/ciocarlia_alba.png" alt="ciocarlia-alb"/>
 <img src="assets/farniente.png" alt="farniente"/>
 <img src="assets/vin1.png" alt="vin1" />
 <img src="assets/vita_romaneasca_rosu.png" alt="vita romaneasca"/>
 <img src="assets/georgio.png" alt="georgio" />
 <img src="assets/beciul_domnesc.png" alt="beciul-domnesc"/>

 */