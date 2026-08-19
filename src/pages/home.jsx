import { HeroSection } from "../components/herosection.jsx";
import { KeyAttractions } from '../components/attractions.jsx';
import { Mission } from '../components/mission.jsx';
import { JoinMembership } from '../components/joinMembership.jsx'
import { Footer } from "../components/footer.jsx";

export function Homepage({ openDialog }) {
    return (
        <section>
            <HeroSection openDialog={openDialog} />
            <KeyAttractions openDialog={openDialog} />
            <Mission />
            <JoinMembership />
            <Footer />
        </section>
    )
}