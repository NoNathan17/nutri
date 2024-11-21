// Home.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeDLogo from './ThreeDLogo';
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button"; 
import BiometricsForm from '../components/BiometricsForm';  
import { cn } from "@/lib/utils";

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

function Home() {
  return (
    <div className="app-container">
      <div className="navbar">
        {/* ShadCN Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home Link */}
            <NavigationMenuItem>
              <NavigationMenuLink className="nav-button" href="/">
                home
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Nutr Link */}
            <NavigationMenuItem>
              <NavigationMenuLink className="nav-button" href="/nutr">
                nutri !!
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Plan Dropdown Link */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-button">plan</NavigationMenuTrigger>
              <NavigationMenuContent className="dropdown-menu">
                <ul className="grid w-full gap-3 p-4">
                  <ListItem href="/plan" title="Bodybuilding" style={{ color: '#44624A' }}>
                    A plan tailored to build muscle and strength effectively.
                  </ListItem>
                  <ListItem href="/plan" title="Weight Loss" style={{ color: '#44624A' }}>
                    Structured guidance for healthy and sustainable weight loss.
                  </ListItem>
                  <ListItem href="/plan" title="Health" style={{ color: '#44624A' }}>
                    Tips and routines to maintain overall well-being.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Main Content */}
      <div className="app-container">
        <ThreeDLogo />
        <h1>nutri !!</h1>
        <p>
          A fitness web application designed to help you meet your personal <br />
          fitness goals. Made by Jay + Nathan + Danny @ WebJam '24
        </p>

        {/* Dialog with BiometricsForm */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="start-button">
              start here !! ↩
            </Button>
          </DialogTrigger>
          
          {/* Dialog Content */}
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Enter Your Biometrics</DialogTitle>
              <DialogDescription>
                Fill in your details below to get personalized recommendations.
              </DialogDescription>
            </DialogHeader>

            {/* Biometrics Form Component */}
            <BiometricsForm />

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <p className="plans-intro">...or check out some of our plans</p>

        {/* Tab Section */}
        <div className="tabs">
          <button className="tab">bodybuilding</button>
          <button className="tab">weight loss</button>
          <button className="tab">health</button>
        </div>

        {/* Plan Content */}
        <div className="plan-container">
          <div className="plan">
            <h3>✤ Bodybuilding | 健美</h3>
            <p>
              Bodybuilding focuses on building muscle mass and strength through targeted weight training. It helps sculpt your body, improve metabolism, and increase overall vitality. Perfect for those looking to gain muscle while reducing body fat.
            </p>
          </div>
          <div className="plan">
            <h3>✤ Weight Loss | 减肥</h3>
            <p>
              Weight loss involves a combination of calorie management, cardiovascular exercise, and strength training. It's designed to reduce body fat and improve fitness levels, leading to better health, more energy, and an overall improved sense of well-being.
            </p>
          </div>
          <div className="plan">
            <h3>✤ Health | 健康</h3>
            <p>
              Health focuses on holistic well-being, including improving cardiovascular fitness, flexibility, and mental health. This plan is great for anyone seeking to enhance their quality of life, reduce stress, and develop sustainable healthy habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
