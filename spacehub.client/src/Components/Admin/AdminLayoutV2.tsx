import { AppShell, Burger, Group, ScrollArea, Skeleton, Stack, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../Layout.module.css';
import { Link } from 'react-router-dom';
import LogoutLink from './LogoutLink';

function AdminLayoutV2({ children }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <MantineLogo size={30} />
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

export default AdminLayoutV2;