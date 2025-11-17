import AdminLayout from '@/layouts/admin-layout';
import { dashboard } from '@/routes/admin';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function AdminDashboard() {
    const { auth } = usePage().props;

    console.log('Admin Auth :', auth);
    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div>
                <h1 className="text-3xl font-bold underline"> Admin </h1>
            </div>
        </AdminLayout>
    );
}
