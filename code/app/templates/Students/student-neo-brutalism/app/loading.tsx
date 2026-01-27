export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full">
            <div className="flex gap-2">
                <div className="w-4 h-4 bg-black animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-4 h-4 bg-black animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 bg-black animate-bounce"></div>
            </div>
        </div>
    );
}
