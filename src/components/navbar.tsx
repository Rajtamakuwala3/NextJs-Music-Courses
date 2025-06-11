"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="home"
          ></MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem setActive={setActive} active={active} item="our cources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Cources</HoveredLink>
              <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
              <HoveredLink href="/courses">Advance Composition</HoveredLink>
              <HoveredLink href="/courses">Song Writing</HoveredLink>
              <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contanct Us">
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/cources">All Cources</HoveredLink>
              <HoveredLink href="/cources">Basic Music Theory</HoveredLink>
              <HoveredLink href="/cources">Advance Composition</HoveredLink>
              <HoveredLink href="/cources">Song Writing</HoveredLink>
              <HoveredLink href="/cources">Music Production</HoveredLink>
            </div> */}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default NavBar;
