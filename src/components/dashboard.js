import React from 'react';

const Dashboard = () => {
    return (
        <div className="container dashboard">
            <div className="card grey darken-3 z-depth-0">
                <div className="card-content white-text">
                    <img src="/images/DENMARK.png" alt="" className="country-img"/>
                    <h1 className="card-title">Denmark</h1>
                    <span className="avg-score">8.3</span>
                </div>
            </div>
            <div className="card grey darken-3 z-depth-0">
                <div className="card-content white-text">
                    <img src="/images/GERMANY.png" alt="" className="country-img"/>
                    <h1 className="card-title">Germany</h1>
                    <span className="avg-score">8.3</span>
                </div>
            </div>
            <div className="card grey darken-3 z-depth-0">
                <div className="card-content white-text">
                    <img src="/images/SWEDEN.png" alt="" className="country-img"/>
                    <h1 className="card-title ">Sweden</h1>
                    <span className="avg-score">8.3</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;