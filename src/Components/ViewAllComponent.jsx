import React, { useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import Service from '../Services/Service';

export default function ViewAllComponent({ details, getDetails }) {

    useEffect(() => {
        getDetails();
    }, []);

    const navigate = useNavigate();

    let handleEdit = (id) => {
        console.log(id);
        navigate({
            pathname: "/update",
            search: createSearchParams({
                id: id
            }).toString()
        })
    };

    let handleView = (id) => {
        console.log(id);
        navigate({
            pathname: "/view",
            search: createSearchParams({
                id: id
            }).toString()
        })
    };

    let handleDelete = async (id) => {
        console.log(id);
        let res = await Service.delete(id);
        navigate(`/home`)
    }

    return (
        <div>

            <div>
                <h2 className="text-center">Donor's List</h2>
                <div className="row">

                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> User Name</th>
                                <th> Age</th>
                                <th> Blood Group</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((current) => (

                                    <tr key={current.id}>
                                        <td> {current.username} </td>
                                        <td> {current.age}</td>
                                        <td> {current.blood_group}</td>
                                        <td>
                                            <button onClick={() => { handleEdit(current.id) }} className="btn btn-info">Update </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => { handleDelete(current.id) }} className="btn btn-danger">Delete </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => { handleView(current.id) }} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>


        </div>
    )
}
