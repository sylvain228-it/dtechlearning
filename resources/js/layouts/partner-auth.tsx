import AuthPartnerLayoutTemplate from './partner/auth-partner-layout';

export default function PartnerAuth({
    children,
    title,
    description,
    ...props
}: {
    children: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <AuthPartnerLayoutTemplate
            title={title}
            description={description}
            {...props}
        >
            {children}
        </AuthPartnerLayoutTemplate>
    );
}
