import { ReactElement } from 'react';

import { organisationData } from '../../../hooks/useUser';

import { Container } from './styles';

interface MainProps {
    profileIcon: ReactElement,
    organisation: organisationData[],
    acessUser: (username: string, lastPageName: string) => void,
    page: string
}

export function Main(props: MainProps) {
    return (
        <Container>
            <ul>
                {props.organisation.map((organisation) => {
                    return (
                        <li key={organisation.id}>
                            <div className="avatar-container">
                                <button onClick={(e) => {
                                        e.preventDefault();
                                        props.acessUser(organisation.login, props.page);
                                    }
                                }
                                >
                                    <img src={organisation.avatar_url} alt="Org Avatar - Github" />
                                </button>
                            </div>
                            <div className="name-icon">
                                <h1>{organisation.login}</h1>
                                <button onClick={(e) => {
                                        e.preventDefault();
                                        props.acessUser(organisation.login, props.page);
                                    }
                                }
                                >
                                    {props.profileIcon}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Container>
    );
}
