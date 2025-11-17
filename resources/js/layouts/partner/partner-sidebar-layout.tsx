import { PartnerContent } from '@/components/partner/partner-content';
import { PartnerShell } from '@/components/partner/partner-shell';
import { PartnerSidebar } from '@/components/partner/partner-sidebar';
import { PartnerSidebarHeader } from '@/components/partner/partner-sidebar-header';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function PartnerSidebarLayout({
    children,
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <>
            <PartnerShell variant="sidebar">
                <PartnerSidebar />
                <PartnerContent variant="sidebar" className="overflow-x-hidden">
                    <PartnerSidebarHeader />
                    <div className="p-3">{children}</div>
                </PartnerContent>
            </PartnerShell>
        </>
    );
}
