import { Badge, Table, Group, Text, Anchor } from '@mantine/core';
import { useEffect, useState } from 'react';


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