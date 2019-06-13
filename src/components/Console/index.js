import React, { Component, ScrollElement  } from "react";
import { scroller, animateScroll as scroll } from "react-scroll";
import useSmoothScroll from "use-smooth-scroll";
import ReactPageScroller from "react-page-scroller";
import {Pager} from "react-bootstrap";
import "./style.css";

class Console  extends Component {

    
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }
    
    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };
    
    
    scrollUp = () => {
        const nextSlide = this.state.currentPage - 2;
        this._pageScroller.goToPage(nextSlide);
    };
    
    scrollDown = () => {
        const nextSlide = this.state.currentPage;
        this._pageScroller.goToPage(nextSlide);
    };
    
    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    render() {

        return (
            <div className="console-projects">
                
                <ReactPageScroller 
                    className="preview-proj" 
                    id="preview-proj" 
                    ref={c => this._pageScroller = c} 
                    pageOnChange={this.pageOnChange}
                    containerWidth={960} 
                    containerHeight={610}
                >

                    {this.props.children} 

                </ReactPageScroller>

                <div className="prevnext">
                    <button className="pn-btn" id="prev" onClick={this.scrollUp}></button>
                    <button className="pn-btn" id="next" onClick={this.scrollDown}></button>
                </div>
            </div>
        );
    }
}

export default Console;
