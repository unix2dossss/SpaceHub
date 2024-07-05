import { Divider } from "@mantine/core";
import CardsCarousel from "./CardsCarousel";
import FeaturesAsymmetrical from "./FeaturesAsymmetrical";
import EventsIntroSection from "./EventsIntroSection";

const Events = () => {
    return (
        <div>
            {/*<FeaturesAsymmetrical></FeaturesAsymmetrical>*/}
            <EventsIntroSection></EventsIntroSection>
            <Divider size="md" my="lg" label="Events" labelPosition="center" />
            <CardsCarousel></CardsCarousel>
        </div>
    );
}

export default Events;