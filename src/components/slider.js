import React, { Component } from 'react'
import { navigate } from "gatsby"
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Horizontal extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 47
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')

    // window.location.assign('/page-' + this.state.value)
    console.log(this.state.value)
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={176}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={ () => navigate('/page-' + value)}
        />
        {/* <div className='value'><b>Page : </b>{value}</div> */}
      </div>
    )
  }
}

export default Horizontal

