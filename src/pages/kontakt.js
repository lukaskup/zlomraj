import * as React from "react";
import Layout from "../components/Layout";

import Contact from "../components/Contact";

class ContactPage extends React.Component {

    render() {
        return <Layout>
            <div className={"container"} style={{'minHeight': 'calc(100vh - 650px)'}}>
                <h2>Kontakt</h2>
                <Contact/>
            </div>
        </Layout>
    }
}

export default ContactPage;
