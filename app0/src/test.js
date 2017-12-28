import React from 'react';
import CoverFlow from 'coverflow-react';
import './demo.css';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.passPropCheckbox = this.passPropCheckbox.bind(this);
        this.inputRow = this.inputRow.bind(this);
        this.itemRatio = this.itemRatio.bind(this);
        this.code = this.code.bind(this);
        this.state = {
            width: document.body.offsetWidth,
            passWidth: true,
            height: 250,
            passHeight: true,
            itemRatio: {
                x: 8,
                y: 5
            },
            passItemRatio: true,
            background: '#333333',
            passBackground: true,
            passLabels: true,
            direction: 'horizontal'
        };
        window.addEventListener('resize', () => {
            this.setState((prevState) => {
                if (prevState.direction === 'vertical') {
                    return {
                        height: document.body.offsetHeight
                    };
                }
                return {
                    width: document.body.offsetWidth
                }
            });
        });
    }
}