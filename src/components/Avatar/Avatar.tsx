interface AvatarComponentProps {
    url?: string | undefined
    external?: string
}

export default function AvatarComponent(props: AvatarComponentProps) {
    if (props.external) {
        return <div className="w-[128px] h-[128px]">
        <img
            className="rounded-[50%] w-full h-full object-cover"
            src={props.external}
            alt="profile"
        />
    </div>        
    }

    if (!props.url) {
        return <div className="w-[128px] h-[128px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>
    }

    return <div className="w-[128px] h-[128px]">
        <img
            className="rounded-[50%] w-full h-full object-cover"
            src={"https://image.tmdb.org/t/p/w500/" + props.url}
            alt="profile"
        />
    </div>
}