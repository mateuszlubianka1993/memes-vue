<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand href="#">
      Navbar
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-dropdown tag="li" class="nav-item dropdown-menu-right">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed><mdb-icon icon="user-alt" size="lg" /></mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item><router-link to="/user" >Profile</router-link></mdb-dropdown-item>
            <mdb-dropdown-item>Another action</mdb-dropdown-item>
            <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <router-link to="/"><mdb-nav-item active>Home</mdb-nav-item></router-link>
        <router-link to="/signup"><mdb-nav-item>Sign Up</mdb-nav-item></router-link>
        <router-link to="/signin"><mdb-nav-item>Sign In</mdb-nav-item></router-link>
        <router-link to="/about"><mdb-nav-item>About</mdb-nav-item></router-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
  import { mdbDropdown, mdbDropdownToggle, mdbIcon, mdbDropdownMenu, mdbDropdownItem, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  export default {
    name: 'Nav',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbIcon,
      mdbNavbarNav,
      mdbNavItem,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    }
  }
</script>


