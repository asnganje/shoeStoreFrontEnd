import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

const Dashboard = () => {
    return(
        <main className="h-screen mx-[5%]">
            <section>
                <Header />
            </section>
            <section>
                <Home />
            </section>
            <section className="absolute bottom-0 left-0 w-[100%]">
                <Footer />
            </section> 
        </main>
    )
}

export default Dashboard;