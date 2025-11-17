import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons/lib';

export interface Auth {
    user: User;
}
export interface AdminAuth {
    admin: Admin;
}
export interface PartnerAuth {
    partner: Partner;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | IconType | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}
export interface AdminSharedData {
    name: string;
    quote: { message: string; author: string };
    auth: AdminAuth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}
export interface PartnerSharedData {
    name: string;
    quote: { message: string; author: string };
    auth: PartnerAuth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_picture_url?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
export interface Admin {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_picture_url?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Course {
    id: number;
    title: string;
    description: string;
    published: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface Teacher {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_picture_url?: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface Student {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    profile_picture_url?: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface Partner {
    id: number;
    name: string;
    description: string;
    phone_number?: string;
    email?: string;
    logo_url?: string;
    website_url?: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

export interface PaginationMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    [key: string]: unknown;
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginationMeta;
}
