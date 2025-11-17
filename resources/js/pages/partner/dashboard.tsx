import PartnerLayout from '@/layouts/partner-layout';
import { dashboard } from '@/routes/partner';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];
export default function ParterDashboard() {
    return (
        <PartnerLayout breadcrumbs={breadcrumbs}>
            <Head title="Partner Dashboard" />
            <div>
                <h1 className="text-3xl font-bold underline">
                    {' '}
                    Partner Dashboard{' '}
                </h1>
            </div>
        </PartnerLayout>
    );
}
