import React from 'react';

const ReleaseForm = () => {
    let _releasename, _releaseDate;
    const handleSubmit = (e) => {
        console.log('ReleaseForm -> HandleSubmit');
        console.log(_releasename);
        console.log(_releaseDate);
    }
    return (

        <form onSubmit={handleSubmit}> 
            <div className="row" style={{ paddingBottom: '25px' }}>
                <div className="form-group col-6">
                    <label for="exampleInputEmail1">Release Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group col-6">
                    <label for="exampleInputPassword1">Release Data</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )


};

export default ReleaseForm;