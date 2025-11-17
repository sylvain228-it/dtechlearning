import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
    courses,
    dashboard,
    etudiants,
    partners,
    teachers,
} from '@/routes/admin';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Gauge } from 'lucide-react';
import { FaBook } from 'react-icons/fa';
import { FaBuildingColumns, FaUsersLine } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import AppLogo from '../app-logo-icon';
const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: Gauge,
    },
    {
        title: 'Cours',
        href: courses(),
        icon: FaBook,
    },
    {
        title: 'Organisations',
        href: partners(),
        icon: FaBuildingColumns,
    },
    {
        title: 'Enseignants',
        href: teachers(),
        icon: GiTeacher,
    },
    {
        title: 'Etudiants',
        href: etudiants(),
        icon: FaUsersLine,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Documentation',
        href: '#',
        icon: BookOpen,
    },
];

export function AdminSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset" className="bg-app-blue">
            <SidebarHeader className="bg-pink-100">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                {/* <NavAdmin /> */}
            </SidebarFooter>
        </Sidebar>
    );
}
