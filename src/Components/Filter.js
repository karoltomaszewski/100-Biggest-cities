const Filter = props => <input className="Filter" onChange={props.change} value={props.filterText} placeholder="Filter by city name"></input>; 

export default Filter;