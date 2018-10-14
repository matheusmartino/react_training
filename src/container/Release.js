import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';

export default class Release extends Component {

    constructor() {
        super();

        this.state = {
            release: [
                {
                    id: 1,
                    releaseName: 'release 01235476',
                    releaseData: '25/10/2018'
                },
                {
                    id: 2,
                    releaseName: 'release 998774365',
                    releaseData: '25/10/2018'
                },
                {
                    id: 3,
                    releaseName: 'release 35656545',
                    releaseData: '25/10/2018'
                },
            ]
        };


    }

    render() {
        return (

            <div className="container" style={{ paddingTop: '25px' }}>
                <ReleaseForm></ReleaseForm>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Release Name</th>
                            <th scope="col">Release Data</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.release.map((release, index) => {
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseData}</td>
                                    <td><button type="button" className="btn btn-secondary">Novo</button></td>
                                    <td><button type="button" className="btn btn-success">Alterar</button></td>
                                    <td><button type="button" className="btn btn-danger">Excluir</button></td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        );

    }
}
