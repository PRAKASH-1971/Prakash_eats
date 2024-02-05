import { ReactNode } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    Image,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'About', 'Login', 'Signup', 'Cart'];

const NavLink = ({ children, linked }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={`#${(linked)}`}
    >
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
            w={"100%"} p="10px 0px" className='navbar'>
            <Box
                //  bg={useColorModeValue('gray.100', 'gray.900')}
                px={4} maxWidth="1570px" w={["100%", "100%", "89%"]} margin="auto">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}
                    //    bg={useColorModeValue('gray.100', 'gray.900')}
                    flexDirection={'row-reverse'}
                >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'} id="navlink"
                            spacing={8} color="#39424E"
                            display={{ base: 'none', md: 'flex' }} fontSize={"18px"} fontWeight={"600"}  >
                            {Links.map((link) => (
                                <b>
                                    <NavLink key={link} linked={link.toLowerCase()}>{link}</NavLink>
                                </b>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Image
                                    size={'md'} w="190px" h="72px"  padding={"5px"} borderRadius={"20px"} marginLeft={"-10px"}
                                    src={
                                        'https://iili.io/JJYi5V2.png'
                                    }
                                />
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box p={2} display={{ md: 'none' }} bg="white">
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link} linked={link.toLowerCase()}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </Box>
    );
}

