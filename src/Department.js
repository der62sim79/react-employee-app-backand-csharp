import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

class Department extends Component {
    constructor(props) {
        super(props);
        this.state={deps:[]}
        
    }

    refreshList(){
        console.log('my dumb call');
        fetch(process.env.REACT_APP_API+'department')
        .then(respone=>respone.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }
    
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render() { 
        const {deps}=this.state;
        return ( 
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                   <thead>
                       <tr>DepartmentId</tr>
                       <tr>DepartmentName</tr>
                       <tr>Options</tr>
                       <tbody>
                           {deps.map(dep=>
                            <tr key={dep.DepartmentId}>
                                <td>{dep.DepartmentId}</td>
                                <td>{dep.DepartmentName}</td>
                                <td>Edit / Delete</td>
                            </tr>)}
                       </tbody>
                   </thead>
                </Table>
            </div>
         );
    }
}
 
export default Department;