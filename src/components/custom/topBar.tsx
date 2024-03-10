import { BellIcon } from '@/assets/icons';
import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  H2,
  H6,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui';

export const TopBar: React.FC<TReactChildren> = ({ children }) => {
  return (
    <div>
      <NavigationMenu className="flex justify-between items-center py-4 px-8 min-w-full shadow-md fixed top-0 bg-white">
        {/*  */}
        <NavigationMenuList className="flex gap-8">
          <NavigationMenuItem className="">
            <Link href={'/create-a-trip'} legacyBehavior passHref>
              <NavigationMenuLink>
                <H6>Create a Trip</H6>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="">
            <Link href={'/faq'} legacyBehavior passHref>
              <NavigationMenuLink>
                <H6>FAQ</H6>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        {/*  */}
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <Link href={'/'} legacyBehavior passHref>
              <NavigationMenuLink>
                <H2>Trip Planner</H2>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        {/*  */}
        <NavigationMenuList className="flex gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <H6>My Trips</H6>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <BellIcon />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="px-8 pt-20 pb-4 h-svh">{children}</div>
    </div>
  );
};
