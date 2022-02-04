import React, { Component } from 'react';
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            mobile: '',
            email: '',
            pic: '',
            dob: '',
            jobtype: '',
            location: '',
            details: [],

        }
    }

    handleChangefullname = (event) => {
        this.setState({ fullname: event.target.value });
    }
    handleChangemobile = (event) => {
        this.setState({ mobile: event.target.value });
    }
    handleChangeemail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangepic = (event) => {
        this.setState({ pic: event.target.value });
    }
    handleChangedob = (event) => {
        this.setState({ dob: event.target.value });
    }
    handleChangejobtype = (event) => {
        this.setState({ jobtype: event.target.value });
    }
    handleChangelocation = (event) => {
        this.setState({ location: event.target.value });
    }
    handlesubmit = (event) => {
        //pic upload logic
        profile['fullname'] = this.state.fullname;
        profile['mobile'] = this.state.mobile;
        profile['email'] = this.state.email;
        profile['pic'] = this.state.pic;
        profile['dob'] = this.state.dob;
        profile['jobtype'] = this.state.jobtype;
        profile['location'] = this.state.location;
        console.log(profile)


        // saveDetails
        axios.post('http://localhost:5454/saveDetails', profile)
            .then(res => {
                return res;
            });
    }




    componentDidMount() {
        axios.get(`http://localhost:5454/getAllDetails`)
            .then(resp => {

                this.setState({
                    details: resp.data.details

                })

            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <React.Fragment>

                <div className='container mt-5 border border-primary'>
                    <div className='row'>
                        <div className="col-lg-12 ms-auto align-center">
                            <p>Registration</p>
                        </div>

                    </div>


                    <form>
                        <div className="row">
                            <div className="col-lg-6 ms-auto">

                                <label htmlFor="fname">Fullname:</label><br />
                                <input type="text" id="fname" name="fname" value={this.state.fullname} onChange={this.handleChangefullname} /><br />
                                <label htmlFor="mobile">Mobile:</label><br />
                                <input type="tel" id="mobile" name="mobile" value={this.state.mobile} onChange={this.handleChangemobile} /><br />
                                <label htmlFor="jobtype">Job Type:</label><br />
                                <input type="text" id="jobtype" name="jobtype" value={this.state.jobtype} onChange={this.handleChangejobtype} /><br />
                                <label htmlFor="location">Pref. Location:</label><br />
                                <input type="text" id="location" name="location" value={this.state.location} onChange={this.handleChangelocation} /><br />

                            </div>
                            <div className="col-lg-6 ms-auto">

                                <label htmlFor="fname">Profile Pic URL:</label><br />
                                <input type="file" id="pic" name="pic" value={this.state.pic} onChange={this.handleChangepic} /><br />
                                <label for="myfile">Select a file:</label>
                                <label htmlFor="email">Email:</label><br />
                                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChangeemail} /><br />
                                <label htmlFor="dob">DOB:</label><br />
                                <input type="date" id="dob" name="dob" value={this.state.dob} onChange={this.handleChangedob} /><br /><br />


                            </div>
                        </div>
                        <button type='submit' className='my-3' onClick={this.handlesubmit}>Add/Update</button>
                    </form>



                    <div className='row'>
                        {/* Display Data */}
                        <p>Here your data will be displayed</p>
                        <div>

                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>fullname</th>
                                    <th>mobile</th>
                                    <th>email</th>
                                    <th>pic</th>
                                    <th>dob</th>
                                    <th>jobtype</th>
                                    <th>location</th>
                                </tr>
                            </thead>
                            <tbody>


                                {this.state.details.map(
                                    (info) => {
                                        return (
                                            <tr>
                                                <td>{info.fullname}</td>
                                                <td>{info.mobile}</td>
                                                <td>{info.email}</td>
                                                <td>{info.pic}</td>
                                                <td>{info.dob}</td>
                                                <td>{info.jobtype}</td>
                                                <td>{info.location}</td>
                                            </tr>
                                        )
                                    }
                                )}

                            </tbody>
                        </table>
                    </div>

                </div>


            </React.Fragment >

        )
    }
}
