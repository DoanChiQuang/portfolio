import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { IMAGES } from '@/constants/config';

export default function Header() {
    return (
        <div className="fixed left-1/2 z-20 mt-4 -translate-x-1/2 rounded-full border bg-white shadow-sm">
            <div className="flex items-center justify-between gap-6 p-2 md:justify-center">
                <a href="#" className="p-2">
                    <img
                        loading="lazy"
                        src={IMAGES.LOGO}
                        width="24px"
                        height="24px"
                        className="max-w-none"
                        alt="Quang Doan Logo"
                    />
                </a>
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <a
                                href="#"
                                className={navigationMenuTriggerStyle()}
                            >
                                Home
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a
                                href="#about"
                                className={navigationMenuTriggerStyle()}
                            >
                                About
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a
                                href="#resume"
                                className={navigationMenuTriggerStyle()}
                            >
                                Resume
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a
                                href="#portfolio"
                                className={navigationMenuTriggerStyle()}
                            >
                                Portfolio
                            </a>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <a
                                href="#contact"
                                className={navigationMenuTriggerStyle()}
                            >
                                Contact
                            </a>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="block md:hidden">
                        <Button variant="link" className="rounded-full">
                            <Menu />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-4 block rounded-2xl md:hidden">
                        <DropdownMenuItem className="justify-center rounded-full">
                            <a href="#">Home</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="justify-center rounded-full">
                            <a href="#about">About</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="justify-center rounded-full">
                            <a href="#resume">Resume</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="justify-center rounded-full">
                            <a href="#portfolio">Portfolio</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="justify-center rounded-full">
                            <a href="#contact">Contact</a>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
