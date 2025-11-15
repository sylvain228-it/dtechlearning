import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AdminAuth from '@/layouts/admin-auth';
import { Form, Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface AdminLoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function AdminLogin({ status }: AdminLoginProps) {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        email: null,
        password: null,
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    }

    console.log(errors);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post('/dtech-hpanel-login', values);
    }
    return (
        <AdminAuth
            title="Connexion Admin"
            description="Connectez-vous pour accéder au tableau de bord admin"
        >
            <Head title="Se connecter" />

            <Form
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
            >
                {({ processing }) => (
                    <>
                        {errors.login && (
                            <div className="mb-4 text-center text-sm font-medium text-red-600">
                                {errors.login}
                            </div>
                        )}
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Adresse email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="E-mail"
                                    className="form-input"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="grid gap-2">
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Mot de passe"
                                    className="form-input"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember">
                                    Souviens-toi de moi
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="btn-primary mt-4 w-full !py-6"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Spinner />}
                                Se connecter
                            </Button>
                        </div>
                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </AdminAuth>
    );
}
