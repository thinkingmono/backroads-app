import Title from "./Title";
import Service from "./Service";
import { services } from "../utils/data";

const Services = () => {
    return (
        <>
            <section className="section services" id="services">
                <Title firstPart={'our'} lastPart={'services'} />
                <div className="section-center services-center">
                    {services.map((service) => {
                        const { id } = service;
                        return <Service key={id} {...service}/>
                    })}
                </div>
            </section>
        </>
    )
}

export default Services