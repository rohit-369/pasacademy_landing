import * as React from 'react';
import logo from '../../images/appLogosvg.svg'
import capLogo from '../../images/capsvg.svg'
import downArrow from '../../images/downArrowsvg.svg'
import upArrow from '../../images/upArrowsvg.svg'
import { Menu, MenuItem, Box, Button, Popper, Grow, Paper, MenuList, ClickAwayListener, Grid, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import CourseNetwrok from '../Network';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {

    const instId = '94'
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [openFree, setOpenFree] = React.useState(false);
    const anchorRefFree = React.useRef(null);
    const [courses, setCourses] = React.useState([]);
    const [anchorElF, setAnchorElF] = React.useState(null);
    const openF = Boolean(anchorElF);
    const prevOpen = React.useRef(open);
    const prevOpenFree = React.useRef(openFree);
    const [anchorElM, setAnchorElM] = React.useState(null);
    const openM = Boolean(anchorElM);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const getAllCourses = async () => {
        const response = await CourseNetwrok.fetchCourses(instId);
        setCourses(response.courses);
    };

    React.useEffect(() => {
        getAllCourses();
    }, []);

    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // };

    // const handleToggleFree = () => {
    //     setOpenFree((prevOpenFree) => !prevOpenFree);
    // };

    // const handleClose = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return;
    //     }

    //     setOpen(false);
    // };

    // const handleCloseFree = (event) => {
    //     if (anchorRefFree.current && anchorRefFree.current.contains(event.target)) {
    //         return;
    //     }
    //     setOpenFree(false);
    // };

    // function handleListKeyDown(event) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setOpen(false);
    //     } else if (event.key === 'Escape') {
    //         setOpen(false);
    //     };
    // };

    // function handleListKeyDownFree(event) {
    //     if (event.key === 'Tab') {
    //         event.preventDefault();
    //         setOpenFree(false);
    //     } else if (event.key === 'Escape') {
    //         setOpenFree(false);
    //     };
    // };

    // return focus to the button when we transitioned from !open -> open
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    
    React.useEffect(() => {
        if (prevOpenFree.current === true && openFree === false) {
            anchorRefFree.current.focus();
        }

        prevOpenFree.current = openFree;
    }, [openFree]);

    const handleClick = (event) => {
        setAnchorElM(event.currentTarget);
    };
    const handleCloseM = () => {
        setAnchorElM(null);
    };

    const handleClickF = (event) => {
        setAnchorElF(event.currentTarget);
    };
    const handleCloseF = () => {
        setAnchorElF(null);
        navigate('/content');
    };

    const handleBuyCourse = (item) => {
        const url = `https://iframe.classiolabs.com/buyCourseDetails/` + `?iframeId=12&courseId=${item?.id}&folderId=${0}&on-click=${true}`

        // const url = `${iframeData?.redirectUri}/buyCourseDetails/${item?.id}/0`
        window.open(url, '_blank', 'noreferrer');
        // navigate(`/buyCourseDetails/${item.id}`);
        handleCloseM();
    };

    return (
        <AppBar position="static"
            sx={{
                background: '#540000'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        <img alt='' src={logo} />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent: { xs: 'center', md: 'none' },
                            width: '100%'
                            // flexGrow: 1,
                            // fontFamily: 'monospace',
                            // fontWeight: 700,
                            // letterSpacing: '.3rem',
                            // color: 'inherit',
                            // textDecoration: 'none',
                        }}
                    >
                        <img alt='' src={logo} />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '5rem' }}>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            aria-controls={openM ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openM ? 'true' : undefined}
                            sx={{
                                color: '#fff',
                                fontWeight: '600',
                                fontSize: '15px',
                                textTransform: 'none',
                                gap: '10px',
                                ml: 2,
                            }}
                        >
                            Course
                            {openM === true ?
                                <img alt="" src={upArrow} />
                                :
                                <img alt="" src={downArrow} />
                            }
                        </IconButton>
                        <Menu
                            anchorEl={anchorElM}
                            id="account-menu"
                            open={openM}
                            onClose={handleCloseM}
                            onClick={handleCloseM}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            {courses && courses
                                .filter(course => course.tags.some(tag => tag.tag === "MPPSC Courses "))
                                .map((filteredCourse, index) => {
                                    return (
                                        <MenuItem
                                            // onClick={handleCloseM}
                                            onClick={() => handleBuyCourse(filteredCourse)}
                                        >
                                            {filteredCourse.title}
                                        </MenuItem>
                                    )
                                })}
                        </Menu>
                        <Button sx={{ color: '#fff', fontWeight: '600', textTransform: 'none' }}>
                            Interview Guidance
                        </Button>
                        <Button sx={{ color: '#fff', fontWeight: '600', textTransform: 'none' }}>
                            Answer Writing Program
                        </Button>
                        <IconButton
                            onClick={handleClickF}
                            size="small"
                            aria-controls={openF ? 'account-menu-f' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openF ? 'true' : undefined}
                            sx={{
                                color: '#fff',
                                fontWeight: '600',
                                fontSize: '15px',
                                textTransform: 'none',
                                gap: '10px',
                                ml: 2
                            }}
                        >
                            Free-Resources
                            {openF === true ?
                                <img alt="" src={upArrow} />
                                :
                                <img alt="" src={downArrow} />
                            }
                        </IconButton>
                        <Menu
                            anchorEl={anchorElF}
                            id="account-menu-f"
                            open={openF}
                            onClose={handleCloseF}
                            onClick={handleCloseF}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={handleCloseF}>
                                Current Affair
                            </MenuItem>
                            <MenuItem onClick={handleCloseF}>
                                Blogs
                            </MenuItem>
                        </Menu>
                        <Button sx={{ color: '#fff', fontWeight: '600', textTransform: 'none' }}>
                            Topper’s Strategy
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <Button
                            sx={{
                                background: '#FFD80D',
                                borderRadius: '40px',
                                textTransform: 'none',
                                fontWeight: '600',
                                color: 'black',
                                width: ['80%', '100%'],
                                '&:hover': {
                                    background: '#FFD80D',
                                },
                            }}
                        >
                            <img alt='' src={capLogo} />
                            Free
                        </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{
                                background: '#FFD80D',
                                borderRadius: '40px',
                                textTransform: 'none',
                                fontWeight: '600',
                                color: 'black',
                                width: ['80%', '100%'],
                                '&:hover': {
                                    background: '#FFD80D',
                                },
                            }}
                        >
                            <img alt='' src={capLogo} />
                            Free Scholarship Test
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar