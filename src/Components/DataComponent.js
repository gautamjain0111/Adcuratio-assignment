import React, { Component } from 'react'
import '../Styles/DataComponent.css'
import LoginPage from './LoginPage'

class DataComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showLoginPage:false ,
             dataArray:[
                {
                    "id": 1,
                    "name": "test1",
                    "age": "11",
                    "gender": "male",
                    "email": "test1@gmail.com",
                    "phoneNo": "9191919191"
                  },
                  {
                    "id": 2,
                    "name": "test2",
                    "age": "12",
                    "gender": "male",
                    "email": "test2@gmail.com",
                    "phoneNo": "9292929292"
                  },
                  {
                    "id": 3,
                    "name": "test3",
                    "age": "13",
                    "gender": "male",
                    "email": "test3@gmail.com",
                    "phoneNo": "9393939393"
                  },  
                
             ]
             
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event){
        this.setState({
            showLoginPage:true	
        });
    }
    
    render() {
        const table = this.state.dataArray.map((data) => 
        <tr key={data.id}>
        <td className="text-left">{data.id}</td> 
        <td className="text-left">{data.name}</td>
        <td className="text-left">{data.age}</td> 
        <td className="text-left">{data.gender}</td> 
        <td className="text-left">{data.email}</td>
        <td className="text-left">{data.phoneNo}</td>
        </tr>
         )

        if(this.state.showLoginPage){
            return <LoginPage />
        }

        return (
            <React.Fragment>
                <div className="table-title">
                    <h3>Data Table</h3>
                </div>
                <table className="table-fill">
                    <tbody>
                    <tr>
                        <th className="text-left">Id</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">age</th>
                        <th className="text-left">gender</th>
                        <th className="text-left">Email</th>
                        <th className="text-left">phoneNo</th>
            
                    </tr>
                    {table}
                    </tbody>
                    
                </table>
                
                <div className="Logout-button-parent">
                    <button onClick={this.handleLogout} className="Logout-button"> Logout </button>
                </div>
            
            </React.Fragment>
        )
    }
}

export default DataComponent
