import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Vertical extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 25,
      reverseValue: 8
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  handleChangeReverse = (value) => {
    this.setState({
      reverseValue: value
    })
  }

  render () {
    const { value } = this.state
    return (
      <div className='slider orientation-reversed'>
        <div className='slider-group'>
          <div className='slider-vertical'>
            <Slider
              min={0}
              max={176}
              value={value}
              orientation='vertical'
              onChange={this.handleChange}
            />
            <div className='value'>{value}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Vertical