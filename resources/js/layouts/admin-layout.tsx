import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import AdminLayoutTemplate from './admin/admin-sidebar-layout';

interface AdminLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AdminLayoutProps) => (
    <AdminLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AdminLayoutTemplate>
);
