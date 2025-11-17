import { AdminContent } from '@/components/admin/admin-content';
import { AdminShell } from '@/components/admin/admin-shell';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminSidebarHeader } from '@/components/admin/admin-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AdminSidebarLayout({
    children,
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <>
            <AdminShell variant="sidebar">
                <AdminSidebar />
                <AdminContent variant="sidebar" className="overflow-x-hidden">
                    <AdminSidebarHeader />
                    <div className="p-3">{children}</div>
                </AdminContent>
            </AdminShell>
        </>
    );
}
