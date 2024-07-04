import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom'; // Import Link from React Router
import shaLogo from '../../assets/sha-logo.png';
import classes from './HeaderSimple.module.css';

const links = [
    /*{ link: '/about', label: 'About Us' },*/
    { link: '/about', label: 'About Us' },
    { link: '/faq', label: 'FAQ' },
    { link: '/events', label: 'Events' },
    { link: '/membership', label: 'Membership' },
    { link: '/launches', label: 'Launches' },
];

function HeaderSimple() {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <Link
            key={link.label}
            to={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => setActive(link.link)}
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                {/*<img src={shaLogo} alt="SHA Logo" className={classes.logo} />*/}
                <Link to="/" className={classes.logoLink}>
                    <h2>SpaceHub</h2>
                </Link>
                <Group gap={5} visibleFrom="xs">
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}

export default HeaderSimple;
