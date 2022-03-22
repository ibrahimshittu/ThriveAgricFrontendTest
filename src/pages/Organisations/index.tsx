import { useUser } from '../../hooks/useUser';

import { Header } from '../../components/Header';
import { Main } from '../../components/Organisation/Main';
import { Footer } from '../../components/Footer';

import { Container, PageContainer } from './styles';

import { FaUserFriends } from 'react-icons/fa';
import { CgOrganisation } from 'react-icons/cg';

export function Organisations() {
    const { organisation, acessUserFollow } = useUser();

    return (
        <Container>
            <PageContainer>
                <Header
                    directory={"following"}
                    icon={<FaUserFriends className="header-icon" />}
                />
                <Main
                    profileIcon={<CgOrganisation size={20} />}
                    organisation={organisation}
                    acessUser={acessUserFollow}
                    page={"following"}
                />
            </PageContainer>
            <Footer />
        </Container>
    );
}