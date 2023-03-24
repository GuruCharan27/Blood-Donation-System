import { Button } from '@mui/material'
import React, { useState } from 'react'
import AppTool from '../Components/AppTool'
import Create from '../Components/Create';
import ViewAllComponent from '../Components/ViewAllComponent';
import Service from '../Services/Service';

export default function Home() {


    const [addDonor, setaddDonor] = useState(false);
    const [details, setDetails] = useState([]);


    const getDetails = async () => {
        const res = await Service.readAll();
        setDetails(res.data);
    };

    const isaddDonor = () => {
        setaddDonor(true);
    };
    return (
        <>

            <div className='apptool'>
                <AppTool />
            </div>

            <div className='main-container'>

                <div className='row'>
                    <div className='col-md-4'>
                        <Button onClick={isaddDonor}
                            variant="contained" color="success">
                            ADD DONOR
                        </Button>
                    </div>
                    <div className='container'>
                        <ViewAllComponent
                            details={details}
                            getDetails={getDetails}
                        />
                    </div>
                </div>


            </div>
            <>
                {addDonor ? (
                    <Create
                        addDonor={addDonor}
                        setaddDonor={setaddDonor}
                        getDetails={getDetails}

                    />
                ) : (
                    <></>
                )}
            </>


        </>
    )
}
