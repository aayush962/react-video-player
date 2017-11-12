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
        <div className="col-md-4">
          <h4>React Video Player</h4>
        </div>
        <div className="input-group col-md-4">
          <input onChange={this.onInputChange.bind(this)} value={this.state.term} type="text" className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">Go!</button>
          </span>
        </div>
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
