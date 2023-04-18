import { Menu } from "@/types/menu";
import React from "react";
import { Component } from "react";
import {Link,animateScroll as scroll} from "react-scroll";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

];

// render(<ScrollDemo />, document.getElementById("root"));
export default menuData;
