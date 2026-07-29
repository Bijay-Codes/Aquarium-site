import { HeroSection } from "../components/herosection";
import { KeyAttractions } from '../components/attractions';
import { Mission } from '../components/mission';
import { JoinMembership } from '../components/joinMembership'
export function Homepage() {
    return (
        <>
            <HeroSection />
            <KeyAttractions />
            <Mission />
            <JoinMembership />
        </>
    )
}