/**
 * Created by andreea.olaru on 12/27/2017.
 */

import React, {Component} from 'react';
import CoverFlow from 'coverflow-react';
//import image from '../../public/assets/download.png';

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
            height: document.body.offsetHeight/4,

        };
        window.addEventListener('resize',()=>{
            this.setState(()=>{
                return {
                  width: document.body.offsetWidth
                };
            })
        })

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
        return (
            <div className="Wines">
                <h1>Our wines</h1>
                <CoverFlow imagesArr={this.imageArr} background="white" itemRatio="8:5" height="200" width="1820"/>

            </div>
        );
    }
}

/**
 *              {
                    this.state.wines.map(wine =>
                        <div key={wine.id}>{wine.nume}</div>)
                }
 */