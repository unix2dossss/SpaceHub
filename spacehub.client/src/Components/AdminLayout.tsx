import { AppShell, Burger, Group, Stack, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Link } from 'react-router-dom';
import classes from './Layout.module.css';
import { Outlet } from "react-router-dom";

export function AdminLayout() {
    const [opened, { toggle }] = useDisclosure();

    return (
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
            </AppShell.Navbar>
            <AppShell.Main><Outlet /></AppShell.Main>
        </AppShell>
    );
}