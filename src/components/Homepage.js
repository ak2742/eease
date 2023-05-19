import React from 'react'
import { Link } from 'react-router-dom';

function Homepage(props) {
    document.title = `Home | Eease`

    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#000000',
        backgroundColor: props.mode === 'dark' ? '#071f42' : '#ffffff',
    }

    return (
        <>
            <div className="card" style={{ marginBottom: "44px" }}>
                <h5 className="card-header" style={myStyle}>TextEease</h5>
                <div className="card-body" style={myStyle}>
                    <p className="card-text">Convert your text to uppercase / lowercase, Remove extra spaces and take many more quick actions.</p>
                    <Link to="/texteease" className="btn btn-primary">Start</Link>
                </div>
            </div>
            <div className="card" style={{ marginBottom: "44px" }}>
                <h5 className="card-header" style={myStyle}>Latest News</h5>
                <div className="card-body" style={myStyle}>
                    <p className="card-text">Get the latest news and updates related to science, entertainment, health, sports and more topics.</p>
                    <Link to="/news/all" className="btn btn-primary">See All</Link>
                </div>
            </div>
            <div className="card" style={{ marginBottom: "44px" }}>
                <h5 className="card-header" style={myStyle}>My Notebook</h5>
                <div className="card-body" style={myStyle}>
                    <Link to="/my/home" className="btn btn-primary">Start</Link>
                </div>
            </div>
        </>
    )
}

export default Homepage
