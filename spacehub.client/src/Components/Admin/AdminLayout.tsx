import { AppShell, Burger, Group, Stack, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Link } from 'react-router-dom';
import classes from '../Layout.module.css';
import AuthorizeView from './AuthorizeView';

export function AdminLayout({children}) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AuthorizeView>
            <AppShell
                header={{ height: { base: 60, md: 70, lg: 80 } }}
                navbar={{
                    width: { base: 200, md: 300, lg: 400 },
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                        <MantineLogo size={30} />
                    </Group>
                </AppShell.Header>
                <AppShell.Navbar py="xl" px={40}>
                    <Stack gap="md">
                        <Link to="/admin/portal/events" className={classes.link}>
                            <UnstyledButton className={classes.link}>Manage Events</UnstyledButton>
                        </Link>
                        <Link to="/admin/portal/members" className={classes.link}>
                            <UnstyledButton className={classes.link}>Manage Members</UnstyledButton>
                        </Link>
                    </Stack>
                    <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
                </AppShell.Navbar>
                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </AuthorizeView>
    );
}