import { ReactNode } from 'react';
import { PublicFooter } from './public-footer';
import { PublicNav } from './public-nav';

interface PublicLayoutProps {
    children: ReactNode;
}
export const PublicLayout = ({ children }: PublicLayoutProps) => {
    return (
        <>
            <div className="flex min-h-screen flex-col justify-between">
                <header className="p-4 shadow-md">
                    {/* Navigation bar */}
                    <PublicNav />
                </header>
                <main className="flex-grow p-4">
                    {/* Main content */} {children}
                </main>
                <footer className="p-4 shadow-md">
                    {/* Footer content */}
                    <PublicFooter />
                </footer>
            </div>
        </>
    );
};
