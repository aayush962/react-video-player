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
          <input
            onChange={event => this.onInputChange(event.target.value)}
            value={this.state.term} type="text"
            className="form-control"
            placeholder="Search for..."
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button">Go!</button>
          </span>
        </div>
      </div>
    )
  }

  onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
