import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInitials } from '@/hooks/use-initials';
import { type Partner } from '@/types';

export function PartnerInfo({
    partner,
    showEmail = false,
}: {
    partner: Partner;
    showEmail?: boolean;
}) {
    const getInitials = useInitials();

    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                {partner.logo_url != null && (
                    <AvatarImage src={partner.logo_url} alt={partner.name} />
                )}
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {getInitials(partner.name)}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{partner.name}</span>
                {showEmail && (
                    <span className="truncate text-xs text-muted-foreground">
                        {partner.email}
                    </span>
                )}
            </div>
        </>
    );
}
