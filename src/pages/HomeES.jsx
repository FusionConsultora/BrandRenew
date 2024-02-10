import Projects from '../components/español/Projects'
import Contact from '../components/español/Contact'
import Hero from '../components/español/Hero'
import Navbar from '../components/español/Navbar'
import Services from '../components/español/Services'
import WhatsappButton from '../components/español/WhatsappButton'
import About from '../components/español/About'
import Nosotros from '../components/español/Nosotros'
import Footer from '../components/español/Footer'
import ContactUs from '../components/español/ContactUs'

function HomeES() {
    return (
        <div className="font-poppins">

            <Navbar />
            <Hero />
            <Services />
            <Nosotros />
            <ContactUs/>
            <Footer/>
            {/* <Projects /> */}
            {/* <About /> */}
            {/* <Contact /> */}
            {/* <WhatsappButton /> */}

        </div>
    )
}

export default HomeES
