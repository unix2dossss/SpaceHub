import { AppShell, Burger, Group, Stack, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from '../Layout.module.css';
import { Link } from 'react-router-dom';
import LogoutLink from './LogoutLink';
import SHLogo from '../SpaceHubLogo/SHLogo';

function AdminLayout({ children }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 80 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        >
            <AppShell.Header bg="#1A1A1A">
                <Group h="100%" px="lg">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <SHLogo></SHLogo>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <AppShell.Section grow my="md">
                    <Stack gap="md">
                        <Link to="/admin/events" className={classes.link}>
                            <UnstyledButton className={classes.link}>Manage Events</UnstyledButton>
                        </Link>
                        <Link to="/admin/members" className={classes.link}>
                            <UnstyledButton className={classes.link}>Manage Members</UnstyledButton>
                        </Link>
                        <Link to="/admin/execs" className={classes.link}>
                            <UnstyledButton className={classes.link}>Manage Executives</UnstyledButton>
                        </Link>
                    </Stack>
                </AppShell.Section>
                <AppShell.Section>
                    <LogoutLink>
                        <UnstyledButton className={classes.link}>Logout</UnstyledButton>
                    </LogoutLink>
                </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}

export default AdminLayout;