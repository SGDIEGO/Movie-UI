interface ICategoryComponentProps {
    name: string | undefined,
    foregroundColor: "black" | "white",
    backgroundColor: "white" | "red",
}

export default function CategoryComponent(props: ICategoryComponentProps) {
    if (!props.name) return null;

    switch (props.backgroundColor) {
        case "red":
            return <div className="bg-red-500 p-2 rounded-xl max-w-32 text-white">
                <span className="font-semibold truncate">{props.name}</span>
            </div>

        case "white":
        default:
            return <div className="bg-white p-2 rounded-xl max-w-32 text-black">
                <span className="font-semibold truncate">{props.name}</span>
            </div>
    }
}