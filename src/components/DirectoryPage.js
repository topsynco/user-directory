import React, { Component } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class DirectoryPage extends Component {
    state = {
        search: "",
        results: [],
        asc: true
    }

    componentDidMount() {
        this.searchEmp("");
        //Axios.get
    };

    searchEmp = query => {
        API.search(query)
        .then(res => this.setState({ results: res.data.results}))
        .catch(err => console.log(err));
    };
    
    handleInputChange = event => {
        const name  = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmp(this.state.search);
    };

    handleSorting = () => {
        this.setState({
                asc: !this.state.asc
              })
            
    }

    render() {

       const filteredres = this.state.results.filter((result) => {
            console.log(result);
            if (result.name.first.includes(this.state.search)) {
                return true
            } 
            return false;
        })
        //add sorting here
        return(
            <div>
        <EmployeeSearch
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={filteredres} handleSorting={this.handleSorting} />
      </div>
        )
    }
}

export default DirectoryPage;


