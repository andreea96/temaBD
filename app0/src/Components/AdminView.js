/**
 * Created by andreea.olaru on 1/5/2018.
 */

import React, {Component} from 'react';
import WinesWithPrizes from "./ViewComponents/WinesWithPrizes";
import OrdersWineQuantity from './ViewComponents/OrdersWineQuantity';
import AllGraphesinCramas from "./ViewComponents/AllGraphesinCramas";
//import NrTypesOfWineInCramas from "./ViewComponents/NrTypesOfWineInCramas";
import NrWineswithPrizesFromEveryOrder from './ViewComponents/NrWineswithPrizesFromEveryOrder';
import AllPrizedGraphes from "./ViewComponents/AllPrizedGraphes";
import FullOrderPrice from "./ViewComponents/FullOrderPrice";
import Top3MostOrderedWine from "./ViewComponents/Top3MostOrderedWine";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {FlatButton,SvgIcon} from 'material-ui';

export default class AdminView extends Component {


    constructor(props)
    {
        super(props);

    }

    state={
        isGetWinesWithPrizes: true,
        isGetOrdersWineQuantity: false,
        isGetNrTypesOfWines: false,
        isgetAllGraphesinCramas: false,
        isgetNrWineswithPrizesFromEveryOrder: false,
        isgetAllPrizedGraphes: false,
        isgetFullOrderPrice: false,
        isgetTop3MostOrderedWine: false,
        current: 'isGetWinesWithPrizes',
    };

    resetState(currentToBe){
        let current = this.state.current;
        this.setState({
            [current]: false,
            [currentToBe]:true,
            current: currentToBe
        });
    }


    render() {

        console.log(this.state);
        let component=null;
        if(this.state.isGetWinesWithPrizes)
        {
            component=<WinesWithPrizes/>;
        }
        else if(this.state.isGetOrdersWineQuantity)
        {
            component=<OrdersWineQuantity />;
        }
        else if(this.state.isgetAllGraphesinCramas)
        {
            component=<AllGraphesinCramas/>;
        }
        else if(this.state.isgetNrWineswithPrizesFromEveryOrder)
        {
            component=<NrWineswithPrizesFromEveryOrder/>
        }
        else if(this.state.isgetAllPrizedGraphes)
        {
            component=<AllPrizedGraphes/>
        }
        else if(this.state.isgetFullOrderPrice)
        {
            component=<FullOrderPrice/>
        }

        else if(this.state.isgetTop3MostOrderedWine)
        {
            component=<Top3MostOrderedWine/>
        }


        return (

            <div className="view">
                <MuiThemeProvider>
                <FlatButton waves="light" className='red' hoverColor='grey' backgroundColor={this.state.isGetWinesWithPrizes?'grey':''} onClick={()=>this.resetState('isGetWinesWithPrizes')}>Vedete vinurile cu premii</FlatButton><SvgIcon tiny>insert_chart</SvgIcon>
                    <FlatButton waves="light" className='red' hoverColor='grey' backgroundColor={this.state.isGetOrdersWineQuantity?'grey':''} onClick={()=>this.resetState('isGetOrdersWineQuantity')}>Vedeti comenzile cu cantitalie aferente</FlatButton><SvgIcon tiny>insert_chart</SvgIcon>
                    <FlatButton waves="light" className='red' hoverColor='grey' backgroundColor={this.state.isgetAllGraphesinCramas?'grey':''} onClick={()=>this.resetState('isgetAllGraphesinCramas')}>Vedeti Tipurile de struguri distribuiti pe crame</FlatButton>
                    <FlatButton waves="light" className='red' hoverColor='grey' backgroundColor={this.state.isgetNrWineswithPrizesFromEveryOrder?'grey':''} onClick={()=>this.resetState('isgetNrWineswithPrizesFromEveryOrder')}>Vedeti nr de vinuri premiate din fiecare comanda</FlatButton><SvgIcon tiny>insert_chart</SvgIcon>
                    <FlatButton waves="light" className='red' hoverColor='grey' backgroundColor={this.state.isgetAllPrizedGraphes?'grey':''} onClick={()=>this.resetState('isgetAllPrizedGraphes')}>Vedeti toti strugurii care au facut vinuri preamiate</FlatButton><SvgIcon tiny>insert_chart</SvgIcon>
                    <FlatButton waves="light" className='red' hoverColor='grey' backgroundColor={this.state.isgetFullOrderPrice?'grey':''} onClick={()=>this.resetState('isgetFullOrderPrice')}>Vedeti totalul comenzilor</FlatButton><SvgIcon tiny>insert_chart</SvgIcon>
                    <FlatButton waves="light" className='red' hoverColor='grey' backgroundColor={this.state.isgetTop3MostOrderedWine?'grey':''} onClick={()=>this.resetState('isgetTop3MostOrderedWine')}>Top cele mai comandate vinuri</FlatButton>
                {

                    //si butoane
                     component
                }
                </MuiThemeProvider>
            </div>
        );
    }

}
