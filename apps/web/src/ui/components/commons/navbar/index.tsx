"use client";
import {
  HandPlatter,
  House,
  NotebookTabs,
  PawPrint,
  ShoppingBasket,
} from "lucide-react";
import { Navbar as NavBarRoot, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import React from "react";

export const NavBar  = () => {
  return (
    <NavBarRoot className="bg-sky-200 shadow">
      <NavbarContent className="flex justify-center text-black gap-8">
        <NavbarItem
          as={Link}
          href="/"
          className="font-black text-3xl flex flex-row items-center gap-2"
        >
          <House />
          Home
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="/pets"
          className="font-black text-3xl flex flex-row items-center gap-2"
        >
          <PawPrint />
          Pets
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="/products"
          className="font-black text-3xl flex flex-row items-center gap-2"
        >
          <ShoppingBasket />
          Produtos
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="/services"
          className="font-black text-3xl flex flex-row items-center gap-2"
        >
          <HandPlatter />
          Serviços
        </NavbarItem>
        <NavbarItem
          as={Link}
          href="/lists"
          className="font-black text-3xl flex flex-row items-center gap-2"
        >
          <NotebookTabs />
          Listagens
        </NavbarItem>
      </NavbarContent>
    </NavBarRoot>
  );
};


