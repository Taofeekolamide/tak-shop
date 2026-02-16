import ImageSection from "../components/ImageSection";
import PageBanners from "../components/PageBanners";
import img from '../images/about-01.png'

function About() {
    return (
        <>
            <PageBanners title="About" page="About" />
            <ImageSection text="About Store" heading="Online shopping includes both buying things online." img={img} paragraph="Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store."/>
        </>
    )
}

export default About;