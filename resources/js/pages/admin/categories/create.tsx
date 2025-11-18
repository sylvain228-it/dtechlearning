import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';
import { store, update } from '@/routes/admin/categories';
import { Category } from '@/types';
import { Form, usePage } from '@inertiajs/react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

export default function AdminCategoryForm({
    categories,
    category,
}: {
    categories: Category[];
    category?: Category;
}) {
    const { errors } = usePage().props;
    const [values, setValues] = useState({
        name: category ? category.name : '',
        description: category ? category.description : '',
        category_id: category ? category.category_id : null,
        is_active: category ? category.is_active : true,
    });
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }
    const [isActiver, setIsActiver] = useState(true);

    const [open, setOpen] = useState(false);
    const [catValue, setValue] = useState(
        category != undefined && category.category_id != null
            ? category.category_id
            : 0,
    );

    return (
        <div className="mx-auto w-full rounded-xl p-5 shadow-sm">
            <h3 className="mb-3 font-bold">
                {category == undefined
                    ? 'Ajouter une catégorie'
                    : 'Modifier la catégorie'}
            </h3>
            <Form
                method={category == undefined ? 'POST' : 'PUT'}
                action={category == undefined ? store() : update(category.id)}
                onSuccess={() => {
                    setValues({
                        ...values,
                        name: '',
                        description: '',
                        category_id: null,
                        is_active: true,
                    });
                    // category = undefined;
                }}
            >
                {({ processing }) => (
                    <>
                        <div className="mb-3 grid gap-3">
                            <Input
                                type="hidden"
                                name="category_id"
                                id="category_id"
                                value={catValue === 0 ? '' : catValue}
                                onChange={handleChange}
                            />
                            <div className="grid gap-2">
                                <Label htmlFor="name">Désignation</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={values.name}
                                    className="form-input"
                                    placeholder="Désignation"
                                    onChange={handleChange}
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    type="text"
                                    name="description"
                                    value={values.description}
                                    className="form-input"
                                    id="description"
                                    placeholder="Description"
                                    onChange={handleChange}
                                />
                                <InputError message={errors.description} />
                            </div>

                            {/* catégorie parente */}
                            <div className="grid gap-2">
                                <Label>Catégorie parente</Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-full justify-between"
                                        >
                                            {catValue
                                                ? categories.find(
                                                      (catego) =>
                                                          catego.id ===
                                                          catValue,
                                                  )?.name
                                                : 'Sélectionner une catégorie...'}
                                            <ChevronsUpDown className="opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput
                                                placeholder="Rechercher une catégorie..."
                                                className="h-9"
                                            />
                                            <CommandList>
                                                <CommandEmpty>
                                                    Pas de catégorie trouvée.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {categories.map(
                                                        (catego) => (
                                                            <CommandItem
                                                                key={catego.id}
                                                                value={`${catego.id}`}
                                                                onSelect={(
                                                                    currentValue,
                                                                ) => {
                                                                    setValue(
                                                                        currentValue ===
                                                                            catValue.toFixed()
                                                                            ? 0
                                                                            : parseInt(
                                                                                  currentValue,
                                                                              ),
                                                                    );

                                                                    setOpen(
                                                                        false,
                                                                    );
                                                                }}
                                                            >
                                                                {catego.name}
                                                                <Check
                                                                    className={cn(
                                                                        'ml-auto',
                                                                        catValue ===
                                                                            catego.id
                                                                            ? 'opacity-100'
                                                                            : 'opacity-0',
                                                                    )}
                                                                />
                                                            </CommandItem>
                                                        ),
                                                    )}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="is_active"
                                    name="is_active"
                                    tabIndex={3}
                                    checked={isActiver}
                                    onChange={() =>
                                        setIsActiver((isActiver) => !isActiver)
                                    }
                                />
                                <Label htmlFor="is_active">
                                    Activer la catégorie
                                </Label>
                            </div>
                            <Button
                                type="submit"
                                className="btn-primary mt-4 w-full !py-6"
                                tabIndex={4}
                                disabled={processing}
                                data-test="create-category-button"
                            >
                                {processing && <Spinner />}
                                {category == undefined
                                    ? 'Ajouter la catégorie'
                                    : 'Mettre à jour la catégorie'}
                            </Button>
                        </div>
                    </>
                )}
            </Form>
        </div>
    );
}
