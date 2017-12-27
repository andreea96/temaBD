/**
 * Created by andreea.olaru on 12/15/2017.
 */

import React, {Component} from 'react';
import {Row,Image,Grid,Col} from 'react-bootstrap';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

export default class Header extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="assets/download.png" />
                    </Col>
                </Row>
            </Grid>
        )
    }

}
