import { HeroSection } from "../components/herosection.jsx";
import { KeyAttractions } from '../components/attractions.jsx';
import { Mission } from '../components/mission.jsx';
import { JoinMembership } from '../components/joinMembership.jsx'

export function Homepage() {
    return (
        <section>
            <HeroSection />
            <KeyAttractions />
            <Mission />
            <JoinMembership />
        </section>
    )
}