import Img1 from '../assets/images/cards/17goals/goal1-no-poverty.svg'
import Img2 from '../assets/images/cards/17goals/goal2-zero-hunger.svg'
import Img3 from '../assets/images/cards/17goals/goal3-good-health-and-well-being.svg'
import Img4 from '../assets/images/cards/17goals/goal4-quality-education.svg'
import Img5 from '../assets/images/cards/17goals/goal5-gender-equality.svg'
import Img6 from '../assets/images/cards/17goals/goal6-clean-water-and-sanitation.svg'
import Img7 from '../assets/images/cards/17goals/goal7-affordable-clean-energy.svg'
import Img8 from '../assets/images/cards/17goals/goal8-decent-work-and-economic-growth.svg'
import Img9 from '../assets/images/cards/17goals/goal9-industry-innovation-infrastructure.svg'
import Img10 from '../assets/images/cards/17goals/goal10-reduced-inequalities.svg'
import Img11 from '../assets/images/cards/17goals/goal11-sustainable-cities-communities.svg'
import Img12 from '../assets/images/cards/17goals/goal12-responsible-consumption.svg'
import Img13 from '../assets/images/cards/17goals/goal13-climate-action.svg'
import Img14 from '../assets/images/cards/17goals/goal14-life-below-water.svg'
import Img15 from '../assets/images/cards/17goals/goal15-life-on-land.svg'
import Img16 from '../assets/images/cards/17goals/goal16-peace-justice-strong-institutions.svg'
import Img17 from '../assets/images/cards/17goals/goal17-partnerships-for-the-goals.svg'

const images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9,
    Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17,
];

export const data = images.map((image, index) => ({
    id: index + 1, // Start ID fra 1
    image, // Tilføj billedet
}));

