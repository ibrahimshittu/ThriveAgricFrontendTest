import LogoImg from '../../../assets/thriveagric.png';

import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <img src={LogoImg} alt="Github Logo" />
            <h1>Github Explorer</h1>
        </Container>
    );
}