import React, { Component } from "react"
import { navigate } from "gatsby"
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"

class Horizontal extends Component {
  constructor(props, context) {
    super(props, context)
    // let str = 
    // str = str.substring(0, str.length - 1);
    this.state = {
      // this fills out the rangeslider__fill because it evals to NaN otherwise
      value: this.props.path
    }
    this.cleanValue = this.cleanValue.bind(this)
  }

  handleChangeStart = () => {
    // console.log('Change event started')
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  }

  handleChangeComplete = () => {
    // console.log('this from comp' + this.state.value)
    // this.initializeHandle()
    const { value } = this.state
    // console.log("Change event completed to" + value)
    this.setState({
      value: value
    })
    navigate("/page-" + value)
  }

  cleanValue = val => {
    // console.log('from clean ' + val)
    if(isNaN(val)){
      return 0;
    }else {
      return val;
    }
  }

  render() {
    // console.log(this.props)

    let { value } = this.state
    // parseInt(window.location.href.split("-").pop())
    value = this.cleanValue(value)
    // console.log("this from render " + this.props.path)
    // console.log("this from render " + value)
    
    return (
      <div className="slider">
        <Slider
          min={0}
          max={167}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        {/* <div className='value'><b>Page : </b>{value}</div> */}
      </div>
    )
  }
}

export default Horizontal
