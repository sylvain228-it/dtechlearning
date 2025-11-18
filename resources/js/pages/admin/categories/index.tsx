import AdminLayout from '@/layouts/admin-layout';
import { Category } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import AdminCategoryForm from './create';
import CategoryDataTable from './datatable';

export default function AdminCategoryIndex() {
    const { categories } = usePage().props as unknown as {
        categories: Category[];
    };
    const { category } = usePage().props as unknown as {
        category: Category | undefined;
    };

    return (
        <AdminLayout>
            <Head title="Liste de catégories" />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
                <div className="col-span-4">
                    <CategoryDataTable categories={categories} />
                </div>
                <div className="col-span-2">
                    <AdminCategoryForm
                        categories={categories}
                        category={category}
                    />
                </div>
            </div>
        </AdminLayout>
    );
}
