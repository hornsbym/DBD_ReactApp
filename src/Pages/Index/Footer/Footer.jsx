import React from 'react'
import "./Footer.css"


class Footer extends React.Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <footer className="col-md-12 text-center">
                        <p>© 2019 Dinners by Derek</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Footer