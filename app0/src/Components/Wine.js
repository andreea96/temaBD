/**
 * Created by andreea.olaru on 12/27/2017.
 */

import React, {Component} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/wines.css';
import {Modal,ModalHeader,ModalBody } from 'reactstrap';
import {Popover,OverlayTrigger} from 'react-bootstrap';



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
            images:[],
            activeImageID: 0,
            activeWineName: 'Undefined',
            activeWinePrice: 0,
            activeWineColor: 'Undefined',
            activeWineType: 'Undefined',
            wines_id: [],

        };
        window.addEventListener('resize',()=>{
            this.setState(()=>{
                return {
                  width: document.body.offsetWidth
                };
            })
        })

        this.popover=(
            <Popover id="winePopover" title={this.state.activeWineName}>
                <strong>Pret:</strong> {this.state.activeWinePrice}
                <br />
                {this.state.activeWineColor}
                <br />
                {this.state.activeWineType}
            </Popover>
        );


    };

    componentDidUpdate(){
        console.log('component updated');
        //this.updatePopover();
        this.popover=(
            <Popover id="winePopover" title={this.state.activeWineName}>
                <strong>Pret:</strong> {this.state.activeWinePrice}
                <br />
                --> Vin {this.state.activeWineColor}
                <br />
                <strong>{this.state.activeWineType}</strong>
            </Popover>
        )
    }

    updatePopover(){

        var id= this.state.activeImageID;
        fetch('http://192.168.33.101:3001/vinuri/'+id)
            .then(resp=>resp.json())
            .then(wine_info=>{
                if(wine_info.length>=1){
                this.setState({

                    activeWineName: wine_info[0].nume,
                    activeWinePrice: wine_info[0].cost,
                    activeWineColor: wine_info[0].Culoare,
                    activeWineType: wine_info[0].Tip,

            })}
            });

    }



    componentWillMount(){

        fetch('http://192.168.33.101:3001/vinuri')
            .then(resp => resp.json())
            .then(wines_images_ids => this.setState((state) => {

               var images= [];
               var wines_id=[];
               var i;

               for(i=0;i<wines_images_ids.length;i++)
               {
                   images.push('assets/'+wines_images_ids[i].image);
                   wines_id.push(wines_images_ids[i].vinID);

               }

               this.setState({
                   images: images,
                   wines_id: wines_id,
               });
            } ));
    }

    render() {

         const onHover = (id)=> {
            setTimeout(
            this.setState({
                activeImageID: this.state.wines_id[id],
            },()=> {this.updatePopover()}),5000);


        }

        var imgs=this.state.images.map( (image,i) => {
            return (
                <OverlayTrigger trigger="hover" placement="right" overlay={this.popover}>
                    <img src={image} id={i} onMouseOver={() => onHover(i)} />
                </OverlayTrigger>
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

            </div>

        );
    }
}

