import ScrollToTop from "../ScrollToTop"
import Navbar from "../Navbar"
import Footer from "../Footer"

export default function PageContainer({ children, className = "", ...rest }) {
    return (<div
        className={`bg-stripes bg-fixed ${className}`}
    >
        <ScrollToTop />
        <Navbar />
        <div className={`py-32 `}>
            <div className={`flex flex-col gap-24 md:gap-48`}>
                {children}
            </div>
        </div>
        <Footer />
    </div>
    )
}