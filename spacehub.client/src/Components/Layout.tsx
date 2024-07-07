import { AppShell, Burger, Group, Stack, UnstyledButton, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Layout.module.css';
import { Link } from 'react-router-dom';
import { IconCopyright } from '@tabler/icons-react';
import { Outlet } from "react-router-dom";


function Layout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            footer={{ height: 60, offset: true }}
            padding="xs"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <MantineLogo size={30} />
                        <Group ml="xl" gap={30} visibleFrom="sm">
                            <Link to="/about" className={classes.link}>
                                <UnstyledButton className={classes.link}>About Us</UnstyledButton>
                            </Link>
                            <Link to="/events" className={classes.link}>
                                <UnstyledButton className={classes.link}>Events</UnstyledButton>
                            </Link>
                            <Link to="/faq" className={classes.link}>
                                <UnstyledButton className={classes.link}>FAQ</UnstyledButton>
                            </Link>
                            <Link to="/membership" className={classes.link}>
                                <UnstyledButton className={classes.link}>Join Us</UnstyledButton>
                            </Link>
                            {/*<Link to="/launches" className={classes.link}*/}
                            {/*    <UnstyledButton className={classes.link}>Launches</UnstyledButton>*/}
                            {/*</Link>*/}
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="xl" px={40}>
                <Stack gap="md">
                    <Link to="/about" className={classes.link}>
                        <UnstyledButton className={classes.link}>About Us</UnstyledButton>
                    </Link>
                    <Link to="/events" className={classes.link}>
                        <UnstyledButton className={classes.link}>Events</UnstyledButton>
                    </Link>
                    <Link to="/faq" className={classes.link}>
                        <UnstyledButton className={classes.link}>FAQ</UnstyledButton>
                    </Link>
                    <Link to="/membership" className={classes.link}>
                        <UnstyledButton className={classes.link}>Join Us</UnstyledButton>
                    </Link>
                </Stack>  
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet/>
            </AppShell.Main>

            <AppShell.Footer p="md"><IconCopyright style={{ width: rem(13), height: rem(13) }} stroke={2} /> 2024 Space Hub Auckland. All rights reserved.</AppShell.Footer>
        </AppShell>
    );
}

export default Layout;