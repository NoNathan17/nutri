import React, { useState, useEffect } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ACCESS_TOKEN } from '@/constants';

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  return (
    <div className="navbar">
      <NavigationMenu>
        <NavigationMenuList>
          {/* Plan Dropdown Link */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-button">plan</NavigationMenuTrigger>
            <NavigationMenuContent className="dropdown-menu">
              <ul className="grid auto gap-3 p-4">
                <ListItem href="/bodybuilding" title="bodybuilding" style={{ color: '#44624A', textAlign: 'left' }}>
                  a plan tailored to build muscle and strength effectively
                </ListItem>
                <ListItem href="/weightloss" title="weight loss" style={{ color: '#44624A', textAlign: 'left' }}>
                  structured guidance for healthy and sustainable weight loss
                </ListItem>
                <ListItem href="/health" title="general health" style={{ color: '#44624A', textAlign: 'left' }}>
                  tips and routines to maintain overall well-being
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Nutrition Link */}
          <NavigationMenuItem>
            <NavigationMenuLink className="nav-button" href="/nutri">
              nutrition
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Home Link */}
          <NavigationMenuItem>
            <NavigationMenuLink className="nav-button" href="/">
              home
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Logout Link */}
          {isLoggedIn && (
            <NavigationMenuItem>
              <NavigationMenuLink className="nav-button" href="/logout">
                logout
              </NavigationMenuLink>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
