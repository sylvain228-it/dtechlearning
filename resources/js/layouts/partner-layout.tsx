import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import PartnerSidebarLayoutTemplate from './partner/partner-sidebar-layout';

interface PartnerLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: PartnerLayoutProps) => (
    <PartnerSidebarLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
        {children}
    </PartnerSidebarLayoutTemplate>
);
