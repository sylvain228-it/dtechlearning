import { usePage } from '@inertiajs/react';

export default function AdminDashboard() {
    const { auth } = usePage().props;

    console.log('Admin Auth :', auth.admin);
    return (
        <div>
            <h1 className="text-3xl font-bold underline"> Admin : </h1>
        </div>
    );
}
