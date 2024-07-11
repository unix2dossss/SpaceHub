import { Avatar, Badge, Table, Group, Text, Anchor } from '@mantine/core';
import { useEffect, useState } from 'react';

//const data = [
//    {
//        avatar:
//            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
//        name: 'Robert Wolfkisser',
//        job: 'Engineer',
//        email: 'rob_wolf@gmail.com',
//        phone: '+44 (452) 886 09 12',
//    },
//    {
//        avatar:
//            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
//        name: 'Jill Jailbreaker',
//        job: 'Engineer',
//        email: 'jj@breaker.com',
//        phone: '+44 (934) 777 12 76',
//    },
//    {
//        avatar:
//            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
//        name: 'Henry Silkeater',
//        job: 'Designer',
//        email: 'henry@silkeater.io',
//        phone: '+44 (901) 384 88 34',
//    },
//    {
//        avatar:
//            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
//        name: 'Bill Horsefighter',
//        job: 'Designer',
//        email: 'bhorsefighter@gmail.com',
//        phone: '+44 (667) 341 45 22',
//    },
//    {
//        avatar:
//            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
//        name: 'Jeremy Footviewer',
//        job: 'Manager',
//        email: 'jeremy@foot.dev',
//        phone: '+44 (881) 245 65 65',
//    },
//];

const jobColors: Record<string, string> = {
    engineer: 'blue',
    manager: 'cyan',
    designer: 'pink',
};

function UsersTable() {
    const [executives, setExecutives] = useState([]);

    useEffect(() => {
        const fetchExecutives = async () => {
            try {
                const response = await fetch('/api/Executive');
                const data = await response.json();
                setExecutives(data);
            } catch (error) {
                console.error('Error fetching executives:', error);
            }
        };

        fetchExecutives();
    }, []);



    const rows = executives.map((item) => (
        <Table.Tr key={item.execName}>
            <Table.Td>
                <Group gap="sm">
                    {/*<Avatar size={30} src={item.avatar} radius={30} />*/}
                    <Text fz="sm" fw={500}>
                        {item.execName}
                    </Text>
                </Group>
            </Table.Td>

            <Table.Td>
                <Badge color={jobColors[item.execRole.toLowerCase()]} variant="light">
                    {item.execRole}
                </Badge>
            </Table.Td>
            <Table.Td>
                <Anchor component="button" size="sm">
                    {item.execLinkedInLink  }
                </Anchor>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.execFavObject}</Text>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <Table.ScrollContainer minWidth={800}>
            <Table verticalSpacing="sm">
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Executive</Table.Th>
                        <Table.Th>Role</Table.Th>
                        <Table.Th>LinkedIn</Table.Th>
                        <Table.Th>Favourite Celestial Object</Table.Th>
                        <Table.Th />
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Table.ScrollContainer>
    );
}

export default UsersTable;