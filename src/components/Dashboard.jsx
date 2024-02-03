import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { useState } from "react";

const Dashboard = () => {
    const [candidate, setCandidate] = useState(localStorage.getItem('user'))
    return(
        <main className="h-screen mx-[5%]">
            <section>
                <Header setCandidate = {setCandidate}/>
            </section>
            <section>
                <Home />
            </section>
            <section className="absolute bottom-0 left-0 w-[100%]">
                <Footer />
                {candidate && <p className="hidden">{candidate}...</p>}
            </section> 
        </main>
    )
}

export default Dashboard;