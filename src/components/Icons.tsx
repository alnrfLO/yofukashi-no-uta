interface IconProps {
    size?: number
    className?: string
}

const base = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
}

export function Moon({ size = 18, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    )
}

export function BookOpen({ size = 18, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
}

export function Clock({ size = 18, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}

export function Share({ size = 18, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
    )
}

export function MapPin({ size = 18, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}

export function Users({ size = 18, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

export function Droplet({ size = 14, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
    )
}

export function User({ size = 14, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}

export function Search({ size = 16, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
    )
}

export function ArrowLeft({ size = 16, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
        </svg>
    )
}

export function Music({ size = 18, className }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}
