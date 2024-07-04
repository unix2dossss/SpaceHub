import { AppShell } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import HeaderSimple from './Header/HeaderSimple';


function Headroom() {
    const pinned = useHeadroom({ fixedAt: 120 });

    return (
        <AppShell header={{ height: 0,  collapsed: !pinned, offset: false }} padding="md">
            <HeaderSimple></HeaderSimple>
        </AppShell>
    );
}

export default Headroom;