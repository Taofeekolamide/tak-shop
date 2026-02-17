import IconBox from "../components/IconBox";
import ImageSection from "../components/ImageSection";
import PageBanners from "../components/PageBanners";
import Team from "../components/Team";
import img1 from '../images/about-01.png'
import img2 from '../images/shape-01.png'
import img3 from '../images/shape-02.png'
import img4 from '../images/shape-03.png'
import img5 from '../images/team-01.png'
import img6 from '../images/team-02.png'
import img7 from '../images/team-03.png'
import img8 from '../images/team-04.png'
import img9 from '../images/team-05.png'
import img10 from '../images/team-01.png'
import SubHeading from "../components/SubHeading";
import { BiBasket } from "react-icons/bi";

function About() {
    return (
        <>
            <PageBanners title="About" page="About" />
            <ImageSection icon text="About Store" heading="Online shopping includes both buying things online." img={img1} paragraph="Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store." />
            <div className="section aboutinfo">

                <IconBox img={img2} title="40,000+ Happy Customer" content="Empower your sales teams with industry tailored solutions that support." />
                <IconBox img={img3} title="16 Years of Experiences" content="Empower your sales teams with industry tailored solutions that support." />
                <IconBox img={img4} title="12 Awards Won" content="Empower your sales teams with industry tailored solutions that support." />

            </div>

            <div className="section" style={{ backgroundColor: "#ececec" }}>
                <SubHeading icon={<BiBasket />} text="Our Team" heading="Expert Management Team" />
                <div className="teams ">
                    <Team image={img5} work="CEO" name="Taofeek Olamide" />
                    <Team image={img6} work="Designer" name="Qudus Opeyemi" />
                    <Team image={img7} work="Front-End Developer" name="Vicky Dev" />
                    <Team image={img8} work="Back-End Developer" name="Olamide olalekan" />
                    <Team image={img9} work="HR" name="Alatoye Bilal" />
                </div>
            </div>

        </>
    )
}

export default About;