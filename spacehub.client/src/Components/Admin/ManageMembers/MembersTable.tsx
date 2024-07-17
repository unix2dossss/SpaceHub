import { useState, useEffect } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    Badge,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons-react';
import classes from './MembersTable.module.css'; // Ensure you have the CSS file

const jobColors = {
    engineer: 'blue',
    manager: 'cyan',
    designer: 'pink',
};

interface Executive {
    execName: string;
    execRole: string;
    execLinkedInLink: string;
    execFavObject: string;
}

interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: Executive[], search: string) {
    const query = search.toLowerCase().trim();
    if (query === '') {
        return data;
    }
    return data.filter((item) =>
        ['execName', 'execRole', 'execLinkedInLink', 'execFavObject'].some((key) =>
            item[key].toLowerCase().includes(query)
        )
    );
}

function sortData(
    data: Executive[],
    payload: { sortBy: keyof Executive | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    const filteredData = filterData(data, payload.search);

    if (!sortBy) {
        return filteredData;
    }

    return filteredData.sort((a, b) => {
        if (payload.reversed) {
            return b[sortBy].localeCompare(a[sortBy]);
        }
        return a[sortBy].localeCompare(b[sortBy]);
    });
}

function MembersTable() {
    const [search, setSearch] = useState('');
    const [executives, setExecutives] = useState<Executive[]>([]);
    const [sortedData, setSortedData] = useState<Executive[]>([]);
    const [sortBy, setSortBy] = useState<keyof Executive | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    useEffect(() => {
        const fetchExecutives = async () => {
            try {
                const response = await fetch('/api/Executive');
                const data: Executive[] = await response.json();
                setExecutives(data);
                setSortedData(data);
            } catch (error) {
                console.error('Error fetching executives:', error);
            }
        };

        fetchExecutives();
    }, []);

    const setSorting = (field: keyof Executive) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(executives, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(executives, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    const rows = sortedData.map((item) => (
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
                <Text fz="sm">{item.execLinkedInLink}</Text>
            </Table.Td>
            <Table.Td>
                <Text fz="sm">{item.execFavObject}</Text>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                            sorted={sortBy === 'execName'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('execName')}
                        >
                            Executive
                        </Th>
                        <Th
                            sorted={sortBy === 'execRole'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('execRole')}
                        >
                            Role
                        </Th>
                        <Th
                            sorted={sortBy === 'execLinkedInLink'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('execLinkedInLink')}
                        >
                            LinkedIn
                        </Th>
                        <Th
                            sorted={sortBy === 'execFavObject'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('execFavObject')}
                        >
                            Favourite Celestial Object
                        </Th>
                    </Table.Tr>
                </Table.Tbody>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={4}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}

export default MembersTable;