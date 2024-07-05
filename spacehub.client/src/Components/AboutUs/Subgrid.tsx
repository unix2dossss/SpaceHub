import { SimpleGrid, Image, Container } from '@mantine/core';


function Subgrid() {
    return (
        <Container my="md">
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}>
                <Image
                    radius="md"
                    h={200}
                    w="auto"
                    fit="contain"
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                />
                <Image
                    radius="md"
                    h={200}
                    w="auto"
                    fit="contain"
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                />
            </SimpleGrid>
        </Container>
    );
}

export default Subgrid;