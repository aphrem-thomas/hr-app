"use client";
// import { useState } from "react";
import { Anton } from "next/font/google";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar,Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Tooltip, Avatar, Button } from '@mui/material';
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { title } from "process";
import React from "react";

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
    variable: "--anton-font",
});

const routes = [
    {title:'contact', route:'/contact'},
    {title:'jobs', route:'/jobs/1'},
]
function getDropdownBgColor(currentRoute: any) {
    if (currentRoute.includes("/jobs")) {
        return "bg-white";
    } else {
        return "bg-background";
    }
}

function getBgColor(currentRoute: any) {
    if (currentRoute.includes("/jobs") || currentRoute.includes("/events")) {
        return "bg-transparent";
    } else {
        return "bg-background";
    }
}

function getHeader(currentRoute: string){
    let primeRoute = currentRoute.split('/')[1] ;
    if (primeRoute === 'contact')
        return ''
    return primeRoute;
}



function Navbar() {
    const currentRoute = usePathname();
    // const [activeTab, setActiveTab] = useState('home')
    const [dropdown, setDropdown] = useState(false);
    const [currentNav, setCurrentNav] = useState("/")
    const router = useRouter()
    const ref = useRef<any>(null);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
      null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);

    return (
    <AppBar position="static"  sx={{backgroundColor:"background.default"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            savaHR
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
              {routes.map((page) => (
                <MenuItem key={page.route}>
                  <a href={page.route} onClick={()=>setCurrentNav(page.route)}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            sava HR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:"flex-end" }}>
            {routes.map((page) => (
              <Button
                onClick={()=>setCurrentNav(page.route)}
                key={page.route}
                variant="text"
                sx={{ my: 2, color: 'text.primary', display: 'block' ,
                }}
                href={page.route}
              >
                <Typography sx={{
                    borderBottom:currentRoute.includes(page.route)?"2px solid":"unset",
                    borderColor:"primary.main"
                }}>{page.title}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
}

export default Navbar;
