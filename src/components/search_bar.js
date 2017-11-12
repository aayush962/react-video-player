import React from 'react'

class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  render(){
    return(
      <div>
        <input onChange={this.onInputChange.bind(this)} value={this.state.term}/>
        <h4>Value: {this.state.term}</h4>
      </div>
    )
  }

  onInputChange(e){
    this.setState({
      term: e.target.value
    })
  }
}

export default SearchBar
