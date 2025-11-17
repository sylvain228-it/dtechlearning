import { SidebarProvider } from '@/components/ui/sidebar';
import { PartnerSharedData } from '@/types';
import { usePage } from '@inertiajs/react';

interface PartnerShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function PartnerShell({
    children,
    variant = 'header',
}: PartnerShellProps) {
    const isOpen = usePage<PartnerSharedData>().props.sidebarOpen;

    if (variant === 'header') {
        return (
            <div className="flex min-h-screen w-full flex-col">{children}</div>
        );
    }

    return <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>;
}
